var browser;

if (chrome) {
	browser = chrome;
}

browser.runtime.onMessage.addListener(function(message) {
	browser.tabs.insertCSS({ file: '/css/' + message.domain + '.css' });
});
