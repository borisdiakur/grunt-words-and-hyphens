# grunt-words-and-hyphens

> Extracts unique words and hyphens from a text file stripping punctuation on the way and writes results into a json file (e.g. src_file.txt.words_and_hyphens.json)

[![Build Status](https://travis-ci.org/borisdiakur/grunt-words-and-hyphens.svg?branch=master)](https://travis-ci.org/borisdiakur/grunt-words-and-hyphens)
[![Coverage Status](https://coveralls.io/repos/borisdiakur/grunt-words-and-hyphens/badge.svg?branch=master)](https://coveralls.io/r/borisdiakur/grunt-words-and-hyphens?branch=master)
[![Dependency Status](https://gemnasium.com/borisdiakur/grunt-words-and-hyphens.svg)](https://gemnasium.com/borisdiakur/grunt-words-and-hyphens)

[![NPM](https://nodei.co/npm/grunt-words-and-hyphens.png?downloads=true)](https://nodei.co/npm/grunt-words-and-hyphens/)

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-words-and-hyphens --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-words-and-hyphens');
```

## The "words_and_hyphens" task

### Overview
In your project's Gruntfile, add a section named `words_and_hyphens` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'words_and_hyphens': {
    options: {
      // Task-specific options go here.
    },
    files: [/* glob patterns */]
  }
});
```

### Options

#### options.pattern
Type: `String`

The node module [`words-and-hyphens`](https://github.com/borisdiakur/words-and-hyphens) uses [`hypher`](https://github.com/bramstein/hypher) for hyphenation. In order for it to work, you must install a [hyphanation pattern module](https://github.com/bramstein/hyphenation-patterns) and pass its name in the `pattern` option to `grunt-words-and-hyphens`.

### Usage Example

```js
grunt.initConfig({
  'words_and_hyphens': {
    options: {
      pattern: 'hyphenation.de'
    },
    files: ['some/folder/**/*.txt']
  }
});
```

## Contributing

Issues and Pull-requests are absolutely welcome. If you want to submit a patch, please make sure that you follow this simple rule:

> All code in any code-base should look like a single person typed it, no matter how
many people contributed. — [idiomatic.js](https://github.com/rwldrn/idiomatic.js/)

Lint with:
```shell
npm run jshint
```

Test with:
```shell
npm run mocha
```

Check code coverage with:

```shell
npm run istanbul
```

Then please commit with a __detailed__ commit message.
