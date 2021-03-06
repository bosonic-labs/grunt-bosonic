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
        dest: 'tmp/'
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'bosonic']);

  grunt.registerTask('default', ['test']);

};