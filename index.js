'use strict';

module.exports = {
    extends: 'eslint:recommended',
    rules: {
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        curly: [
            'error',
            'multi-line'
        ],
        'dot-location': [
            'error',
            'property'
        ],
        'eol-last': 'error',
        eqeqeq: 'error',
        'func-call-spacing': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1
            }
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'max-len': [
            'warn',
            {
                code: 120,
                ignoreUrls: true
            }
        ],
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-path-concat': 'error',
        'no-return-assign': [
            'error',
            'always'
        ],
        'no-self-compare': 'error',
        'no-shadow': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-warning-comments': [
            'warn',
            {
                location: 'anywhere'
            }
        ],
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'one-var': [
            'error',
            'never'
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ],
        semi: [
            'error',
            'always'
        ],
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        strict: 'error',
        'unicode-bom': 'error'
    }
};
