import store from './store';
global.browser = require('webextension-polyfill');


chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        color: '#3aa757'
    }, function () {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostEquals: 'developer.chrome.com'
                },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

// chrome.tabs.executeScript(null, {file: 'custom.js'});

/* chrome.runtime.onMessage.addListener(
    function(message, callback) {
        let msg = `ext ${message} ${callback}`
        alert(msg)
        if (message === 'changeColor') {
            chrome.tabs.executeScript({
                code: 'document.body.style.backgroundColor="orange"'
            });
        } 
});
 */

// background.js
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
    if (request.message === "activate_icon") {
        chrome.pageAction.show(sender.tab.id);
    }
});
