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
        
        this.files.forEach(function(f) {
            f.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                if (grunt.file.isDir(filepath)) {
                    return;
                }
                var basename = path.basename(filepath, '.html'),
                    src = grunt.file.read(filepath),
                    dest = {
                        html: f.dest + basename + '.html',
                        jsx: f.dest + basename + '.jsx',
                        css: f.dest + basename + '.css'
                    },
                    transpiled = {
                        html: transpiler.transpile(src, { automaticTemplating: true, wrap: true }),
                        react: transpiler.transpileToReact(src)
                    };

                grunt.file.write(dest.html, transpiled.html);
                grunt.log.writeln('File ' + dest.html + ' created.');

                grunt.file.write(dest.jsx, transpiled.react.jsx);
                grunt.log.writeln('File ' + dest.jsx + ' created.');

                grunt.file.write(dest.css, transpiled.react.css);
                grunt.log.writeln('File ' + dest.css + ' created.');
            });
        });
    });

}

