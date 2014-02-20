/*
 * grunt-bosonic
 * https://github.com/bosonic/grunt-bosonic
 *
 * Copyright (c) 2013 Raphaël Rougeron
 * Licensed under the MIT license.
 */

'use strict';

var transpiler = require('bosonic-transpiler');

module.exports = function(grunt) {

    grunt.registerMultiTask('bosonic', 'A Grunt task that transpiles to-the-spec Web Components into polyfilled JavaScript', function() {
        var css = [], js = [];
        
        this.filesSrc.forEach(function(filepath) {
            var transpiled = transpiler(grunt.file.read(filepath));
            css.push(transpiled.css);
            js.push(transpiled.js);
        });

        var jsFile = this.data.js,
            cssFile = this.data.css;

        grunt.file.write(jsFile, js.join("\n"));
        grunt.file.write(cssFile, css.join("\n"));
    });

}

