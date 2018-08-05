Legibility
==========

A WebExtension that enables you to add custom CSS styles to websites. Unlike a
global user stylesheet, this extension loads a separate stylesheet for each
site, giving you control over the appearance of any site. For example, sites
with poorly legible typography can be easily corrected for better a reading
experience.


## Usage
Let's say we want to modify the font of an article on `www.example.com`. Add an
`www.example.com.css` file in the extension's `css/` directory:

``` css
/* legibility/css/www.example.com.css */
article {
	font: 18px/1.7em Georgia !important;
}
```

Upon reloading the page, the custom stylesheet should now be applied.

Stylesheets must use a filename matching the website's domain (including
subdomains), and terminated by a `.css` extension.


## Install
This extension _must_ be installed as an unpacked extension.


## License
Copyright © 2018 Teddy Wing. Licensed under the GNU GPLv3+ (see the included
COPYING file).
