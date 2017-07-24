'use strict';

/*************************************************************
 * Variables
 ************************************************************/
// Local
var localUrl = ''; // EG 'localhost', 'mysite.dev', leave blank for
// Globals
var paths = global.paths;


global.config.browserSync = {
  ui: true,
  enabled: true,
  baseDir: './',
  domain: localUrl,
  defaults: {
    startPath: 'pattern-lab/public/',
    open: true,
    browser: "google chrome canary",
    reloadDelay: 50,
    reloadDebounce: 750,
  },
};


global.config.wpt = {
  // WebPageTest API key https://www.webpagetest.org/getkey.php
  // key:
};
