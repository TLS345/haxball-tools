var p=null,a="teleese",r=HBInit({roomName:"Password Control Room",maxPlayers:10,public:true,noPlayer:true,password:null});
r.onPlayerJoin=function(u){r.sendAnnouncement("Welcome "+u.name+"! Use !admin <password> to gain admin rights.");};
r.onPlayerChat=function(u,m){
  if(!m) return false;
  var t=m.trim().split(/\s+/),c=t[0].toLowerCase(),arg=t[1];
  if(c==="!admin"){
    if(arg===a){ r.setPlayerAdmin(u.id,true); r.sendAnnouncement("✅ You are now admin.",u.id); }
    else r.sendAnnouncement("❌ Wrong admin password.",u.id);
    return false;
  }
  if(c==="!pass"||c==="!newpass"||c==="!setpass"){
    if(!arg){
      if(u.admin) r.sendAnnouncement(p?("🔒 Current password: "+p):"🔓 Room has no password.");
      else r.sendAnnouncement(p?"🔒 The room currently has a password (admins only).":"🔓 Room has no password.");
      return false;
    }
    if(!u.admin){ r.sendAnnouncement("You must be an admin to change the password.",u.id); return false; }
    if(/^(off|remove|clear)$/i.test(arg)){ r.setPassword(null); p=null; r.sendAnnouncement("🔓 Password removed by "+u.name+"."); r.sendAnnouncement("Password removed.",u.id); return false; }
    r.setPassword(arg); p=arg; r.sendAnnnouncement("🔒 Password changed to: "+arg+" (by "+u.name+")."); r.sendAnnouncement("Password updated.",u.id);
    return false;
  }
};
