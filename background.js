// Copyright (c) 2018  Teddy Wing
//
// This file is part of Legibility.
//
// Legibility is free software: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the
// Free Software Foundation, either version 3 of the License, or (at
// your option) any later version.
//
// Legibility is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
// General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Legibility. If not, see <https://www.gnu.org/licenses/>.

var browser;

if (chrome) {
	browser = chrome;
}

browser.runtime.onMessage.addListener(function(message) {
	browser.webNavigation.onCompleted.addListener(function(details) {
		var url = new URL(details.url);

		if (url.hostname === message.domain) {
			wildcard_domains(message.domain)
				.forEach(function(domain) {
					browser.tabs.insertCSS(
						details.tabId,
						{ file: '/css/' + domain + '.css' }
					);
				});
		}
	});
});


// TODO: Consider choosing a different wildcard character, as '*' is troublesome in a shell (maybe '%')
// Build a list of wildcard domains from the given hostname.
//
// Example:
//
//     wildcard_domains('en.wikipedia.org');
//     => [ '*', '*.org', '*.wikipedia.org', 'en.wikipedia.org' ]
function wildcard_domains (hostname) {
	var domain_parts = hostname.split('.');
	var domains = [];

	for (var i = domain_parts.length - 1; i >= 0; i--) {
		var domain;

		if (domains[domains.length - 1]) {
			var domain = domain_parts[i] + '.' + domains[domains.length - 1];
		}
		else {
			var domain = domain_parts[i];
		}

		domains.push(domain);
	}

	for (var i = 0; i < domains.length - 1; i++) {
		domains[i] = '*.' + domains[i];
	}

	domains.unshift('*');

	return domains;
}
