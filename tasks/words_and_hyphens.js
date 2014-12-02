'use strict';

module.exports = function (grunt) {

    var fs = require('fs'),
        path = require('path');

    grunt.registerMultiTask('words_and_hyphens', 'Extracts unique words and hyphens from a text file stripping punctuation on the way and writes results into a json file (e.g. src_file.txt.words_and_hyphens.json)', function () {

        var options = this.options({}),
            pattern = require(options.pattern),
            extractor = require('words-and-hyphens')(pattern),
            cnt = 0,
            self = this;

        self.files.forEach(function (f) {
            cnt += f.src.length;
            f.src.forEach(function (filePath) {
                var data = fs.readFileSync(path.join(__dirname, '..', filePath), { encoding: 'utf8' }),
                    words = extractor.uniqueWords(data),
                    hyphens = extractor.uniqueHyphens(words.join(' '));

                fs.writeFileSync(filePath + '.words-and-hyphens.json', JSON.stringify({
                    words: words,
                    hyphens: hyphens
                }));
            });
        });
    });
};
