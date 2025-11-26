(function() {
  if (window.__hax_injected_script) return;
  window.__hax_injected_script = true;

  let running = false;
  let key = 'x';
  let mode = 'press';
  let interval = 200;
  let doubleTap = false;
  let timerId = null;
  let keyPressed = false;

  function normKey(k){
    if(!k) return 'x';
    return k === 'Space' ? 'Space' : String(k).slice(-1).toLowerCase();
  }

  function sendKey(type){
    try {
      let evKey = key === 'Space' ? ' ' : key;
      let code = key === 'Space' ? 'Space' : 'Key'+key.toUpperCase();
      let keyCode = key === 'Space' ? 32 : key.toUpperCase().charCodeAt(0);

      const ev = new KeyboardEvent(type,{
        key: evKey,
        code: code,
        keyCode: keyCode,
        which: keyCode,
        bubbles:true,
        cancelable:true
      });

      window.dispatchEvent(ev);
      document.dispatchEvent(ev);
      (document.activeElement||document.body).dispatchEvent(ev);
    } catch(e){ console.warn('[HAX-INJ] sendKey error',e);}
  }

  function startPress(){
    if(timerId) clearInterval(timerId);
    timerId = setInterval(()=>{
      sendKey('keydown');
      setTimeout(()=>sendKey('keyup'), 8);
      if(doubleTap){
        setTimeout(()=>{
          sendKey('keydown');
          setTimeout(()=>sendKey('keyup'),8);
        }, 10);
      }
    }, interval);
  }

  function startMacro(){
    if(running) return;
    running = true;

    if(mode==='press'){
      startPress();
    }
    postStatus();
  }

  function stopMacro(){
    if(!running) return;
    running=false;
    if(timerId){ clearInterval(timerId); timerId=null;}
    keyPressed=false;
    postStatus();
  }

  window.addEventListener('keydown',(e)=>{
    if(!running || mode!=='hold') return;
    if(e.key.toLowerCase()===key.toLowerCase() && !keyPressed){
      keyPressed = true;
      startPress();
      postStatus();
    }
  });

  window.addEventListener('keyup',(e)=>{
    if(!running || mode!=='hold') return;
    if(e.key.toLowerCase()===key.toLowerCase()){
      keyPressed=false;
      if(timerId){ clearInterval(timerId); timerId=null; }
      postStatus();
    }
  });

  function postStatus(){
    try{
      window.postMessage({
        from:'hax-inj',
        type:'status',
        payload:{running, key, mode, interval, doubleTap, keyPressed}
      },'*');
    }catch(e){}
  }

  window.addEventListener('message',(ev)=>{
    const msg = ev.data||{};
    if(!msg || typeof msg!=='object') return;

    if(msg.cmd==='start'){
      key = normKey(msg.key);
      mode = msg.mode==='hold'?'hold':'press';
      interval = Number(msg.interval)||200;
      doubleTap = !!msg.doubleTap;
      startMacro();
    } else if(msg.cmd==='stop'){
      stopMacro();
    } else if(msg.cmd==='set' || msg.cmd==='update'){
      if(msg.key) key = normKey(msg.key);
      if(msg.mode) mode = msg.mode==='hold'?'hold':'press';
      if(msg.interval) interval = Number(msg.interval);
      if('doubleTap' in msg) doubleTap=!!msg.doubleTap;
    } else if(msg.cmd==='status'){
      postStatus();
    }
  });

  window.haxInjected = {
    startMacro,
    stopMacro,
    setKey:(k)=>key=normKey(k),
    setMode:(m)=>mode=m==='hold'?'hold':'presSs',
    setInterval:(i)=>interval=Number(i)||interval,
    setDoubleTap:(b)=>doubleTap=!!b,
    getState:()=>({running,key,mode,interval,doubleTap,keyPressed})
  };

  console.log('HAXBALL MACRO running');
})();
