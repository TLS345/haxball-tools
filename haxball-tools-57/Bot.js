// Add systemPrompt for AI in generateAIResponse (leave empty currently)
// By Teleese/TLS
// Day 57-60

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

puppeteer.use(StealthPlugin());

let fetchFunc = null;
async function getFetch() {
  if (fetchFunc) return fetchFunc;
  if (typeof fetch !== 'undefined') {
    fetchFunc = fetch;
    return fetchFunc;
  }
  const m = await import('node-fetch');
  fetchFunc = m.default;
  return fetchFunc;
}

const CONFIG = {
    ROOM_URL: process.argv[2] || '',
    BOT_NAME: process.argv[3] || `Logger_${Math.floor(Math.random() * 9999)}`,
    DURATION: parseInt(process.argv[4]) || 3600,
    OUTPUT_DIR: process.argv[5] || 'logs',
    MOVE_INTERVAL: 4000,
    COLLECT_INTERVAL: 3000,
    HEALTH_CHECK_INTERVAL: 20000,
    AUTO_REPLY: true,
    REPLY_DELAY: 2000
};

let globalFrame = null;
let globalPage = null;
let rl = null;

const logData = {
    room_url: CONFIG.ROOM_URL,
    bot_name: CONFIG.BOT_NAME,
    session_start: new Date().toISOString(),
    session_end: null,
    duration_seconds: CONFIG.DURATION,
    messages: [],
    events: [],
    players_snapshot: [],
    game_states: [],
    raw_dom_captures: [],
    bot_messages_sent: [],
    ai_responses: [],
    chat_context: [],
    statistics: {
        total_messages: 0,
        total_events: 0,
        total_dom_captures: 0,
        unique_players: new Set(),
        goals_red: 0,
        goals_blue: 0,
        total_kicks: 0,
        total_bans: 0,
        total_joins: 0,
        total_leaves: 0,
        bot_messages_count: 0,
        ai_responses_count: 0,
        most_active_player: null,
        player_message_count: {},
        chat_timeline: []
    }
};

if (!CONFIG.ROOM_URL) {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║           🤖 HaxBall Interactive Chat Logger Bot             ║
╚═══════════════════════════════════════════════════════════════╝

Usage:
  node logger.js <room_url> [bot_name] [duration_seconds] [output_dir]

Example:
  node logger.js "https://www.haxball.com/play?c=XXXX" "SpyBot" 1800

Features:
  ✓ Captures ALL chat and live events
  ✓ Send messages from the CMD into the room chat
  ✓ Shows chat in real time in your console
  ✓ Auto-responds with AI when mentioned (@bot)
  ✓ Anti-AFK automatic moves
  ✓ Saves everything to JSON on finish
  ✓ Detailed stats and player analysis
    `);
    process.exit(1);
}

console.log(`
╔═══════════════════════════════════════════════════════════════╗
║           🤖 HaxBall Interactive Chat Logger Bot             ║
╚═══════════════════════════════════════════════════════════════╝

📝 Bot:       ${CONFIG.BOT_NAME}
⏱️  Duration:  ${Math.floor(CONFIG.DURATION/60)} minutes
🔗 Room:      ${CONFIG.ROOM_URL}
💾 Output:    ${CONFIG.OUTPUT_DIR}/

🚀 Starting...
`);

const OPENROUTER_KEY = process.env.OPENROUTER_KEY || null;
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = "gpt-4o-mini";

async function generateAIResponse(playerName, message, chatContext) {
    try {
        if (!OPENROUTER_KEY) {
            console.warn('⚠️ OPENROUTER_KEY not set. Skipping AI.');
            return null;
        }

        const fetch = await getFetch();

        const contextMessages = chatContext.slice(-12).map(msg =>
            `${msg.player}: ${msg.message}`
        ).join('\n');

        const systemPrompt = ``;

        const userPrompt = `${playerName} said: "${message}". Reply direct and casual, short.`;

        const body = {
            model: OPENROUTER_MODEL,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            max_tokens: 120,
            temperature: 0.85
        };

        const res = await fetch(OPENROUTER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENROUTER_KEY}`
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            const text = await res.text().catch(() => '');
            console.error(`❌ OpenRouter Error (${res.status}):`, text);
            return null;
        }

        const data = await res.json();

        const aiText = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content)
            ? data.choices[0].message.content.trim()
            : (data.output?.[0]?.content?.[0]?.text ? data.output[0].content[0].text.trim() : null);

        if (!aiText) {
            console.warn('⚠️ AI response empty or unexpected format.', data);
            return null;
        }

        const aiEntry = {
            timestamp: new Date().toISOString(),
            player: playerName,
            question: message,
            response: aiText,
            context_size: chatContext.length
        };

        logData.ai_responses.push(aiEntry);
        logData.statistics.ai_responses_count++;

        console.log(`✅ AI replied: "${aiText}"\n`);
        return aiText;

    } catch (error) {
        console.error('❌ Error generating AI response:', error && (error.message || error));
        return null;
    }
}

function isBotMentioned(message, botName) {
    if (!message) return false;
    const normalizedMsg = message.toLowerCase();
    const normalizedBot = botName.toLowerCase();

    const patterns = [
        `@${normalizedBot}`,
        normalizedBot,
        `hey ${normalizedBot}`,
        `${normalizedBot}:`,
        `${normalizedBot},`
    ];

    return patterns.some(pattern => normalizedMsg.includes(pattern));
}

async function sendMessageToChat(message) {
    if (!globalFrame || !globalPage) {
        console.log('❌ Not connected to the room');
        return;
    }

    try {
        const chatSelector = 'input[data-hook="input"][maxlength="140"]';
        await globalFrame.waitForSelector(chatSelector, { timeout: 3000 });

        const chatInput = await globalFrame.$(chatSelector);
        if (!chatInput) return;

        await chatInput.click();
        await new Promise(resolve => setTimeout(resolve, 200));

        await chatInput.click({ clickCount: 3 });
        await globalPage.keyboard.press('Backspace');
        await new Promise(resolve => setTimeout(resolve, 100));

        await chatInput.type(message, { delay: 30 });
        await new Promise(resolve => setTimeout(resolve, 200));

        await globalPage.keyboard.press('Enter');

        const sentMsg = {
            timestamp: new Date().toISOString(),
            message: message,
            bot_name: CONFIG.BOT_NAME
        };

        logData.bot_messages_sent.push(sentMsg);
        logData.statistics.bot_messages_count++;

        console.log(`\n💬 [BOT] ${CONFIG.BOT_NAME}: ${message}\n`);

    } catch (error) {
        console.log('❌ Error sending message:', error && (error.message || error));
    }
}

function setupInteractiveInput() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: ''
    });

    console.log('\n💡 INTERACTIVE MODE ENABLED');
    console.log('💡 Type something and press ENTER to send to the chat');
    console.log('💡 The bot will auto-reply if mentioned with @');
    console.log('💡 Special commands:');
    console.log('   /quit     - Exit and save');
    console.log('   /stats    - Show current stats');
    console.log('   /players  - Show players in room');
    console.log('   /save     - Save now (keep running)');
    console.log('   /context  - Show AI chat context\n');

    rl.on('line', async (input) => {
        const message = input.trim();

        if (!message) return;

        if (message === '/quit') {
            console.log('\n🛑 Shutting down...');
            await gracefulShutdown();
            return;
        }

        if (message === '/stats') {
            console.log(`\n📊 CURRENT STATS:`);
            console.log(`   Messages: ${logData.messages.length}`);
            console.log(`   Events: ${logData.events.length}`);
            console.log(`   Unique players: ${logData.statistics.unique_players.size}`);
            console.log(`   Bot messages: ${logData.statistics.bot_messages_count}`);
            console.log(`   Goals RED: ${logData.statistics.goals_red} | BLUE: ${logData.statistics.goals_blue}`);
            console.log(`   Joins: ${logData.statistics.total_joins} | Leaves: ${logData.statistics.total_leaves}\n`);
            return;
        }

        if (message === '/players') {
            if (logData.players_snapshot && logData.players_snapshot.length > 0) {
                console.log(`\n👥 PLAYERS IN ROOM (${logData.players_snapshot.length}):`);
                logData.players_snapshot.forEach(p => {
                    const team = p.team === 1 ? '🔴' : p.team === 2 ? '🔵' : '⚪';
                    const admin = p.admin ? '👑' : '';
                    console.log(`   ${team} ${admin} ${p.name} (ID: ${p.id})`);
                });
                console.log('');
            } else {
                console.log('\n⚠️  No player information available\n');
            }
            return;
        }

        if (message === '/save') {
            console.log('\n💾 Saving data...');
            await saveData();
            console.log('✅ Data saved (bot still running)\n');
            return;
        }

        if (message === '/context') {
            console.log(`\n📝 CHAT CONTEXT (last ${logData.chat_context.length} messages):`);
            logData.chat_context.slice(-10).forEach(msg => {
                console.log(`   ${msg.player}: ${msg.message}`);
            });
            console.log('');
            return;
        }

        await sendMessageToChat(message);
    });
}

function buildSerializableLog() {
    const copy = {
        room_url: logData.room_url,
        bot_name: logData.bot_name,
        session_start: logData.session_start,
        session_end: logData.session_end,
        duration_seconds: logData.duration_seconds,
        messages: Array.isArray(logData.messages) ? logData.messages.slice() : [],
        events: Array.isArray(logData.events) ? logData.events.slice() : [],
        players_snapshot: Array.isArray(logData.players_snapshot) ? logData.players_snapshot.slice() : [],
        game_states: Array.isArray(logData.game_states) ? logData.game_states.slice() : [],
        raw_dom_captures: Array.isArray(logData.raw_dom_captures) ? logData.raw_dom_captures.slice() : [],
        bot_messages_sent: Array.isArray(logData.bot_messages_sent) ? logData.bot_messages_sent.slice() : [],
        ai_responses: Array.isArray(logData.ai_responses) ? logData.ai_responses.slice() : [],
        chat_context: Array.isArray(logData.chat_context) ? logData.chat_context.slice() : [],
        statistics: {
            total_messages: logData.statistics.total_messages || 0,
            total_events: logData.statistics.total_events || 0,
            total_dom_captures: logData.statistics.total_dom_captures || 0,
            unique_players: Array.from(logData.statistics.unique_players || []),
            goals_red: logData.statistics.goals_red || 0,
            goals_blue: logData.statistics.goals_blue || 0,
            total_kicks: logData.statistics.total_kicks || 0,
            total_bans: logData.statistics.total_bans || 0,
            total_joins: logData.statistics.total_joins || 0,
            total_leaves: logData.statistics.total_leaves || 0,
            bot_messages_count: logData.statistics.bot_messages_count || 0,
            ai_responses_count: logData.statistics.ai_responses_count || 0,
            most_active_player: logData.statistics.most_active_player || null,
            player_message_count: Object.assign({}, logData.statistics.player_message_count || {}),
            chat_timeline: Array.isArray(logData.statistics.chat_timeline) ? logData.statistics.chat_timeline.slice() : []
        }
    };
    return copy;
}

async function saveData() {
    try {
        console.log('\n💾 Saving data...');
        console.log('📂 Directory:', path.resolve(CONFIG.OUTPUT_DIR));

        await fs.mkdir(CONFIG.OUTPUT_DIR, { recursive: true });
        console.log('✅ Directory created/verified');

        logData.session_end = new Date().toISOString();
        logData.statistics.total_messages = logData.messages.length;
        logData.statistics.total_events = logData.events.length;
        logData.statistics.total_dom_captures = logData.raw_dom_captures.length;

        if (Object.keys(logData.statistics.player_message_count).length > 0) {
            const mostActive = Object.entries(logData.statistics.player_message_count)
                .sort((a, b) => b[1] - a[1])[0];
            logData.statistics.most_active_player = {
                name: mostActive[0],
                message_count: mostActive[1]
            };
        }

        const timestamp = Date.now();
        const filename = `haxball_log_${timestamp}.json`;
        const filepath = path.resolve(CONFIG.OUTPUT_DIR, filename);

        console.log('📄 Destination file:', filepath);
        console.log('💾 Writing file...');

        const safeLog = buildSerializableLog();
        const jsonData = JSON.stringify(safeLog, null, 2);

        console.log('📊 JSON size:', (jsonData.length / 1024).toFixed(2), 'KB');

        await fs.writeFile(filepath, jsonData, 'utf8');

        console.log('✅ File written successfully!');

        const exists = await fs.access(filepath).then(() => true).catch(() => false);
        console.log('🔍 File exists:', exists);

        console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                    💾 DATA SAVED                              ║
╚═══════════════════════════════════════════════════════════════╝

📄 File:               ${filepath}
📊 Messages:           ${logData.statistics.total_messages}
📊 Events:             ${logData.statistics.total_events}
📊 DOM Captures:       ${logData.statistics.total_dom_captures}
📤 Bot messages:       ${logData.statistics.bot_messages_count}
🤖 AI responses:       ${logData.statistics.ai_responses_count}
👥 Unique players:     ${Array.from(logData.statistics.unique_players || []).length}
${logData.statistics.most_active_player ? `🔥 Most active:        ${logData.statistics.most_active_player.name} (${logData.statistics.most_active_player.message_count} msgs)` : ''}
⚽ Goals RED:          ${logData.statistics.goals_red}
⚽ Goals BLUE:         ${logData.statistics.goals_blue}
🚪 Joins:              ${logData.statistics.total_joins}
👋 Leaves:             ${logData.statistics.total_leaves}
🥾 Kicks:              ${logData.statistics.total_kicks}
🔨 Bans:               ${logData.statistics.total_bans}
        `);

        return filepath;
    } catch (error) {
        console.error('❌ ERROR SAVING:', error);
        console.error('Message:', error && (error.message || error));
        if (error && error.stack) console.error('Stack:', error.stack);
        return null;
    }
}

async function main() {
    let browser;
    let page;
    let frame;

    try {
        console.log('🌐 Launching browser...');
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-blink-features=AutomationControlled',
                '--disable-web-security',
                '--disable-features=IsolateOrigins,site-per-process'
            ]
        });

        page = await browser.newPage();
        globalPage = page;

        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', { get: () => false });
            Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
        });

        const countries = [
            { code: 'ar', lat: -34.6037, lon: -58.3816 },
            { code: 'br', lat: -23.5505, lon: -46.6333 },
            { code: 'cl', lat: -33.4489, lon: -70.6693 }
        ];

        const randomCountry = countries[Math.floor(Math.random() * countries.length)];

        await page.evaluateOnNewDocument((country) => {
            localStorage.setItem("geo", JSON.stringify({
                lat: country.lat,
                lon: country.lon,
                code: country.code
            }));
        }, randomCountry);

        console.log('🔗 Connecting to room...');
        await page.goto(CONFIG.ROOM_URL, { waitUntil: 'networkidle2', timeout: 30000 });

        await page.waitForSelector('iframe', { timeout: 15000 });
        const iframeElement = await page.$('iframe');
        frame = await iframeElement.contentFrame();
        globalFrame = frame;

        if (!frame) throw new Error('Could not access iframe');

        console.log('✍️  Joining room...');
        const nickSelector = 'input[data-hook="input"][maxlength="25"]';
        await frame.waitForSelector(nickSelector, { timeout: 15000 });
        await frame.type(nickSelector, CONFIG.BOT_NAME, { delay: 50 });

        const joinButtonSelector = 'button[data-hook="ok"]';
        await frame.waitForSelector(joinButtonSelector, { timeout: 15000 });
        await frame.click(joinButtonSelector);

        await new Promise(resolve => setTimeout(resolve, 3000));

        const chatSelector = 'input[data-hook="input"][maxlength="140"]';
        await frame.waitForSelector(chatSelector, { timeout: 10000 });

        console.log('✅ Bot inside the room!\n');

        console.log('🔧 Setting up capture...');

        await frame.evaluate(() => {
            window.haxballLogger = {
                messages: [],
                events: [],
                domCaptures: [],
                apiHooked: false
            };

            const originalLog = console.log;
            console.log = function(...args) {
                const message = args.join(' ');
                if (message && message.trim()) {
                    window.haxballLogger.messages.push({
                        timestamp: new Date().toISOString(),
                        source: 'console',
                        type: 'system',
                        content: message
                    });
                }
                return originalLog.apply(console, args);
            };

            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                            const text = (node.textContent || '').trim();
                            if (!text) return;

                            window.haxballLogger.domCaptures.push({
                                timestamp: new Date().toISOString(),
                                text: text
                            });

                            let parsed = {
                                timestamp: new Date().toISOString(),
                                source: 'dom',
                                raw: text
                            };

                            const chatMatch = text.match(/^([^:]+):\s*(.+)$/);
                            if (chatMatch) {
                                parsed.type = 'chat';
                                parsed.player = chatMatch[1].trim();
                                parsed.message = chatMatch[2].trim();
                                window.haxballLogger.messages.push(parsed);
                                return;
                            }

                            const lower = text.toLowerCase();

                            if (lower.includes('joined')) {
                                parsed.type = 'join';
                                window.haxballLogger.events.push(parsed);
                            } else if (lower.includes('left')) {
                                parsed.type = 'leave';
                                window.haxballLogger.events.push(parsed);
                            } else if (lower.includes('goal')) {
                                parsed.type = 'goal';
                                window.haxballLogger.events.push(parsed);
                            } else if (lower.includes('kicked')) {
                                parsed.type = 'kick';
                                window.haxballLogger.events.push(parsed);
                            } else if (lower.includes('banned')) {
                                parsed.type = 'ban';
                                window.haxballLogger.events.push(parsed);
                            } else {
                                parsed.type = 'other';
                                window.haxballLogger.messages.push(parsed);
                            }
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });

            let attempts = 0;
            const hookInterval = setInterval(() => {
                attempts++;
                if (attempts > 20) {
                    clearInterval(hookInterval);
                    return;
                }

                let room = window.room || (typeof room !== 'undefined' ? room : null);

                if (room && !window.haxballLogger.apiHooked) {
                    window.haxballLogger.apiHooked = true;

                    try {
                        const orig = room.onPlayerChat;
                        room.onPlayerChat = function(player, message) {
                            window.haxballLogger.messages.push({
                                timestamp: new Date().toISOString(),
                                source: 'api',
                                type: 'chat',
                                player: player.name,
                                player_id: player.id,
                                message: message
                            });
                            if (orig) return orig.call(this, player, message);
                        };
                    } catch(e) {}

                    clearInterval(hookInterval);
                }
            }, 500);
        });

        console.log('✅ System activated\n');

        const moves = ['w', 'a', 's', 'd'];
        let moveIndex = 0;

        cleanupIntervals.move = setInterval(async () => {
            try {
                const key = moves[moveIndex % moves.length];
                await page.keyboard.press(key, { delay: 100 });
                moveIndex++;
            } catch (e) {}
        }, CONFIG.MOVE_INTERVAL);

        cleanupIntervals.collect = setInterval(async () => {
            try {
                const data = await frame.evaluate(() => {
                    const logger = window.haxballLogger || { messages: [], events: [], domCaptures: [] };
                    const snapshot = {
                        messages: [...logger.messages],
                        events: [...logger.events],
                        domCaptures: [...logger.domCaptures]
                    };

                    window.haxballLogger.messages = [];
                    window.haxballLogger.events = [];
                    window.haxballLogger.domCaptures = [];

                    try {
                        if (typeof room !== 'undefined' && room) {
                            snapshot.players = room.getPlayerList ? room.getPlayerList() : null;
                            snapshot.scores = room.getScores ? room.getScores() : null;
                        }
                    } catch(e) {}

                    return snapshot;
                });

                if (data.messages && data.messages.length > 0) {
                    for (const msg of data.messages) {
                        if (msg.type === 'chat' && msg.player && msg.message) {
                            console.log(`💬 ${msg.player}: ${msg.message}`);

                            logData.chat_context.push({
                                timestamp: msg.timestamp,
                                player: msg.player,
                                message: msg.message
                            });

                            if (logData.chat_context.length > 50) {
                                logData.chat_context.shift();
                            }

                            if (msg.player) {
                                logData.statistics.player_message_count[msg.player] =
                                    (logData.statistics.player_message_count[msg.player] || 0) + 1;
                            }

                            if (CONFIG.AUTO_REPLY && msg.player !== CONFIG.BOT_NAME) {
                                if (isBotMentioned(msg.message, CONFIG.BOT_NAME)) {
                                    console.log(`\n🎯 ${msg.player} mentioned the bot!\n`);

                                    setTimeout(async () => {
                                        const aiResponse = await generateAIResponse(
                                            msg.player,
                                            msg.message,
                                            logData.chat_context
                                        );

                                        if (aiResponse) {
                                            await sendMessageToChat(aiResponse);
                                        }
                                    }, CONFIG.REPLY_DELAY + Math.random() * 1000);
                                }
                            }
                        }
                    }
                    logData.messages.push(...data.messages);
                }

                if (data.events && data.events.length > 0) {
                    data.events.forEach(evt => {
                        if (evt.type === 'join') {
                            console.log(`🚪 ${evt.raw}`);
                            logData.statistics.total_joins++;
                        } else if (evt.type === 'leave') {
                            console.log(`👋 ${evt.raw}`);
                            logData.statistics.total_leaves++;
                        } else if (evt.type === 'goal') {
                            console.log(`⚽ ${evt.raw}`);
                        } else if (evt.type === 'kick') {
                            console.log(`🥾 ${evt.raw}`);
                            logData.statistics.total_kicks++;
                        } else if (evt.type === 'ban') {
                            console.log(`🔨 ${evt.raw}`);
                            logData.statistics.total_bans++;
                        }
                    });
                    logData.events.push(...data.events);
                }

                if (data.domCaptures) {
                    logData.raw_dom_captures.push(...data.domCaptures);
                }

                if (data.players) {
                    logData.players_snapshot = data.players;
                    data.players.forEach(p => {
                        if (p.name) logData.statistics.unique_players.add(p.name);
                    });
                }

                if (data.scores) {
                    logData.game_states.push({
                        timestamp: new Date().toISOString(),
                        scores: data.scores
                    });
                }

            } catch (error) {
                // silent
            }
        }, CONFIG.COLLECT_INTERVAL);

        cleanupIntervals.progress = setInterval(() => {
            console.log(`\n📊 Stats: ${logData.messages.length} msgs | ${logData.events.length} events | ${logData.statistics.unique_players.size} players\n`);
        }, 30000);

        let failedChecks = 0;
        cleanupIntervals.health = setInterval(async () => {
            try {
                await frame.waitForSelector(chatSelector, { timeout: 5000 });
                failedChecks = 0;
            } catch (error) {
                failedChecks++;
                if (failedChecks >= 3) {
                    throw new Error('Connection lost');
                }
            }
        }, CONFIG.HEALTH_CHECK_INTERVAL);

        setupInteractiveInput();

        console.log(`⏱️  Logging for ${Math.floor(CONFIG.DURATION/60)} minutes...\n`);

        await new Promise(resolve => setTimeout(resolve, CONFIG.DURATION * 1000));

        Object.values(cleanupIntervals).forEach(i => {
            if (i) clearInterval(i);
        });

        try {
            const finalData = await frame.evaluate(() => {
                const logger = window.haxballLogger || { messages: [], events: [], domCaptures: [] };
                return {
                    messages: logger.messages || [],
                    events: logger.events || [],
                    domCaptures: logger.domCaptures || []
                };
            });

            if (finalData.messages) logData.messages.push(...finalData.messages);
            if (finalData.events) logData.events.push(...finalData.events);
            if (finalData.domCaptures) logData.raw_dom_captures.push(...finalData.domCaptures);
        } catch(e) {}

        console.log('\n✅ Completed!');
        await saveData();

    } catch (error) {
        console.error('\n❌ Error:', error && (error.message || error));
        await saveData();
        throw error;

    } finally {
        if (rl) rl.close();
        if (browser) await browser.close();
    }
}

let cleanupIntervals = {
    move: null,
    collect: null,
    progress: null,
    health: null
};

let isClosing = false;

async function gracefulShutdown() {
    if (isClosing) return;
    isClosing = true;

    console.log('\n\n⚠️  Shutting down and saving...');

    Object.values(cleanupIntervals).forEach(interval => {
        if (interval) clearInterval(interval);
    });

    if (rl) {
        rl.close();
        rl = null;
    }

    try {
        await saveData();
        console.log('✅ Save complete');
    } catch(e) {
        console.error('❌ Error saving:', e && (e.message || e));
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    process.exit(0);
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('uncaughtException', async (error) => {
    console.error('\n❌ Uncaught error:', error && (error.message || error));
    await gracefulShutdown();
});
process.on('unhandledRejection', async (error) => {
    console.error('\n❌ Unhandled rejection:', error);
    await gracefulShutdown();
});

main().catch(async (error) => {
    console.error('❌ Fatal:', error && (error.message || error));
    await gracefulShutdown();
});
