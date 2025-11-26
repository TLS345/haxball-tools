(function() {
  'use strict';

  var urlRedirect = ["http://haxball.com", "http://www.haxball.com", "http://haxball.com/", "http://www.haxball.com/", "https://haxball.com", "https://www.haxball.com", "https://haxball.com/", "https://www.haxball.com/", "http://html5.haxball.com", "http://www.html5.haxball.com", "http://html5.haxball.com/", "http://www.html5.haxball.com/", "https://html5.haxball.com", "https://www.html5.haxball.com", "https://html5.haxball.com/", "https://www.html5.haxball.com/"];

  if(urlRedirect.includes(window.location.href)) {
    try {
      window.location.href = "https://www.haxball.com/play";
    } catch (error) {
      console.error('Error al redirigir:', error);
    }
  }

  let notificationContainer = null;
  let notificationMessage = null;

  function initializeNotifications() {
    try {
      if (notificationContainer) return; 

      notificationContainer = document.createElement('div');
      notificationContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        max-width: 300px;
        word-wrap: break-word;
      `;

      notificationMessage = document.createElement('span');
      notificationContainer.appendChild(notificationMessage);

      if (document.body) {
        document.body.appendChild(notificationContainer);
      } else {
        document.addEventListener('DOMContentLoaded', function() {
          if (document.body) {
            document.body.appendChild(notificationContainer);
          }
        });
      }
    } catch (error) {
      console.error('Error al inicializar notificaciones:', error);
    }
  }

  function showNotification(message) {
    try {
      if (!notificationContainer || !notificationMessage) {
        initializeNotifications();
        setTimeout(() => showNotification(message), 100);
        return;
      }

      if (!message || typeof message !== 'string') {
        console.warn('Mensaje inválido para notificación:', message);
        return;
      }

      notificationMessage.textContent = message;
      notificationContainer.style.display = 'block';
      notificationContainer.style.opacity = '0';
      
      setTimeout(function() {
        notificationContainer.style.transition = 'opacity 0.5s ease-in-out';
        notificationContainer.style.opacity = '1';
      }, 10);

      setTimeout(function() {
        if (notificationContainer) {
          notificationContainer.style.opacity = '0';
          setTimeout(function() {
            if (notificationContainer) {
              notificationContainer.style.display = 'none';
            }
          }, 500);
        }
      }, 3000);
    } catch (error) {
      console.error('Error al mostrar notificación:', error);
    }
  }

  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      try {
        if (!request || typeof request !== 'object') {
          console.warn('Solicitud inválida recibida:', request);
          sendResponse({ error: 'Formato de solicitud inválido' });
          return true;
        }

        if (request.action === 'showNotification') {
          if (request.message) {
            showNotification(request.message);
            sendResponse({ success: true });
          } else {
            console.warn('No se proporcionó mensaje para la notificación:', request);
            sendResponse({ error: 'No se proporcionó mensaje para la notificación' });
          }
        } else {
          console.log('Acción desconocida recibida:', request.action);
          sendResponse({ error: 'Acción desconocida' });
        }
      } catch (error) {
        console.error('Error en el listener de mensajes:', error);
        sendResponse({ error: error.message });
      }
      
      return true; 
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNotifications);
  } else {
    initializeNotifications();
  }

  console.log('Haxball X Vortex script cargado exitosamente');
})();