'use strict';

var mainConfig = require('./index');

module.exports = {
    rules: {
        indent: [
            mainConfig.rules.indent[0],
            2,
            mainConfig.rules.indent[2]
        ]
    }
};
