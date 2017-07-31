module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'property-no-unknown': [true, {
      ignoreProperties: ['composes', '/^lost-/'],
    }],
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'],
    }],
    'number-leading-zero': 'never',
  },
}
