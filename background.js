var browser;

if (chrome) {
	browser = chrome;
}

browser.runtime.onMessage.addListener(function() {
	browser.tabs.insertCSS({ file: '/css/example.com.css' });
});
