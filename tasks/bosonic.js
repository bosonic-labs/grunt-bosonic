/*
 * grunt-bosonic
 * https://github.com/bosonic/grunt-bosonic
 *
 * Copyright (c) 2013 Raphaël Rougeron
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
    transpiler = require('bosonic-transpiler');

module.exports = function(grunt) {

    grunt.registerMultiTask('bosonic', 'A Grunt task that transpiles to-the-spec Web Components into polyfilled JavaScript', function() {
        var css = [], js = [];
        
        this.filesSrc.forEach(function(filepath) {
            var fileDir = path.dirname(filepath),
                transpiled = transpiler(grunt.file.read(filepath));
            transpiled.stylesheets.forEach(function(href) {
                css.push(grunt.file.read(fileDir + '/' + href));
            });
            css.push(transpiled.css);
            transpiled.scripts.forEach(function(src) {
                js.push(grunt.file.read(fileDir + '/' + src));
            });
            js.push(transpiled.js);
        });

        var jsFile = this.data.js,
            cssFile = this.data.css;

        grunt.file.write(jsFile, js.join("\n"));
        grunt.file.write(cssFile, css.join("\n"));
    });

}

