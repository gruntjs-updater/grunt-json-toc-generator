# grunt-json-toc-generator

> A Grunt plugin to generate a json table of contents file from a file structure.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-toc-generator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-toc-generator');
```

## The "json_toc_generator" task

### Overview
In your project's Gruntfile, add a section named `json-toc-generator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json-toc-generator: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
      json-toc-generator: {
          your_target: {
              src: ['docs/*.md', 'docs/*.html'],
              dest: 'dist/toc.json'
          }
      },
});
```

### Options

#### src
The source location(s) of the files.

#### dest
The destination to write the json toc.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.3 Initial Release
* 0.1.4 Version Bumping in docs