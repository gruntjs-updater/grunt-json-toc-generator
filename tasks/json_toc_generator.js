/*
 * grunt-json-toc-generator
 * https://github.com/jediq/grunt-json-toc-generator
 *
 * Copyright (c) 2015 Ricky Walker
 * Licensed under the MIT license.
 */

'use strict';

var cheerio = require('cheerio');

module.exports = function(grunt) {

  function getMethods(obj) {
    var result = [];
    for (var id in obj) {
      try {
        if (typeof(obj[id]) === "function") {
          result.push(id + ": " + obj[id].toString());
        }
      } catch (err) {
        result.push(id + ": inaccessible");
      }
    }
    return result;
  }

  function getMarkdownTitle(body) {
    body.split('\n').forEach(function (line) {
      if (line.lastIndexOf('#', 0) === 0) {
        return line.substring(1).trim();
      }
    });
  }

  function getHtmlTitle(body) {
    var $ = cheerio.load(body);
    return $('title').text().trim();
  }

  grunt.registerMultiTask('json_toc_generator',
      'A Grunt plugin to generate a json table of contents file from a file structure.',
      function() {

    var docs = [];

    this.files.forEach(function (fileGroup) {

      fileGroup.src.forEach(function(file) {

        var doc = {};
        var body = grunt.file.read(file);


        doc.extension = file.split('.').pop();
        doc.name = file.split('/').pop();

        if (doc.extension === 'md' || doc.extension === 'markdown') {
          doc.title = getMarkdownTitle(body);
        }

        if (doc.extension === 'html') {
          doc.title = getHtmlTitle(body);
        }

        docs.push(doc);

      });

      var asJson = JSON.stringify(docs);
      grunt.file.write(fileGroup.dest, asJson);
    });
  });
};
