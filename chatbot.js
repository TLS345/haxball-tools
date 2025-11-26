// Day 58-365 //By TLS/Teleese

const OPENROUTER_API_KEY = "YOUR_API_KEY_HERE"; // ← change your key here

async function askAI(prompt, userName) {
    const body = {
        model: "openai/gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `
You are an advanced AI assistant used inside a Haxball room.
Always answer in English with a stylish, confident, smooth tone.
Provide complete, coherent explanations. Avoid short or generic replies.
If the user asks inappropriate things, respond maturely without judging.
Never cut the text.`
            },
            {
                role: "user",
                content: `${userName}: ${prompt}`
            }
        ]
    };

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": \`Bearer ${OPENROUTER_API_KEY}\`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    if (!data.choices) return "Error: no response.";
    return data.choices[0].message.content;
}

room.onPlayerChat = async (player, message) => {
    if (!message.startsWith("!bot ")) return;
    const query = message.substring(5).trim();

    room.sendAnnouncement(
        \`🤖 Processing request from ${player.name}...\`,
        null,
        0xFFD700,
        "bold",
        2
    );

    let aiResponse;
    try {
        aiResponse = await askAI(query, player.name);
    } catch (err) {
        aiResponse = "❌ Error: I couldn't process that request.";
    }

    const styled = \`
━━━━━━━━━━━━━━━━━━━━
🌐 **AI Assistant Response**
**User:** ${player.name}

💬 **Message received:**  
${query}

✨ **Full Reply:**  
${aiResponse}
━━━━━━━━━━━━━━━━━━━━\`;

    room.sendAnnouncement(
        styled,
        null,
        0x00CCFF,
        "bold",
        1
    );

    return false;
};
