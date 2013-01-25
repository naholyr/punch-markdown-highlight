var highlighter = require('highlight.js');

module.exports = function _highlight (code, lang) {
  if (!lang) {
    return code;
  }

  if (!highlighter.LANGUAGES[lang]) {
    console.warn('Markdown Highlighter: unknown language "' + lang + '"');
    return code;
  }

  try {
    code = highlighter.highlight(lang, code).value;
  } catch (e) {
    console.error('Markdown Highlight Error', e);
  }

  return code;
};
