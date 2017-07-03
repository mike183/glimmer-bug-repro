/* eslint-env node */
'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'test-standalone-engine',
    environment
  };

  return ENV;
};
