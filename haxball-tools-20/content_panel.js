(function(){
    if (window.__hax_panel_injected) return;
    window.__hax_panel_injected = true;


    chrome.runtime.sendMessage({ action: 'injectInFrames' }, (resp) => {
      if (!resp || !resp.ok) console.warn('[Haxball Macro] injectInFrames failed', resp && resp.error);
      else console.log('[Haxball Macro]injected script requested');
    });

    const panel = document.createElement('div');
    Object.assign(panel.style, {
      position: 'fixed',
      right: '12px',
      bottom: '12px',
      width: '220px',
      padding: '12px',
      background: 'rgba(0,0,0,0.75)',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      fontSize: '13px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      zIndex: 2147483647,
      pointerEvents: 'auto',
      userSelect: 'none'
    });

    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <strong style="font-size:14px">Macro</strong>
        <span id="hax-status">🔴</span>
        <button id="hax-hide" style="background:none;border:none;color:#fff;cursor:pointer;font-size:14px">✕</button>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:6px">
        <button id="hax-toggle" style="flex:1">Start</button>
      </div>
      <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px">
        <label style="white-space:nowrap">Key</label>
        <input id="hax-key" maxlength="1" value="x" style="width:36px;text-align:center"/>
        <label style="white-space:nowrap">Mode</label>
        <select id="hax-mode">
          <option value="press">press</option>
          <option value="hold">hold</option>
        </select>
      </div>
      <div style="display:flex;gap:6px;align-items:center">
        <label>Interval</label>
        <input id="hax-interval" type="number" value="200" style="width:64px"/>
        <span>ms</span>
      </div>
    `;

    document.documentElement.appendChild(panel);

    const btnToggle = panel.querySelector('#hax-toggle');
    const btnHide = panel.querySelector('#hax-hide');
    const keyInput = panel.querySelector('#hax-key');
    const modeSel = panel.querySelector('#hax-mode');
    const intervalInput = panel.querySelector('#hax-interval');
    const statusSpan = panel.querySelector('#hax-status');

    function postToFrames(obj) {
      const frames = document.querySelectorAll('iframe');
      frames.forEach(f => {
        try { f.contentWindow && f.contentWindow.postMessage(obj, '*'); } catch(e){}
      });
      window.postMessage(obj, '*');
    }

    function returnFocus() {
      try {
        if (document.activeElement) document.activeElement.blur();
        window.focus && window.focus();
        const gf = document.querySelector('.gameframe') || document.querySelector('iframe');
        if (gf && gf.contentWindow) gf.contentWindow.focus();
      } catch(e){}
    }

    let running = false;

    function updateStatus(){
      if(!running) statusSpan.textContent = '🔴';
      else if(modeSel.value==='hold') statusSpan.textContent = '🟡';
      else statusSpan.textContent = '🟢';
      btnToggle.textContent = running ? 'Stop' : 'Start';
    }

    function toggleMacro(){
      if(running){
        postToFrames({cmd:'stop'});
        running=false;
      } else {
        postToFrames({
          cmd:'start',
          key:(keyInput.value||'x').slice(-1),
          mode:modeSel.value,
          interval:Number(intervalInput.value)||200
        });
        running=true;
      }
      updateStatus();
      setTimeout(returnFocus,10);
    }

    btnToggle.addEventListener('click',toggleMacro);
    btnHide.addEventListener('click',()=>panel.style.display='none');

    keyInput.addEventListener('input', ()=>postToFrames({cmd:'set', key:keyInput.value.slice(-1)}));
    modeSel.addEventListener('change', ()=>postToFrames({cmd:'set', mode:modeSel.value}));
    intervalInput.addEventListener('input', ()=>postToFrames({cmd:'set', interval:Number(intervalInput.value)}));

    panel.addEventListener('mousedown',(e)=>{
      const tag = e.target.tagName.toLowerCase();
      if(tag==='input'||tag==='select'||tag==='button') return;
      e.preventDefault();
      setTimeout(returnFocus,8);
    });

    updateStatus();
})();
