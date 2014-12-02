'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            js: ['test/**/*.json']
        },
        jshint: {
            options: JSON.parse(require('fs').readFileSync('.jshintrc')),
            all: ['**/*.js', '!node_modules/**/*', '!coverage/**/*']
        },

        // Configuration to be run (and then tested).
        'words_and_hyphens': {
            options: {
                pattern: 'hyphenation.de'
            },
            files: ['test/fixtures/**/*.txt']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nsp-package');

    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('audit', ['validate-package']);
    grunt.registerTask('default', ['hint', 'audit']);
};
