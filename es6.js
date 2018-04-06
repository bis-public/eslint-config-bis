'use strict';

module.exports = {
    extends: './index.js',
    env: {
        es6: true
    },
    rules: {
        'arrow-spacing': 'error',
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'no-duplicate-imports': 'error',
        'no-return-await': 'error',
        'no-template-curly-in-string': 'warn',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'warn',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        'rest-spread-spacing': 'error',
        'template-curly-spacing': 'error'
    }
};
