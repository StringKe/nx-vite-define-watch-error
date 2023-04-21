export const defaultMetaData = [
    {
        name: 'className',
        propType: 'string',
        description: '类名',
    },
    {
        name: 'style',
        propType: 'object',
        description: '样式',
    },
    {
        name: 'classNames',
        propType: 'array',
        description: '多个类名',
    },
    {
        name: 'styles',
        propType: {
            type: 'oneOfType',
            value: ['object', 'func'],
        },
        description: '多个样式',
    },
    {
        name: 'unstyled',
        propType: 'bool',
        description: '是否不使用样式',
    },
    {
        name: 'm',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
        description: '外边距',
    },
    {
        name: 'my',
        description: '上下外边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'mx',
        description: '左右外边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'mt',
        description: '上外边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'mb',
        description: '下外边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'ml',
        description: '左外边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'mr',
        description: '右外边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'p',
        description: '内边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'py',
        description: '上下内边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'px',
        description: '左右内边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'pt',
        description: '上内边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'pb',
        description: '下内边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'pl',
        description: '左内边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'pr',
        description: '右内边距',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'bg',
        description: '背景色',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        'dark',
                        'gray',
                        'red',
                        'pink',
                        'grape',
                        'violet',
                        'indigo',
                        'blue',
                        'cyan',
                        'green',
                        'lime',
                        'yellow',
                        'orange',
                        'teal',
                    ],
                },
            ],
        },
    },
    {
        name: 'c',
        description: '字体颜色',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        'dark',
                        'gray',
                        'red',
                        'pink',
                        'grape',
                        'violet',
                        'indigo',
                        'blue',
                        'cyan',
                        'green',
                        'lime',
                        'yellow',
                        'orange',
                        'teal',
                    ],
                },
            ],
        },
    },
    {
        name: 'opacity',
        description: '透明度',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'revert-layer',
                        'unset',
                    ],
                },
            ],
        },
    },
    {
        name: 'ff',
        description: '字体',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'revert-layer',
                        'unset',
                        'cursive',
                        'fantasy',
                        'monospace',
                        'sans-serif',
                        'serif',
                    ],
                },
            ],
        },
    },
    {
        name: 'fz',
        description: '字体大小',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: ['xs', 'sm', 'md', 'lg', 'xl'],
                },
            ],
        },
    },
    {
        name: 'fw',
        description: '字体粗细',
        propType: {
            type: 'oneOfType',
            value: [
                'number',
                {
                    type: 'oneOf',
                    value: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'revert-layer',
                        'unset',
                        'bold',
                        'normal',
                        'bolder',
                        'lighter',
                    ],
                },
            ],
        },
    },
    {
        name: 'lts',
        description: '字间距',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number', 'object'],
        },
    },
    {
        name: 'ta',
        description: '文字对齐方式',
        propType: {
            type: 'oneOfType',
            value: [
                'left',
                'right',
                '-moz-initial',
                'inherit',
                'initial',
                'revert',
                'revert-layer',
                'unset',
                'center',
                'end',
                'justify',
                'match-parent',
                'start',
            ],
        },
    },
    {
        name: 'lh',
        description: '行高',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'fs',
        description: '字体样式',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'revert-layer',
                        'unset',
                        'normal',
                        'italic',
                        'oblique',
                    ],
                },
            ],
        },
    },
    {
        name: 'tt',
        description: '文本转换',
        propType: {
            type: 'oneOfType',
            value: [
                '-moz-initial',
                'inherit',
                'initial',
                'revert',
                'revert-layer',
                'unset',
                'capitalize',
                'full-size-kana',
                'full-width',
                'lowercase',
                'none',
                'uppercase',
            ],
        },
    },
    {
        name: 'td',
        description: '文本装饰',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'w',
        description: '宽度',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'miw',
        description: '最小宽度',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'maw',
        description: '最大宽度',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'h',
        description: '高度',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'mih',
        description: '最小高度',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'mah',
        description: '最大高度',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'bgsz',
        description: '背景尺寸',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                'number',
                {
                    type: 'oneOf',
                    value: ['auto auto', 'cover', 'contain'],
                },
            ],
        },
    },
    {
        name: 'bgp',
        description: '背景位置',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'bgr',
        description: '背景重复',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'revert-layer',
                        'unset',
                        'no-repeat',
                        'repeat',
                        'repeat-x',
                        'repeat-y',
                        'round',
                        'space',
                    ],
                },
            ],
        },
    },
    {
        name: 'bga',
        description: '背景透明度',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'revert-layer',
                        'unset',
                        'fixed',
                        'local',
                        'scroll',
                    ],
                },
            ],
        },
    },
    {
        name: 'pos',
        description: '定位',
        propType: {
            type: 'oneOfType',
            value: [
                'string',
                {
                    type: 'oneOf',
                    value: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'revert-layer',
                        'unset',
                        'fixed',
                        '-webkit-sticky',
                        'absolute',
                        'relative',
                        'static',
                        'sticky',
                    ],
                },
            ],
        },
    },
    {
        name: 'top',
        description: 'top',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'left',
        description: 'left',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'bottom',
        description: 'bottom',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'right',
        description: 'right',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'inset',
        description: 'inset',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
    {
        name: 'display',
        description: 'display',
        propType: {
            type: 'oneOfType',
            value: [
                '-moz-initial',
                'inherit',
                'initial',
                'revert',
                'revert-layer',
                'unset',
                'none',
                'block',
                'inline',
                'run-in',
                '-ms-flexbox',
                '-ms-grid',
                '-webkit-flex',
                'flex',
                'flow',
                'flow-root',
                'grid',
                'ruby',
                'table',
                'ruby-base',
                'ruby-base-container',
                'ruby-text',
                'ruby-text-container',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row',
                'table-row-group',
                '-ms-inline-flexbox',
                '-ms-inline-grid',
                '-webkit-inline-flex',
                'inline-block',
                'inline-flex',
                'inline-grid',
                'inline-list-item',
                'inline-table',
                'contents',
                'list-item',
            ],
        },
    },
    {
        name: 'sx',
        propType: {
            type: 'oneOfType',
            isRequired: true,
            value: [
                'object',
                {
                    type: 'func',
                    params: [
                        {
                            name: 'theme',
                            propType: 'object',
                        },
                    ],
                    raw: '(theme: object) => CSSProperties',
                },
            ],
        },
    },
    {
        name: 'highlightStyles',
        descriptions: '高亮样式',
        propType: {
            type: 'oneOfType',
            isRequired: true,
            value: [
                'object',
                {
                    type: 'func',
                    params: [
                        {
                            name: 'theme',
                            propType: 'object',
                        },
                    ],
                    raw: '(theme: object) => CSSProperties',
                },
            ],
        },
    },
    {
        name: 'key',
        propType: {
            type: 'oneOfType',
            value: ['string', 'number'],
        },
    },
]
