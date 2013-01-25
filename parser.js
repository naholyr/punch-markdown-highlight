var marked = require('marked');
var highlight = require('./highlight');
var _ = require('lodash');

var options;

module.exports = {

  supportedExtensions: [".markdown", ".md"],

  parse: function (input, cb){
    var output, err;

    try {
      marked.setOptions(options);
      output = marked.parse(String(input));
    } catch(error){
      err = error;
    }

    return cb(err, output);
  },

  setup: function (config) {
    options = {
      gfm: true,
      pedantic: false,
      sanitize: false,
      highlight: highlight
    };

    if (config.parser) {
      options = _.extend(options, config.parser.markdown || {});
    }
  }

};
