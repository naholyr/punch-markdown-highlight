var highlight = require('./highlight');

var tag_helpers = {};

var block_helpers = {

    highlight: function (text) {
      var m = String(text).match(/^[a-z0-9_\-]+/);
      if (m) {
        var lang = m[0];
        text = text.substring(lang.length).replace(/^[\r\n]*/g, '');
        text = '<code class="lang-' + lang + '">' + highlight(text, lang) + '</code>';
      }
      return text;
    }

};

module.exports = {
  directAccess: function(){
    return { "tag_helpers": tag_helpers, "block_helpers": block_helpers, "options": {} };
  },
  get: function(basepath, file_extension, options, callback){
    var self = this;
    return callback(null, { "tag": tag_helpers, "block": block_helpers }, {});
  }
};
