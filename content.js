var browser;

if (chrome) {
	browser = chrome;
}

browser.runtime.sendMessage({ url: 'tmp' });
