# Options

## separator
Type: `String`
Default: linefeed + linefeed

Concatenated files will be joined on this string.

## namespace
Type: `String`
Default: 'JST'

The namespace in which the precompiled templates will be assigned. Use dot notation (e.g. App.Templates) for nested namespaces or false for no namespace wrapping. When false with amd option set true, templates will be returned directly from the AMD wrapper.

## processName
Type: `function`
Default: null

This option accepts a function which takes one argument (the template filepath) and returns a string which will be used as the key for the precompiled template object.  The example below stores all templates on the default JST namespace in capital letters.

```js
options: {
  processName: function(filepath) {
    return filepath.toUpperCase();
  }
}
```

## templateSettings
Type: `Object`
Default: null

The settings passed to underscore when compiling templates.

```js
jst: {
  compile: {
    options: {
      templateSettings: {
        interpolate : /\{\{(.+?)\}\}/g
      }
    },
    files: {
      "path/to/compiled/templates.js": ["path/to/source/**/*.html"]
    }
  }
}
```

## prettify
Type: `boolean`
Default: false

When doing a quick once-over of your compiled template file, it's nice to see
an easy-to-read format that has one line per template. This will accomplish
that.

```js
options: {
  prettify: true
}
```

## amd
Type: `boolean`
Default: false

Wraps the output file with an AMD define function and returns the compiled template namespace unless namespace has been explicitly set to false in which case the template function will be returned directly.

```js
define(function() {
    //...//
    return this['[template namespace]'];
});
```

Example:
```js
options: {
  amd: true
}
```

## processContent
Type: `function`

This option accepts a function which takes one argument (the file content) and
returns a string which will be used as template string.
The example below strips whitespace characters from the beginning and the end of
each line.

```js
options: {
  processContent: function(src) {
    return src.replace(/(^\s+|\s+$)/gm, '');
  }
}
```

## prepend
Type: `function` or `string`

The variables declared before compiling templates, which will be prepend to the generated template files. It is usefull when one just need the _.template() method but don't want to use the whole underscore or lodash lib. If the option prettify is true then all whitespaces in the prepend string will be removed.

``` js
prepend: function() {
  var vars = function() {
    var _ = {};

    _.escape = function() {
      var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;'
      };
      var escapeRegexe = new RegExp('[' + Object.keys(escapeMap).join('') + ']', 'g');

      if (string == null) return '';
      return ('' + string).replace(escapeRegexe, function(match) {
        return escapeMap[match];
      });
    };
  };

  var entire = vars.toString();

  return entire.slice(entire.indexOf('{') + 1, entire.lastIndexOf('}'));
}
```
