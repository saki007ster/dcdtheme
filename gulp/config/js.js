'use strict';

/*************************************************************
 * Variables
 ************************************************************/
// Globals
var paths = global.paths;
global.config.js = {
  src: paths.js,
  dest: paths.dist_folder + '/js/',
  sourceMapEmbed: true,
  babel: {
    presets: ['es2015'],
  },
  hint: {
    enabled: false,
    src: paths.js,
  },
  lint: {
    enabled: false,
    src: paths.js,
    options: {
      path: paths.themeDir + '.eslint.js'
    }
  },
  sizeReport: {
    enabled: false,
    options: {
      '*': {
        'maxSize': 200000 // Alert if > Max Size in Bytes after gzip
      }
    }
  }
};
