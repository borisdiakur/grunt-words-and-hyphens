'use strict';
/* global describe, beforeEach, afterEach, it */

var assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    grunt = require('grunt'),
    exec = require('child_process').exec;

describe('grunt_words_and_hyphens', function () {

    describe('unit tests', function () {

        beforeEach(function (done) {
            exec('grunt clean', function (err) {
                if (err) {
                    throw err;
                }
                done();
            });
        });

        it('should write files', function (done) {
            require('../gruntfile.js')(grunt);
            grunt.tasks('words_and_hyphens', null, function() {
                var cnt = 0;
                function complete() {
                    cnt++;
                    if (cnt === 2) {
                        done();
                    }
                }
                fs.readFile(path.join(__dirname, './fixtures/fixture.txt.words-and-hyphens.json'), { encoding: 'utf8' }, function (err, data) {
                    assert.ifError(err);
                    assert.deepEqual(JSON.parse(data), {
                        'words'  : ['Fische', 'Fischers', 'fischt', 'frische', 'Fritz'],
                        'hyphens': ['fi', 'fischt', 'fri', 'fritz', 'sche', 'schers']
                    });
                    complete();
                });
                fs.readFile(path.join(__dirname, './fixtures/anotherFixture.txt.words-and-hyphens.json'), { encoding: 'utf8' }, function (err, data) {
                    assert.ifError(err);
                    assert.deepEqual(JSON.parse(data), {
                        'words'  : ['Essen', 'Hessen', 'in', 'Wenn'],
                        'hyphens': ['es', 'hes', 'in', 'sen', 'wenn']
                    });
                    complete();
                });
            });
        });
    });

    afterEach(function (done) {
        exec('grunt clean', function (err) {
            if (err) {
                throw err;
            }
            done();
        });
    });
});
