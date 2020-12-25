module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-prettier/recommended',
  ],
  syntax: 'scss',
  rules: {
    'block-opening-brace-space-before': 'always-multi-line',
    'block-opening-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-newline-after': 'always-multi-line',
    'color-hex-case': null,
    'color-hex-length': null,
    'declaration-block-single-line-max-declarations': null,
    'declaration-empty-line-before': null,
    'function-linear-gradient-no-nonstandard-direction': null,
    'no-descending-specificity': null,
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-max-universal': 1,
    'selector-pseudo-element-colon-notation': 'single',
    'value-keyword-case': null,
  },
};