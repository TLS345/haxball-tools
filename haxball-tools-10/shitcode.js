// Day 10/365 -Avatar Animated Extension :)
// By TLS / Teleese

(function(){
    'use strict';

    function waitForIframe(callback){
        const interval = setInterval(()=>{
            const iframe = document.querySelector("iframe.gameframe");
            if(iframe && iframe.contentDocument && iframe.contentDocument.body){
                clearInterval(interval);
                callback(iframe.contentDocument);
            }
        }, 500);
    }

    waitForIframe((iframeDoc)=>{
        const iframeBody = iframeDoc.body;

        let sequences = JSON.parse(localStorage.getItem('haxSequences')) || [
            {icon:'🌑', emojis:['🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'], speed:300},
            {icon:'🕰️', emojis:['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'], speed:350},
            {icon:'🐵', emojis:['🐵','🙈','🙉','🙊'], speed:300},
            {icon:'🔊', emojis:['🔈','🔉','🔊'], speed:400},
            {icon:'😡', emojis:['😠','😡','👿'], speed:300},
            {icon:'❤️', emojis:['❤️','🧡','💛','💚','💙','💜','🖤','🤍'], speed:300},
            {icon:'🔵', emojis:['🔴','🟠','🟡','🟢','🔵','🟣'], speed:300},
            {icon:'💀', emojis:['💀','☠️'], speed:300},
            {icon:'🌍', emojis:['🌎','🌏','🌍'], speed:300},
            {icon:'⭐', emojis:['⭐','🌟','✨'], speed:300},
            {icon:'🐱', emojis:['🐱','😺','😸','😹'], speed:300},
            {icon:'⚽', emojis:['⚽','🏀','🏈','🏐'], speed:300},
            {icon:'🐐', emojis:['🐏','🐑','🐐'], speed:300},
            {icon:'💿', emojis:['💿','📀'], speed:300},
            {icon:'🍎', emojis:['🍎','🍏'], speed:300},
            {icon:'😛', emojis:['😛','😜','😝'], speed:300},
            {icon:'🙏', emojis:['🙏','🙇'], speed:300},
            {icon:'💧', emojis:['💧','💦'], speed:300},
            {icon:'😌', emojis:['😌','☺️'], speed:300},
            {icon:'🏅', emojis:['🏅','🥇','🥈','🥉'], speed:300},
            {icon:'🟩', emojis:['🟥','🟧','🟨','🟩','🟦','🟪'], speed:300},
            {icon:'👍', emojis:['👍','👌','✌️'], speed:300}
        ];

        let currentInterval = null;
        let preview = null;
        let activeButton = null;

        function saveSequences(){ localStorage.setItem('haxSequences', JSON.stringify(sequences)); }

        function setAvatar(emoji){
            const input = iframeDoc.querySelector("[data-hook='input']");
            if(!input) return;
            input.value = "/avatar " + emoji;
            input.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",code:"Enter",keyCode:13,which:13,bubbles:true}));
            if(preview){
                preview.textContent = emoji;
                preview.style.transform='scale(2) rotate(0deg)';
                preview.style.opacity='0.7';
                preview.style.textShadow='0 0 12px white, 0 0 16px white';
                preview.animate([
                    {transform: 'scale(1.8) rotate(-10deg)'},
                    {transform: 'scale(2) rotate(10deg)'},
                    {transform: 'scale(1.8) rotate(-10deg)'},
                    {transform: 'scale(2) rotate(0deg)'}
                ],{duration:500, iterations:1});
                setTimeout(()=>{
                    preview.style.transform='scale(1)';
                    preview.style.opacity='1';
                    preview.style.textShadow='0 0 2px white';
                },500);
            }
        }

        new MutationObserver(()=>{
            iframeDoc.querySelectorAll('.notice').forEach(n=>{
                if(n.textContent.includes('Avatar set')) n.remove();
            });
        }).observe(iframeBody,{childList:true,subtree:true});

        const panelContainer = iframeDoc.createElement('div');
        panelContainer.style.cssText = `
            position: fixed; bottom: 10px; right: 10px;
            z-index: 99999; font-family: Arial, sans-serif; display: flex; flex-direction: column;
            align-items: flex-end; pointer-events:none;
        `;
        iframeBody.appendChild(panelContainer);

        const addonsBtn = iframeDoc.createElement('button');
        addonsBtn.textContent='Addons';
        addonsBtn.style.cssText=`
            padding:6px 14px; background:black; color:white; border:none; border-radius:12px;
            cursor:pointer; font-weight:bold; box-shadow:0 4px 14px rgba(0,0,0,0.3);
            transition:all 0.3s; font-size:14px; pointer-events:auto;
        `;
        addonsBtn.onmouseover=()=>{ addonsBtn.style.background='white'; addonsBtn.style.color='black'; addonsBtn.style.boxShadow='0 0 12px white'; addonsBtn.style.transform='scale(1.1)'; };
        addonsBtn.onmouseout=()=>{ addonsBtn.style.background='black'; addonsBtn.style.color='white'; addonsBtn.style.boxShadow='0 4px 14px rgba(0,0,0,0.3)'; addonsBtn.style.transform='scale(1)'; };
        panelContainer.appendChild(addonsBtn);

        const panel = iframeDoc.createElement('div');
        panel.style.cssText=`
            display:none; flex-direction:column; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
            border-radius:12px; padding:8px; margin-top:4px; max-width:350px; max-height:300px; overflow:hidden; color:white; pointer-events:auto;
            opacity:0; transform: translateY(20px); transition: all 0.5s ease;
        `;
        panelContainer.appendChild(panel);

        preview = iframeDoc.createElement('div');
        preview.style.cssText='font-size:32px; text-align:center; margin-bottom:6px; transition: transform 0.3s ease, opacity 0.3s ease, text-shadow 0.3s ease; color:white;';
        panel.appendChild(preview);

        const scrollContainer = iframeDoc.createElement('div');
        scrollContainer.style.cssText = `display:flex; overflow-x:auto; max-width:100%; padding-bottom:4px;`;
        panel.appendChild(scrollContainer);

        function createSequenceButton(seq){
            const btn = iframeDoc.createElement('button');
            btn.textContent=seq.icon;
            btn.style.cssText=`
                margin:2px; font-size:20px; cursor:pointer; border:none; border-radius:8px;
                padding:6px 8px; background:black; color:white; transition:all 0.3s;
                flex: 0 0 auto; box-shadow:0 4px 8px rgba(255,255,255,0.3);
            `;
            btn.onmouseover=()=>{ btn.style.background='white'; btn.style.color='black'; btn.style.boxShadow='0 0 15px white'; btn.style.transform='scale(1.2)'; };
            btn.onmouseout=()=>{ if(btn !== activeButton){ btn.style.background='black'; btn.style.color='white'; btn.style.boxShadow='0 4px 8px rgba(255,255,255,0.3)'; btn.style.transform='scale(1)'; } };
            btn.onclick=()=> {
                if(currentInterval) clearInterval(currentInterval);
                if(activeButton) activeButton.style.animation='';
                activeButton = btn;
                btn.style.animation='pulse 1s infinite';
                let i=0;
                currentInterval = setInterval(()=>{
                    setAvatar(seq.emojis[i]);
                    const emojiBtn = btn;
                    emojiBtn.style.transform = `rotate(${(Math.random()-0.5)*20}deg) scale(1.2)`;
                    setTimeout(()=>emojiBtn.style.transform='scale(1)', seq.speed/2);
                    i=(i+1)%seq.emojis.length;
                }, seq.speed || 300);
            };
            scrollContainer.appendChild(btn);
        }

        sequences.forEach(createSequenceButton);

        const controlContainer = iframeDoc.createElement('div');
        controlContainer.style.cssText = 'display:flex; margin-top:6px;';
        panel.appendChild(controlContainer);

        const stopBtn = iframeDoc.createElement('button');
        stopBtn.textContent='Stop';
        stopBtn.style.cssText=`
            font-size:14px; cursor:pointer; border:none; border-radius:8px;
            padding:4px 8px; background:black; color:white; transition:all 0.3s; margin-right:4px; box-shadow:0 2px 6px rgba(255,255,255,0.3);
        `;
        stopBtn.onmouseover=()=>{ stopBtn.style.background='white'; stopBtn.style.color='black'; stopBtn.style.boxShadow='0 0 12px white'; stopBtn.style.transform='scale(1.1)'; };
        stopBtn.onmouseout=()=>{ stopBtn.style.background='black'; stopBtn.style.color='white'; stopBtn.style.boxShadow='0 2px 6px rgba(255,255,255,0.3)'; stopBtn.style.transform='scale(1)'; };
        stopBtn.onclick=()=>{ if(currentInterval) clearInterval(currentInterval); currentInterval=null; preview.textContent=''; if(activeButton) activeButton.style.animation=''; activeButton=null; };
        controlContainer.appendChild(stopBtn);

        const addBtn = iframeDoc.createElement('button');
        addBtn.textContent='+';
        addBtn.style.cssText=`
            font-size:16px; cursor:pointer; border:none; border-radius:8px;
            padding:4px 8px; background:black; color:white; transition:all 0.3s; margin-right:4px; box-shadow:0 2px 6px rgba(255,255,255,0.3);
        `;
        addBtn.onmouseover=()=>{ addBtn.style.background='white'; addBtn.style.color='black'; addBtn.style.boxShadow='0 0 12px white'; addBtn.style.transform='scale(1.1)'; };
        addBtn.onmouseout=()=>{ addBtn.style.background='black'; addBtn.style.color='white'; addBtn.style.boxShadow='0 2px 6px rgba(255,255,255,0.3)'; addBtn.style.transform='scale(1)'; };
        addBtn.onclick=()=>{
            const emojiInput = prompt("Ingrese emojis separados por coma:");
            if(!emojiInput) return;
            const newSeq={icon:emojiInput.split(',')[0],emojis:emojiInput.split(','), speed:300};
            sequences.push(newSeq);
            saveSequences();
            createSequenceButton(newSeq);
        };
        controlContainer.appendChild(addBtn);

        const byBtn = iframeDoc.createElement('button');
        byBtn.textContent='By Teleese';
        byBtn.style.cssText=`
            font-size:12px; cursor:pointer; border:none; border-radius:8px;
            padding:2px 6px; background:black; color:white; transition:all 0.3s; box-shadow:0 2px 6px rgba(255,255,255,0.3);
        `;
        byBtn.onmouseover=()=>{ byBtn.style.background='white'; byBtn.style.color='black'; byBtn.style.boxShadow='0 0 12px white'; byBtn.style.transform='scale(1.1)'; };
        byBtn.onmouseout=()=>{ byBtn.style.background='black'; byBtn.style.color='white'; byBtn.style.boxShadow='0 2px 6px rgba(255,255,255,0.3)'; byBtn.style.transform='scale(1)'; };
        byBtn.onclick=()=>{ window.open('https://teleese.netlify.app/', '_blank'); };
        controlContainer.appendChild(byBtn);

        const style = iframeDoc.createElement('style');
        style.textContent = `
            @keyframes pulse{
                0%{transform: scale(1);}
                50%{transform: scale(1.3); box-shadow: 0 0 20px white;}
                100%{transform: scale(1);}
            }
            .panel-show{
                opacity:1 !important;
                transform: translateY(0) !important;
            }
        `;
        iframeDoc.head.appendChild(style);

        addonsBtn.onclick=()=>{
            if(panel.style.display==='none'){
                panel.style.display='flex';
                requestAnimationFrame(()=>{ panel.classList.add('panel-show'); });
            }else{
                panel.classList.remove('panel-show');
                setTimeout(()=>{ panel.style.display='none'; },500);
            }
        };
    });
})();

