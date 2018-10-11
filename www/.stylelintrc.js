module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  defaultSeverity: process.env.NODE_ENV === 'production' ? 'error' : 'warning',
  rules: {
    // Prettier is used for SCSS styling now, so these are unnecessary
    'declaration-colon-newline-after': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    // Disabled as it's returning many false positives.
    // See https://github.com/stylelint/stylelint/issues/2489
    // TODO: Enable once fixed
    'no-descending-specificity': null,
    // Enable :global and :local selectors for css modules
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
    // Enable composes keyword for css modules
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md#options
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    // tldr; Rules follow a logical, semantic ordering to prevent
    // readers from resetting their context of styles being applied
    'order/properties-order': [
      [
        'composes',
        'content',

        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',

        'display',
        'visibility',
        'opacity',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-wrap',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'order',
        'float',
        'clear',
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'overflow',
        'overflow-x',
        'overflow-y',

        'font',
        'font-style',
        'font-weight',
        'font-size',
        'line-height',
        'font-family',
        'font-variant',
        'text-align',
        'text-decoration',
        'text-shadow',
        'text-transform',
        'white-space',
        'vertical-align',
        'list-style',
        'list-style-position',
        'list-style-type',

        'color',
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'background',
        'background-image',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-repeat',
        'background-attachment',
        'background-origin',
        'background-clip',
        'background-color',
        'outline',
        'box-shadow',
        'fill',

        'filter',
        'transform',
        'transform-origin',

        'pointer-events',
        'cursor',

        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay',

        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
