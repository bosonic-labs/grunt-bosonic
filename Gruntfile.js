/*
 * grunt-bosonic
 * https://github.com/bosonic/grunt-bosonic
 *
 * Copyright (c) 2013 Raphaël Rougeron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    
    clean: {
      tests: ['tmp'],
    },

    bosonic: {
      sample: {
        src: ['samples/spec_sample.html'],
        css: 'tmp/spec_sample.css',
        js:  'tmp/spec_sample.js'
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'bosonic']);

  grunt.registerTask('default', ['test']);

};