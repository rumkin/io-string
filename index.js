'use strict';

module.exports = IOString;

/**
 * IOString is a shell output string with channel specified.
 *
 * @param {String|Buffer} chunk IO output value.
 * @param {Number} channel Unix channel name.
 */
function IOString(chunk, channel) {
    String.call(this);

    this.chunk = chunk;
    this.channel = channel;
}

Object.setPrototypeOf(IOString.prototype, String.prototype);

/**
 * Convert IOString to string.
 * @return {string} IOString chunk.
 */
IOString.prototype.toString = function (){
    return this.chunk.toString(...arguments);
};

IOString.prototype.valueOf = function() {
    return this.chunk.toString();
};
