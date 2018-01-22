'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: 'public/index.html',
        dest: 'dist/index.html'
      }
    },
    uglify: {
      'dist/bundle.js': 'public/bundle.js'
    },
    cssmin: {
      'dist/layout.css': 'public/layout.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadTasks('./grunt-task');

  grunt.registerTask('default', ['build', 'cssmin', 'htmlmin', 'uglify']);
};
