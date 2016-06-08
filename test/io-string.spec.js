'use strict';

const IOString = require('../');
const assert = require('assert');
const format = require('util').format;

describe('IOString', function(){
    it('Should store channel and data', function(){
        var str = new IOString('Hello', 0);

        assert.equal(str.channel, 0, 'Channel is 0');
        assert.equal(str, 'Hello', 'Chunk is "Hello"');
    });

    it('Should converts to string', function(){
        var str = new IOString('Hello', 0);

        assert.equal(str.toString(), 'Hello', 'toString() returns "Hello"');
        assert.equal(str + '', 'Hello', ' + converts to string "Hello"');
    });

    it('Should be properly formatted', function(){
        var str = new IOString('Hello', 0);

        assert.equal(format('%s', str), 'Hello', 'Formatted into "Hello"');
    });

    it('Should be instance of String', function(){
        var str = new IOString('Hello', 0);

        assert.ok(str instanceof String, 'Instance of String');
    });
});
