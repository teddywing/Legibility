var browser;

if (chrome) {
	browser = chrome;
}

var domain = location.hostname
	.split('.')
	.slice(-2)
	.join('.');

browser.runtime.sendMessage({ domain: domain });
