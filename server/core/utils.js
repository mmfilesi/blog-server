const path = require('path');

const utils = (function() {
  let module  = {};

  module.getBasePath = (resource)=> {
    return path.join(__dirname, `../${resource}`);
  };

  return {
    getBasePath: module.getBasePath
  };

})();

module.exports = utils;
