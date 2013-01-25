# Punch Markdown + Highlight

This is a plugin for [Punch](https://github.com/laktek/punch), bringing syntax highlighting along Markdown parser.

## Installation

```
npm install punch-markdown-highlight
```

## Usage

### Parser

In your `config.json`:

```json
{
	"plugins": {
		"parsers": {
			".md": "punch-markdown-highlight/parser",
			".markdown": "punch-markdown-highlight/parser"
		}
	}
}
```

You can then use the three-backticks syntax (GitHub-like), and enjoy syntax highlighting, in all your Markdown contents.

### Helper

Whenever you would need to use the same feature in your templates, there is a bundler helper. Add this in your `config.json`:

```json
{
  "plugins": {
    "helpers": {
      "markdown_highlight": "punch-markdown-highlight/helpers"
    }
  }
}
```

You'll then be able to use the helper "`highlight`", this way:

```mustache
<pre>
{{#highlight}}javascript
alert('hello');
{{/highlight}}
</pre>
```

As you can't pass arguments to helpers, you'll have to provide the language as first part of the text, followed by a newline.

## CSS

Highlighter will only wrap tokens in specific classes, you have to add some CSS to your bundles.

```less
pre {
  border: 1px solid #e0ded3;
  border-radius: 4px;
  margin: 10px 10px 40px 10px;
  padding: 10px;
  background-color: #f0efe8;
  overflow: auto;
  font-size: 14px;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
}

code {
  white-space: pre;
  color: rgba(0,0,0, 1);
  .keyword         { font-weight: bold; color: #6089d4; }
  .string, .regexp { color: green }
  .class, .special { color: #6089d4 }
  .number          { color: red }
  .comment         { color: grey }
}
```
