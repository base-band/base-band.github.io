'use strict';

module.exports = cfg => {

  cfg.addPassthroughCopy('./src/css');
  cfg.addPassthroughCopy('./src/img');

  return {
    dir: {
      input: './src',
      output: './build',
      layouts: './includes',
    },
    templateFormats: [
      'md'
    ]
  };
};
