// Service Worker for Manifest V3
// This script intercepts game-min.js requests and redirects to our custom game.js

// Rules for declarativeNetRequest
const rules = [{
    id: 1,
    priority: 1,
    action: {
        type: "redirect",
        redirect: {
            extensionPath: "/website/game/game.js"
        }
    },
    condition: {
        urlFilter: "*game-min.js*",
        domains: ["haxball.com"]
    }
}];

// Register the rules when the service worker starts
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: rules,
        removeRuleIds: rules.map(rule => rule.id)
    }).catch(error => {
        console.error('Failed to update declarativeNetRequest rules:', error);
    });

    console.log('Haxball-Bape extension installed and rules registered');
});

// Also update rules when service worker starts
chrome.runtime.onStartup.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: rules,
        removeRuleIds: rules.map(rule => rule.id)
    }).catch(error => {
        console.error('Failed to update declarativeNetRequest rules on startup:', error);
    });
});

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getExtensionURL') {
        sendResponse({ url: chrome.runtime.getURL(request.path) });
    }
    return true; // Keep message channel open for async response
});

// Error handling for service worker
self.addEventListener('error', (event) => {
    console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection in service worker:', event.reason);
});