chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg && msg.action === 'injectInFrames') {
      const tabId = sender.tab.id;
      // inyectamos el archivo 'injected.js' en todos los frames del tab
      chrome.scripting.executeScript({
        target: { tabId: tabId, allFrames: true },
        files: ['injected.js']
      }).then(() => {
        sendResponse({ ok: true });
      }).catch(err => {
        sendResponse({ ok: false, error: String(err) });
      });
      return true; // async response
    }
  });
  