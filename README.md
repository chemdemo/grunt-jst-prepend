# grunt-jst-prepend v0.0.1 [![Build Status: Linux](https://travis-ci.org/chemdemo/grunt-jst-prepend.png?branch=master)](https://travis-ci.org/chemdemo/grunt-jst-prepend)

> Prepend some variables to the generated template files by grunt-contrib-jst module.

## Getting Started
This plugin requires Grunt `~0.4.0`

```shell
npm install grunt-jst-prepend --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jst-prepend');
```

### Options

#### prepend
Type: `function` or `string`

The variables declared before compiling templates, which will be prepend to the generated template files. It is usefull when one just need the _.template() method but don't want to use the whole underscore or lodash lib. If the option prettify is true then all whitespaces in the prepend string will be removed.

``` js
prepend: function() {
  var vars = function() {
    var _ = {};

    _.escape = function(string) {
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

Please go to [grunt-contrib-jst](https://github.com/gruntjs/grunt-contrib-jst) to read more.
