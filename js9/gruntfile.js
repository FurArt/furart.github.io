module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        concat: {

              js: {
                  src: ['grunt/build/js/*.js'],
                  dest: 'grunt/js/js.js',
                  nonull: true
              },
              css: {
                  src: ['grunt/build/css/*.css'],
                  dest: 'grunt/css/main.css',
                  nonull: true
              },
            },
        uglify: {
          js:{
            src: '<%= concat.js.dest %>',
            dest: 'grunt/js/js.min.js'
          }
          // css:{
          //   src: '<%= concat.css.dest %>',
          // }
          //   dest: 'grunt/css/main.min.css'
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              src: '<%= concat.css.dest %>',
              ext: '.min.css'
            }]
          }
        }

          });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
