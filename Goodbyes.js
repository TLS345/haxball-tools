// Day 14 -  Goodbyes
// TLS / Teleese 
// Commands: !bb !nv !mellamamimama !acomer !mequitaronlacompu

const DramaticExit = (() => {
  const lines = {
    normal:[
      "💀 {n} hung up the boots. The neighborhood won’t be the same.",
      "🔥 {n} left wrapped in glory... or maybe in debt.",
      "⚰️ {n} vanished from the server, leaving only lag and echoes.",
      "🎤 {n} left without saying goodbye. He is not a gentleman.",
      "🍂 {n} logged off with questionable dignity."
    ],
    mama:[
      "👩‍👦 {n} heard the sacred call: 'DINNER’S READY!'. There was no escape.",
      "📞 {n} got called by their mom. Priorities, man.",
      "🚪 {n} bailed before the router was unplugged."
    ],
    food:[
      "🍽️ {n} chose steak over glory. Respect.",
      "🥩 {n} left to eat... hungry calls.",
      "🍕 {n} disconnected — the smell of milanesas was too strong."
    ],
    pc:[
      "💻 {n} fell victim to the classic: 'They took my PC away'.",
      "🖐️ {n} couldn’t resist parental authority. Gone too soon.",
      "🔌 {n} was unplugged by higher powers."
    ]
  };
  const pick = arr => arr[~~(Math.random() * arr.length)];
  const announce = (msg,col=0xFFFF00,s="bold",sz=2)=>room.sendAnnouncement(msg,null,col,s,sz);

  return function(player,msg){
    const cmd = msg.trim().toLowerCase();
    const name = player.name;
    let type = null;

    if(["!bb","!nv"].includes(cmd)) type="normal";
    else if(cmd=="!mellamamimama") type="mama";
    else if(cmd=="!acomer") type="food";
    else if(cmd=="!mequitaronlacompu") type="pc";
    if(!type) return;

    const farewell = pick(lines[type]).replace("{n}", name);
    announce("⚠️ " + name + " initiated exit protocol (" + cmd + ")");
    [1,2,3,4].forEach((v,i)=>{
      setTimeout(()=>{
        if(i<2) announce((3-i)+"...", 0xFF0000);
        else if(i==2) announce("💫 Preparing final act...", 0xAAAAAA);
        else {
          announce(farewell, 0xFFFFFF, "bold", 3);
          setTimeout(()=>{ try{ room.kickPlayer(player.id, "exit"); }catch(e){} }, 1000);
        }
      }, i*1000+600);
    });
    return false;
  };
})();


room.onPlayerChat = (p,m) => DramaticExit(p,m) ?? true;
