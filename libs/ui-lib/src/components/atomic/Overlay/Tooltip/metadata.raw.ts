import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTooltip',
        title: '提示框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTooltip',
            main: 'libs/components/src/components/atomic/Overlay/Tooltip/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'variant',
                propType: 'string',
                title: {
                    label: 'Variant',
                    tip: 'variant | undefined',
                },
            },
            {
                name: 'onPositionChange',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'position',
                            propType: 'any',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(position: any) => void',
                },
                title: {
                    label: 'OnPositionChange',
                    tip: 'onPositionChange | Called when tooltip position changes',
                },
            },
            {
                name: 'openDelay',
                propType: 'number',
                title: {
                    label: 'OpenDelay',
                    tip: 'openDelay | Open delay in ms',
                },
            },
            {
                name: 'closeDelay',
                propType: 'number',
                title: {
                    label: 'CloseDelay',
                    tip: 'closeDelay | Close delay in ms',
                },
            },
            {
                name: 'opened',
                propType: 'bool',
                title: {
                    label: 'Opened',
                    tip: 'opened | Controls opened state',
                },
            },
            {
                name: 'offset',
                propType: 'number',
                title: {
                    label: 'Offset',
                    tip: 'offset | Space between target element and tooltip',
                },
            },
            {
                name: 'withArrow',
                propType: 'bool',
                title: {
                    label: 'WithArrow',
                    tip: 'withArrow | Determines whether component should have an arrow',
                },
            },
            {
                name: 'arrowSize',
                propType: 'number',
                title: {
                    label: 'Arrow大小',
                    tip: 'arrowSize | Arrow size',
                },
            },
            {
                name: 'arrowOffset',
                propType: 'number',
                title: {
                    label: 'ArrowOffset',
                    tip: 'arrowOffset | Arrow offset',
                },
            },
            {
                name: 'arrowRadius',
                propType: 'number',
                title: {
                    label: 'ArrowRadius',
                    tip: 'arrowRadius | Arrow radius',
                },
            },
            {
                name: 'arrowPosition',
                propType: {
                    type: 'oneOf',
                    value: ['center', 'side'],
                },
                title: {
                    label: 'ArrowPosition',
                    tip: 'arrowPosition | Arrow position *',
                },
            },
            {
                name: 'transitionProps',
                propType: 'object',
                title: {
                    label: 'TransitionProps',
                    tip: "transitionProps | Props added to Transition component that used to animate tooltip presence, use to configure duration and animation type, { duration: 100, transition: 'fade' } by default",
                },
            },
            {
                name: 'events',
                propType: {
                    type: 'shape',
                    value: [
                        {
                            name: 'hover',
                            propType: {
                                type: 'bool',
                                isRequired: true,
                            },
                        },
                        {
                            name: 'focus',
                            propType: {
                                type: 'bool',
                                isRequired: true,
                            },
                        },
                        {
                            name: 'touch',
                            propType: {
                                type: 'bool',
                                isRequired: true,
                            },
                        },
                    ],
                },
                title: {
                    label: 'Events',
                    tip: 'events | Determines which events will be used to show tooltip',
                },
            },
            {
                name: 'positionDependencies',
                propType: {
                    type: 'arrayOf',
                    value: 'any',
                },
                title: {
                    label: 'PositionDependencies',
                    tip: 'positionDependencies | useEffect dependencies to force update tooltip position',
                },
            },
            {
                name: 'inline',
                propType: 'bool',
                title: {
                    label: 'Inline',
                    tip: 'inline | Set if tooltip is attached to an inline element',
                },
            },
            {
                name: 'keepMounted',
                propType: 'bool',
                title: {
                    label: 'KeepMounted',
                    tip: 'keepMounted | If set tooltip will not be unmounted from the DOM when it is hidden, display: none styles will be added instead',
                },
            },
            {
                name: 'children',
                propType: {
                    type: 'node',
                    isRequired: true,
                },
                title: {
                    label: '子元素',
                    tip: 'children | Target element',
                },
            },
            {
                name: 'position',
                propType: 'any',
                title: {
                    label: 'Position',
                    tip: 'position | Tooltip position relative to target element (default) or mouse (floating)',
                },
            },
            {
                name: 'refProp',
                propType: 'string',
                title: {
                    label: 'RefProp',
                    tip: 'refProp | Key of the prop that should be used to get element ref',
                },
            },
            {
                name: 'label',
                propType: {
                    type: 'node',
                    isRequired: true,
                },
                title: {
                    label: 'Label',
                    tip: 'label | Tooltip label',
                },
            },
            {
                name: 'withinPortal',
                propType: 'bool',
                title: {
                    label: 'WithinPortal',
                    tip: 'withinPortal | Determines whether tooltip should be rendered within Portal',
                },
            },
            {
                name: 'portalProps',
                propType: 'object',
                title: {
                    label: 'PortalProps',
                    tip: 'portalProps | Props to pass down to the portal when withinPortal is true',
                },
            },
            {
                name: 'radius',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Radius',
                    tip: 'radius | Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default',
                },
            },
            {
                name: 'color',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: '颜色',
                    tip: 'color | Key of theme.colors',
                },
            },
            {
                name: 'multiline',
                propType: 'bool',
                title: {
                    label: 'Multiline',
                    tip: 'multiline | Defines whether content should be wrapped on to the next line',
                },
            },
            {
                name: 'width',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        {
                            type: 'oneOf',
                            value: ['auto'],
                        },
                    ],
                },
                title: {
                    label: 'Width',
                    tip: 'width | Tooltip width',
                },
            },
            {
                name: 'zIndex',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'auto',
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
                title: {
                    label: 'ZIndex',
                    tip: 'zIndex | Tooltip z-index',
                },
            },
            {
                name: 'disabled',
                propType: 'bool',
                title: {
                    label: 'Disabled',
                    tip: 'disabled | Disables tooltip',
                },
            },
            {
                name: 'className',
                propType: 'string',
                title: {
                    label: 'ClassName',
                    tip: 'className | undefined',
                },
            },
            {
                name: 'style',
                propType: 'object',
                title: {
                    label: 'Style',
                    tip: 'style | undefined',
                },
            },
            {
                name: 'sx',
                propType: {
                    type: 'oneOfType',
                    value: [
                        {
                            type: 'objectOf',
                            value: 'oneOfType',
                        },
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'theme',
                                    propType: {
                                        type: 'shape',
                                        value: [
                                            {
                                                name: 'dir',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: ['ltr', 'rtl'],
                                                },
                                            },
                                            {
                                                name: 'primaryShade',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            type: 'shape',
                                                            value: [
                                                                {
                                                                    name: 'light',
                                                                    propType: {
                                                                        type: 'oneOf',
                                                                        isRequired:
                                                                            true,
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    name: 'dark',
                                                                    propType: {
                                                                        type: 'oneOf',
                                                                        isRequired:
                                                                            true,
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                0, 1, 2, 3, 4,
                                                                5, 6, 7, 8, 9,
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'focusRing',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'auto',
                                                        'always',
                                                        'never',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'defaultRadius',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'number',
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                'xs',
                                                                'sm',
                                                                'md',
                                                                'lg',
                                                                'xl',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'loader',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'bars',
                                                        'oval',
                                                        'dots',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'colorScheme',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: ['dark', 'light'],
                                                },
                                            },
                                            {
                                                name: 'white',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'black',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'colors',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'fontFamily',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
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
                                                name: 'lineHeight',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'string',
                                                        'number',
                                                        'object',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'transitionTimingFunction',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                '-moz-initial',
                                                                'inherit',
                                                                'initial',
                                                                'revert',
                                                                'revert-layer',
                                                                'unset',
                                                                'ease',
                                                                'ease-in',
                                                                'ease-in-out',
                                                                'ease-out',
                                                                'step-end',
                                                                'step-start',
                                                                'linear',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fontFamilyMonospace',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
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
                                                name: 'primaryColor',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
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
                                                name: 'respectReducedMotion',
                                                propType: {
                                                    type: 'bool',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'cursorType',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'default',
                                                        'pointer',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'defaultGradient',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'from',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'to',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'deg',
                                                            propType: 'number',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fontSizes',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'radius',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'spacing',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'breakpoints',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'shadows',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'headings',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'fontFamily',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'fontWeight',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                                            'bold',
                                                                            'bolder',
                                                                            'lighter',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'sizes',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'h1',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h2',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h3',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h4',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h5',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h6',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fn',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'fontStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'focusStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'selector',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(selector?: string) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'cover',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'offset',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'string',
                                                                                    'number',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(offset?: string | number) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'themeColor',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'shade',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                    {
                                                                        name: 'primaryFallback',
                                                                        propType:
                                                                            'bool',
                                                                    },
                                                                    {
                                                                        name: 'useSplittedShade',
                                                                        propType:
                                                                            'bool',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'rgba',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'linearGradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'deg',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                    {
                                                                        name: 'colors',
                                                                        propType:
                                                                            {
                                                                                type: 'arrayOf',
                                                                                value: 'string',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(deg: number, ...colors: string[]) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'radialGradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colors',
                                                                        propType:
                                                                            {
                                                                                type: 'arrayOf',
                                                                                value: 'string',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(...colors: string[]) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'gradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'gradient',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                value: [
                                                                                    {
                                                                                        name: 'from',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'to',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'deg',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(gradient?: MantineGradient) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'smallerThan',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'breakpoint',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'largerThan',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'breakpoint',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'lighten',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'darken',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'radius',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'size',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(size?: MantineNumberSize) => string | number',
                                                            },
                                                        },
                                                        {
                                                            name: 'variant',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'payload',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                value: [
                                                                                    {
                                                                                        name: 'variant',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'object',
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
                                                                                        name: 'gradient',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'from',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'to',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'deg',
                                                                                                        propType:
                                                                                                            'number',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'primaryFallback',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(payload: VariantInput) => VariantOutput',
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryShade',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colorScheme',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOf',
                                                                                value: [
                                                                                    'dark',
                                                                                    'light',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(colorScheme?: ColorScheme) => Shade',
                                                            },
                                                        },
                                                        {
                                                            name: 'hover',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'hoverStyle',
                                                                        propType:
                                                                            {
                                                                                type: 'objectOf',
                                                                                value: 'oneOfType',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(hoverStyle: CSSObject) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryColor',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colorScheme',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOf',
                                                                                value: [
                                                                                    'dark',
                                                                                    'light',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(colorScheme?: ColorScheme) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'placeholderStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'dimmed',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => string',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'other',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'activeStyles',
                                                propType: {
                                                    type: 'objectOf',
                                                    isRequired: true,
                                                    value: 'oneOfType',
                                                },
                                            },
                                            {
                                                name: 'datesLocale',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'components',
                                                propType: {
                                                    type: 'objectOf',
                                                    isRequired: true,
                                                    value: 'shape',
                                                },
                                            },
                                            {
                                                name: 'globalStyles',
                                                propType: {
                                                    type: 'func',
                                                    isRequired: true,
                                                    params: [
                                                        {
                                                            name: 'theme',
                                                            propType: 'object',
                                                        },
                                                    ],
                                                    raw: '(theme: MantineTheme) => CSSObject',
                                                },
                                            },
                                            {
                                                name: 'focusRingStyles',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'styles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'resetStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'inputStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                            raw: '(theme: MantineTheme) => CSSObject',
                        },
                        {
                            type: 'arrayOf',
                            value: {
                                type: 'oneOfType',
                                value: [
                                    {
                                        type: 'objectOf',
                                        value: 'oneOfType',
                                    },
                                    {
                                        type: 'func',
                                        params: [
                                            {
                                                name: 'theme',
                                                propType: {
                                                    type: 'shape',
                                                    value: [
                                                        {
                                                            name: 'dir',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'ltr',
                                                                    'rtl',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryShade',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        type: 'shape',
                                                                        value: [
                                                                            {
                                                                                name: 'light',
                                                                                propType:
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        isRequired:
                                                                                            true,
                                                                                        value: [
                                                                                            0,
                                                                                            1,
                                                                                            2,
                                                                                            3,
                                                                                            4,
                                                                                            5,
                                                                                            6,
                                                                                            7,
                                                                                            8,
                                                                                            9,
                                                                                        ],
                                                                                    },
                                                                            },
                                                                            {
                                                                                name: 'dark',
                                                                                propType:
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        isRequired:
                                                                                            true,
                                                                                        value: [
                                                                                            0,
                                                                                            1,
                                                                                            2,
                                                                                            3,
                                                                                            4,
                                                                                            5,
                                                                                            6,
                                                                                            7,
                                                                                            8,
                                                                                            9,
                                                                                        ],
                                                                                    },
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'focusRing',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'auto',
                                                                    'always',
                                                                    'never',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'defaultRadius',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'number',
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            'xs',
                                                                            'sm',
                                                                            'md',
                                                                            'lg',
                                                                            'xl',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'loader',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'bars',
                                                                    'oval',
                                                                    'dots',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'colorScheme',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'dark',
                                                                    'light',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'white',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'black',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'colors',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'fontFamily',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'lineHeight',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'string',
                                                                    'number',
                                                                    'object',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'transitionTimingFunction',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            '-moz-initial',
                                                                            'inherit',
                                                                            'initial',
                                                                            'revert',
                                                                            'revert-layer',
                                                                            'unset',
                                                                            'ease',
                                                                            'ease-in',
                                                                            'ease-in-out',
                                                                            'ease-out',
                                                                            'step-end',
                                                                            'step-start',
                                                                            'linear',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fontFamilyMonospace',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'primaryColor',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'respectReducedMotion',
                                                            propType: {
                                                                type: 'bool',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'cursorType',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'default',
                                                                    'pointer',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'defaultGradient',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'from',
                                                                        propType:
                                                                            {
                                                                                type: 'string',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'to',
                                                                        propType:
                                                                            {
                                                                                type: 'string',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'deg',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fontSizes',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'radius',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'spacing',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'breakpoints',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'shadows',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'headings',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'fontFamily',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    'object',
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
                                                                        name: 'fontWeight',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    'object',
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
                                                                                            'bold',
                                                                                            'bolder',
                                                                                            'lighter',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'sizes',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'h1',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h2',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h3',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h4',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h5',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h6',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fn',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'fontStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'focusStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'selector',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(selector?: string) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'cover',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'offset',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(offset?: string | number) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'themeColor',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'shade',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                    {
                                                                                        name: 'primaryFallback',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                    {
                                                                                        name: 'useSplittedShade',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'rgba',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'linearGradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'deg',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                    {
                                                                                        name: 'colors',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'arrayOf',
                                                                                                value: 'string',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(deg: number, ...colors: string[]) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'radialGradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colors',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'arrayOf',
                                                                                                value: 'string',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(...colors: string[]) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'gradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'gradient',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'from',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'to',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'deg',
                                                                                                        propType:
                                                                                                            'number',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(gradient?: MantineGradient) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'smallerThan',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'breakpoint',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'largerThan',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'breakpoint',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'lighten',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'darken',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'radius',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'size',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(size?: MantineNumberSize) => string | number',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'variant',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'payload',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'variant',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'color',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                        name: 'gradient',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'shape',
                                                                                                                value: [
                                                                                                                    {
                                                                                                                        name: 'from',
                                                                                                                        propType:
                                                                                                                            {
                                                                                                                                type: 'string',
                                                                                                                                isRequired:
                                                                                                                                    true,
                                                                                                                            },
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'to',
                                                                                                                        propType:
                                                                                                                            {
                                                                                                                                type: 'string',
                                                                                                                                isRequired:
                                                                                                                                    true,
                                                                                                                            },
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'deg',
                                                                                                                        propType:
                                                                                                                            'number',
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'primaryFallback',
                                                                                                        propType:
                                                                                                            'bool',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(payload: VariantInput) => VariantOutput',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'primaryShade',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colorScheme',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOf',
                                                                                                value: [
                                                                                                    'dark',
                                                                                                    'light',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(colorScheme?: ColorScheme) => Shade',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'hover',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'hoverStyle',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'objectOf',
                                                                                                value: 'oneOfType',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(hoverStyle: CSSObject) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'primaryColor',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colorScheme',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOf',
                                                                                                value: [
                                                                                                    'dark',
                                                                                                    'light',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(colorScheme?: ColorScheme) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'placeholderStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'dimmed',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => string',
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'other',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'activeStyles',
                                                            propType: {
                                                                type: 'objectOf',
                                                                isRequired:
                                                                    true,
                                                                value: 'oneOfType',
                                                            },
                                                        },
                                                        {
                                                            name: 'datesLocale',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'components',
                                                            propType: {
                                                                type: 'objectOf',
                                                                isRequired:
                                                                    true,
                                                                value: 'shape',
                                                            },
                                                        },
                                                        {
                                                            name: 'globalStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                raw: '(theme: MantineTheme) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'focusRingStyles',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'styles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'resetStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'inputStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                        raw: '(theme: MantineTheme) => CSSObject',
                                    },
                                ],
                            },
                        },
                    ],
                },
                title: {
                    label: 'Sx',
                    tip: 'sx | undefined',
                },
            },
            {
                name: 'classNames',
                propType: 'object',
                title: {
                    label: 'ClassNames',
                    tip: 'classNames | undefined',
                },
            },
            {
                name: 'styles',
                propType: {
                    type: 'oneOfType',
                    value: ['object', 'func'],
                },
                title: {
                    label: 'Styles',
                    tip: 'styles | undefined',
                },
            },
            {
                name: 'unstyled',
                propType: 'bool',
                title: {
                    label: 'Unstyled',
                    tip: 'unstyled | undefined',
                },
            },
            {
                name: 'm',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'M',
                    tip: 'm | undefined',
                },
            },
            {
                name: 'my',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'My',
                    tip: 'my | undefined',
                },
            },
            {
                name: 'mx',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mx',
                    tip: 'mx | undefined',
                },
            },
            {
                name: 'mt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mt',
                    tip: 'mt | undefined',
                },
            },
            {
                name: 'mb',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mb',
                    tip: 'mb | undefined',
                },
            },
            {
                name: 'ml',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Ml',
                    tip: 'ml | undefined',
                },
            },
            {
                name: 'mr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mr',
                    tip: 'mr | undefined',
                },
            },
            {
                name: 'p',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'P',
                    tip: 'p | undefined',
                },
            },
            {
                name: 'py',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Py',
                    tip: 'py | undefined',
                },
            },
            {
                name: 'px',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Px',
                    tip: 'px | undefined',
                },
            },
            {
                name: 'pt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pt',
                    tip: 'pt | undefined',
                },
            },
            {
                name: 'pb',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pb',
                    tip: 'pb | undefined',
                },
            },
            {
                name: 'pl',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pl',
                    tip: 'pl | undefined',
                },
            },
            {
                name: 'pr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pr',
                    tip: 'pr | undefined',
                },
            },
            {
                name: 'bg',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Bg',
                    tip: 'bg | undefined',
                },
            },
            {
                name: 'c',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'C',
                    tip: 'c | undefined',
                },
            },
            {
                name: 'opacity',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Opacity',
                    tip: 'opacity | undefined',
                },
            },
            {
                name: 'ff',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Ff',
                    tip: 'ff | undefined',
                },
            },
            {
                name: 'fz',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Fz',
                    tip: 'fz | undefined',
                },
            },
            {
                name: 'fw',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                                'bold',
                                'bolder',
                                'lighter',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Fw',
                    tip: 'fw | undefined',
                },
            },
            {
                name: 'lts',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },

            },
            {
                name: 'ta',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'right',
                                'left',
                                'center',
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'end',
                                'justify',
                                'match-parent',
                                'start',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Ta',
                    tip: 'ta | undefined',
                },
            },
            {
                name: 'lh',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Lh',
                    tip: 'lh | undefined',
                },
            },
            {
                name: 'fs',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Fs',
                    tip: 'fs | undefined',
                },
            },
            {
                name: 'tt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
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
                    ],
                },
                title: {
                    label: 'Tt',
                    tip: 'tt | undefined',
                },
            },
            {
                name: 'td',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Td',
                    tip: 'td | undefined',
                },
            },
            {
                name: 'w',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'W',
                    tip: 'w | undefined',
                },
            },
            {
                name: 'miw',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Miw',
                    tip: 'miw | undefined',
                },
            },
            {
                name: 'maw',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Maw',
                    tip: 'maw | undefined',
                },
            },
            {
                name: 'h',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'H',
                    tip: 'h | undefined',
                },
            },
            {
                name: 'mih',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Mih',
                    tip: 'mih | undefined',
                },
            },
            {
                name: 'mah',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Mah',
                    tip: 'mah | undefined',
                },
            },
            {
                name: 'bgsz',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bgsz',
                    tip: 'bgsz | undefined',
                },
            },
            {
                name: 'bgp',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bgp',
                    tip: 'bgp | undefined',
                },
            },
            {
                name: 'bgr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Bgr',
                    tip: 'bgr | undefined',
                },
            },
            {
                name: 'bga',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Bga',
                    tip: 'bga | undefined',
                },
            },
            {
                name: 'pos',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Pos',
                    tip: 'pos | undefined',
                },
            },
            {
                name: 'top',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Top',
                    tip: 'top | undefined',
                },
            },
            {
                name: 'left',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '左',
                    tip: 'left | undefined',
                },
            },
            {
                name: 'bottom',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bottom',
                    tip: 'bottom | undefined',
                },
            },
            {
                name: 'right',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '右',
                    tip: 'right | undefined',
                },
            },
            {
                name: 'inset',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Inset',
                    tip: 'inset | undefined',
                },
            },
            {
                name: 'display',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'flex',
                                'grid',
                                'none',
                                'block',
                                'inline',
                                'run-in',
                                '-ms-flexbox',
                                '-ms-grid',
                                '-webkit-flex',
                                'flow',
                                'flow-root',
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
                    ],
                },
                title: {
                    label: 'Display',
                    tip: 'display | undefined',
                },
            },
        ],
        group: 'UI 组件',
        category: '遮罩',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: true,
            },
        },
        snippets: [
            {
                title: '提示框',
                schema: {
                    componentName: 'MantineTooltip',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTooltip.Group',
        title: '提示框组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTooltip',
            main: 'libs/components/src/components/atomic/Overlay/Tooltip/component.tsx',
            destructuring: true,
            subName: 'Group',
        },
        props: [
            {
                name: 'children',
                propType: {
                    type: 'node',
                    isRequired: true,
                },
                title: {
                    label: '子元素',
                    tip: 'children | <Tooltip /> components',
                },
            },
            {
                name: 'openDelay',
                propType: 'number',
                title: {
                    label: 'OpenDelay',
                    tip: 'openDelay | Open delay in ms',
                },
            },
            {
                name: 'closeDelay',
                propType: 'number',
                title: {
                    label: 'CloseDelay',
                    tip: 'closeDelay | Close delay in ms',
                },
            },
        ],
        group: 'UI 组件',
        category: '遮罩',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: false,
            },
        },
        snippets: [
            {
                title: '提示框组',
                schema: {
                    componentName: 'MantineTooltip.Group',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTooltip.Floating',
        title: '浮动提示框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTooltip',
            main: 'libs/components/src/components/atomic/Overlay/Tooltip/component.tsx',
            destructuring: true,
            subName: 'Floating',
        },
        props: [
            {
                name: 'variant',
                propType: 'string',
                title: {
                    label: 'Variant',
                    tip: 'variant | undefined',
                },
            },
            {
                name: 'offset',
                propType: 'number',
                title: {
                    label: 'Offset',
                    tip: 'offset | Offset from mouse',
                },
            },
            {
                name: 'children',
                propType: {
                    type: 'node',
                    isRequired: true,
                },
                title: {
                    label: '子元素',
                    tip: 'children | Target element',
                },
            },
            {
                name: 'position',
                propType: 'any',
                title: {
                    label: 'Position',
                    tip: 'position | Tooltip position relative to target element (default) or mouse (floating)',
                },
            },
            {
                name: 'refProp',
                propType: 'string',
                title: {
                    label: 'RefProp',
                    tip: 'refProp | Key of the prop that should be used to get element ref',
                },
            },
            {
                name: 'label',
                propType: {
                    type: 'node',
                    isRequired: true,
                },
                title: {
                    label: 'Label',
                    tip: 'label | Tooltip label',
                },
            },
            {
                name: 'withinPortal',
                propType: 'bool',
                title: {
                    label: 'WithinPortal',
                    tip: 'withinPortal | Determines whether tooltip should be rendered within Portal',
                },
            },
            {
                name: 'portalProps',
                propType: 'object',
                title: {
                    label: 'PortalProps',
                    tip: 'portalProps | Props to pass down to the portal when withinPortal is true',
                },
            },
            {
                name: 'radius',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Radius',
                    tip: 'radius | Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default',
                },
            },
            {
                name: 'color',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: '颜色',
                    tip: 'color | Key of theme.colors',
                },
            },
            {
                name: 'multiline',
                propType: 'bool',
                title: {
                    label: 'Multiline',
                    tip: 'multiline | Defines whether content should be wrapped on to the next line',
                },
            },
            {
                name: 'width',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        {
                            type: 'oneOf',
                            value: ['auto'],
                        },
                    ],
                },
                title: {
                    label: 'Width',
                    tip: 'width | Tooltip width',
                },
            },
            {
                name: 'zIndex',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'auto',
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
                title: {
                    label: 'ZIndex',
                    tip: 'zIndex | Tooltip z-index',
                },
            },
            {
                name: 'disabled',
                propType: 'bool',
                title: {
                    label: 'Disabled',
                    tip: 'disabled | Disables tooltip',
                },
            },
            {
                name: 'className',
                propType: 'string',
                title: {
                    label: 'ClassName',
                    tip: 'className | undefined',
                },
            },
            {
                name: 'style',
                propType: 'object',
                title: {
                    label: 'Style',
                    tip: 'style | undefined',
                },
            },
            {
                name: 'sx',
                propType: {
                    type: 'oneOfType',
                    value: [
                        {
                            type: 'objectOf',
                            value: 'oneOfType',
                        },
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'theme',
                                    propType: {
                                        type: 'shape',
                                        value: [
                                            {
                                                name: 'dir',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: ['ltr', 'rtl'],
                                                },
                                            },
                                            {
                                                name: 'primaryShade',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            type: 'shape',
                                                            value: [
                                                                {
                                                                    name: 'light',
                                                                    propType: {
                                                                        type: 'oneOf',
                                                                        isRequired:
                                                                            true,
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    name: 'dark',
                                                                    propType: {
                                                                        type: 'oneOf',
                                                                        isRequired:
                                                                            true,
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                0, 1, 2, 3, 4,
                                                                5, 6, 7, 8, 9,
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'focusRing',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'auto',
                                                        'always',
                                                        'never',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'defaultRadius',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'number',
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                'xs',
                                                                'sm',
                                                                'md',
                                                                'lg',
                                                                'xl',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'loader',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'bars',
                                                        'oval',
                                                        'dots',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'colorScheme',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: ['dark', 'light'],
                                                },
                                            },
                                            {
                                                name: 'white',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'black',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'colors',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'fontFamily',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
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
                                                name: 'lineHeight',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'string',
                                                        'number',
                                                        'object',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'transitionTimingFunction',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                '-moz-initial',
                                                                'inherit',
                                                                'initial',
                                                                'revert',
                                                                'revert-layer',
                                                                'unset',
                                                                'ease',
                                                                'ease-in',
                                                                'ease-in-out',
                                                                'ease-out',
                                                                'step-end',
                                                                'step-start',
                                                                'linear',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fontFamilyMonospace',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
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
                                                name: 'primaryColor',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
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
                                                name: 'respectReducedMotion',
                                                propType: {
                                                    type: 'bool',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'cursorType',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'default',
                                                        'pointer',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'defaultGradient',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'from',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'to',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'deg',
                                                            propType: 'number',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fontSizes',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'radius',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'spacing',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'breakpoints',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'shadows',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'headings',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'fontFamily',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'fontWeight',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                                            'bold',
                                                                            'bolder',
                                                                            'lighter',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'sizes',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'h1',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h2',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h3',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h4',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h5',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h6',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
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
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fn',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'fontStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'focusStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'selector',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(selector?: string) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'cover',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'offset',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'string',
                                                                                    'number',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(offset?: string | number) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'themeColor',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'shade',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                    {
                                                                        name: 'primaryFallback',
                                                                        propType:
                                                                            'bool',
                                                                    },
                                                                    {
                                                                        name: 'useSplittedShade',
                                                                        propType:
                                                                            'bool',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'rgba',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'linearGradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'deg',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                    {
                                                                        name: 'colors',
                                                                        propType:
                                                                            {
                                                                                type: 'arrayOf',
                                                                                value: 'string',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(deg: number, ...colors: string[]) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'radialGradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colors',
                                                                        propType:
                                                                            {
                                                                                type: 'arrayOf',
                                                                                value: 'string',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(...colors: string[]) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'gradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'gradient',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                value: [
                                                                                    {
                                                                                        name: 'from',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'to',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'deg',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(gradient?: MantineGradient) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'smallerThan',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'breakpoint',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'largerThan',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'breakpoint',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'lighten',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'darken',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'radius',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'size',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(size?: MantineNumberSize) => string | number',
                                                            },
                                                        },
                                                        {
                                                            name: 'variant',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'payload',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                value: [
                                                                                    {
                                                                                        name: 'variant',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'object',
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
                                                                                        name: 'gradient',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'from',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'to',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'deg',
                                                                                                        propType:
                                                                                                            'number',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'primaryFallback',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(payload: VariantInput) => VariantOutput',
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryShade',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colorScheme',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOf',
                                                                                value: [
                                                                                    'dark',
                                                                                    'light',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(colorScheme?: ColorScheme) => Shade',
                                                            },
                                                        },
                                                        {
                                                            name: 'hover',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'hoverStyle',
                                                                        propType:
                                                                            {
                                                                                type: 'objectOf',
                                                                                value: 'oneOfType',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(hoverStyle: CSSObject) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryColor',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colorScheme',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOf',
                                                                                value: [
                                                                                    'dark',
                                                                                    'light',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(colorScheme?: ColorScheme) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'placeholderStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'dimmed',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => string',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'other',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'activeStyles',
                                                propType: {
                                                    type: 'objectOf',
                                                    isRequired: true,
                                                    value: 'oneOfType',
                                                },
                                            },
                                            {
                                                name: 'datesLocale',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'components',
                                                propType: {
                                                    type: 'objectOf',
                                                    isRequired: true,
                                                    value: 'shape',
                                                },
                                            },
                                            {
                                                name: 'globalStyles',
                                                propType: {
                                                    type: 'func',
                                                    isRequired: true,
                                                    params: [
                                                        {
                                                            name: 'theme',
                                                            propType: 'object',
                                                        },
                                                    ],
                                                    raw: '(theme: MantineTheme) => CSSObject',
                                                },
                                            },
                                            {
                                                name: 'focusRingStyles',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'styles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'resetStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'inputStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                            raw: '(theme: MantineTheme) => CSSObject',
                        },
                        {
                            type: 'arrayOf',
                            value: {
                                type: 'oneOfType',
                                value: [
                                    {
                                        type: 'objectOf',
                                        value: 'oneOfType',
                                    },
                                    {
                                        type: 'func',
                                        params: [
                                            {
                                                name: 'theme',
                                                propType: {
                                                    type: 'shape',
                                                    value: [
                                                        {
                                                            name: 'dir',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'ltr',
                                                                    'rtl',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryShade',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        type: 'shape',
                                                                        value: [
                                                                            {
                                                                                name: 'light',
                                                                                propType:
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        isRequired:
                                                                                            true,
                                                                                        value: [
                                                                                            0,
                                                                                            1,
                                                                                            2,
                                                                                            3,
                                                                                            4,
                                                                                            5,
                                                                                            6,
                                                                                            7,
                                                                                            8,
                                                                                            9,
                                                                                        ],
                                                                                    },
                                                                            },
                                                                            {
                                                                                name: 'dark',
                                                                                propType:
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        isRequired:
                                                                                            true,
                                                                                        value: [
                                                                                            0,
                                                                                            1,
                                                                                            2,
                                                                                            3,
                                                                                            4,
                                                                                            5,
                                                                                            6,
                                                                                            7,
                                                                                            8,
                                                                                            9,
                                                                                        ],
                                                                                    },
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'focusRing',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'auto',
                                                                    'always',
                                                                    'never',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'defaultRadius',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'number',
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            'xs',
                                                                            'sm',
                                                                            'md',
                                                                            'lg',
                                                                            'xl',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'loader',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'bars',
                                                                    'oval',
                                                                    'dots',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'colorScheme',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'dark',
                                                                    'light',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'white',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'black',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'colors',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'fontFamily',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'lineHeight',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'string',
                                                                    'number',
                                                                    'object',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'transitionTimingFunction',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            '-moz-initial',
                                                                            'inherit',
                                                                            'initial',
                                                                            'revert',
                                                                            'revert-layer',
                                                                            'unset',
                                                                            'ease',
                                                                            'ease-in',
                                                                            'ease-in-out',
                                                                            'ease-out',
                                                                            'step-end',
                                                                            'step-start',
                                                                            'linear',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fontFamilyMonospace',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'primaryColor',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
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
                                                            name: 'respectReducedMotion',
                                                            propType: {
                                                                type: 'bool',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'cursorType',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'default',
                                                                    'pointer',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'defaultGradient',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'from',
                                                                        propType:
                                                                            {
                                                                                type: 'string',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'to',
                                                                        propType:
                                                                            {
                                                                                type: 'string',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'deg',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fontSizes',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'radius',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'spacing',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'breakpoints',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'shadows',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'headings',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'fontFamily',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    'object',
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
                                                                        name: 'fontWeight',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    'object',
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
                                                                                            'bold',
                                                                                            'bolder',
                                                                                            'lighter',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'sizes',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'h1',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h2',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h3',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h4',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h5',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h6',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fn',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'fontStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'focusStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'selector',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(selector?: string) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'cover',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'offset',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(offset?: string | number) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'themeColor',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'shade',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                    {
                                                                                        name: 'primaryFallback',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                    {
                                                                                        name: 'useSplittedShade',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'rgba',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'linearGradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'deg',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                    {
                                                                                        name: 'colors',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'arrayOf',
                                                                                                value: 'string',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(deg: number, ...colors: string[]) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'radialGradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colors',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'arrayOf',
                                                                                                value: 'string',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(...colors: string[]) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'gradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'gradient',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'from',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'to',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'deg',
                                                                                                        propType:
                                                                                                            'number',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(gradient?: MantineGradient) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'smallerThan',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'breakpoint',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'largerThan',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'breakpoint',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'lighten',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'darken',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'radius',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'size',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(size?: MantineNumberSize) => string | number',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'variant',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'payload',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'variant',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'color',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                value: [
                                                                                                                    'object',
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
                                                                                                        name: 'gradient',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'shape',
                                                                                                                value: [
                                                                                                                    {
                                                                                                                        name: 'from',
                                                                                                                        propType:
                                                                                                                            {
                                                                                                                                type: 'string',
                                                                                                                                isRequired:
                                                                                                                                    true,
                                                                                                                            },
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'to',
                                                                                                                        propType:
                                                                                                                            {
                                                                                                                                type: 'string',
                                                                                                                                isRequired:
                                                                                                                                    true,
                                                                                                                            },
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'deg',
                                                                                                                        propType:
                                                                                                                            'number',
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'primaryFallback',
                                                                                                        propType:
                                                                                                            'bool',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(payload: VariantInput) => VariantOutput',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'primaryShade',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colorScheme',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOf',
                                                                                                value: [
                                                                                                    'dark',
                                                                                                    'light',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(colorScheme?: ColorScheme) => Shade',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'hover',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'hoverStyle',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'objectOf',
                                                                                                value: 'oneOfType',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(hoverStyle: CSSObject) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'primaryColor',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colorScheme',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOf',
                                                                                                value: [
                                                                                                    'dark',
                                                                                                    'light',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(colorScheme?: ColorScheme) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'placeholderStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'dimmed',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => string',
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'other',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'activeStyles',
                                                            propType: {
                                                                type: 'objectOf',
                                                                isRequired:
                                                                    true,
                                                                value: 'oneOfType',
                                                            },
                                                        },
                                                        {
                                                            name: 'datesLocale',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'components',
                                                            propType: {
                                                                type: 'objectOf',
                                                                isRequired:
                                                                    true,
                                                                value: 'shape',
                                                            },
                                                        },
                                                        {
                                                            name: 'globalStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                raw: '(theme: MantineTheme) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'focusRingStyles',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'styles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'resetStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'inputStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                        raw: '(theme: MantineTheme) => CSSObject',
                                    },
                                ],
                            },
                        },
                    ],
                },
                title: {
                    label: 'Sx',
                    tip: 'sx | undefined',
                },
            },
            {
                name: 'classNames',
                propType: 'object',
                title: {
                    label: 'ClassNames',
                    tip: 'classNames | undefined',
                },
            },
            {
                name: 'styles',
                propType: {
                    type: 'oneOfType',
                    value: ['object', 'func'],
                },
                title: {
                    label: 'Styles',
                    tip: 'styles | undefined',
                },
            },
            {
                name: 'unstyled',
                propType: 'bool',
                title: {
                    label: 'Unstyled',
                    tip: 'unstyled | undefined',
                },
            },
            {
                name: 'm',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'M',
                    tip: 'm | undefined',
                },
            },
            {
                name: 'my',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'My',
                    tip: 'my | undefined',
                },
            },
            {
                name: 'mx',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mx',
                    tip: 'mx | undefined',
                },
            },
            {
                name: 'mt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mt',
                    tip: 'mt | undefined',
                },
            },
            {
                name: 'mb',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mb',
                    tip: 'mb | undefined',
                },
            },
            {
                name: 'ml',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Ml',
                    tip: 'ml | undefined',
                },
            },
            {
                name: 'mr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mr',
                    tip: 'mr | undefined',
                },
            },
            {
                name: 'p',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'P',
                    tip: 'p | undefined',
                },
            },
            {
                name: 'py',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Py',
                    tip: 'py | undefined',
                },
            },
            {
                name: 'px',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Px',
                    tip: 'px | undefined',
                },
            },
            {
                name: 'pt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pt',
                    tip: 'pt | undefined',
                },
            },
            {
                name: 'pb',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pb',
                    tip: 'pb | undefined',
                },
            },
            {
                name: 'pl',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pl',
                    tip: 'pl | undefined',
                },
            },
            {
                name: 'pr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pr',
                    tip: 'pr | undefined',
                },
            },
            {
                name: 'bg',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Bg',
                    tip: 'bg | undefined',
                },
            },
            {
                name: 'c',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'C',
                    tip: 'c | undefined',
                },
            },
            {
                name: 'opacity',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Opacity',
                    tip: 'opacity | undefined',
                },
            },
            {
                name: 'ff',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Ff',
                    tip: 'ff | undefined',
                },
            },
            {
                name: 'fz',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Fz',
                    tip: 'fz | undefined',
                },
            },
            {
                name: 'fw',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                                'bold',
                                'bolder',
                                'lighter',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Fw',
                    tip: 'fw | undefined',
                },
            },
            {
                name: 'lts',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },

            },
            {
                name: 'ta',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'right',
                                'left',
                                'center',
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'end',
                                'justify',
                                'match-parent',
                                'start',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Ta',
                    tip: 'ta | undefined',
                },
            },
            {
                name: 'lh',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Lh',
                    tip: 'lh | undefined',
                },
            },
            {
                name: 'fs',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Fs',
                    tip: 'fs | undefined',
                },
            },
            {
                name: 'tt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
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
                    ],
                },
                title: {
                    label: 'Tt',
                    tip: 'tt | undefined',
                },
            },
            {
                name: 'td',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Td',
                    tip: 'td | undefined',
                },
            },
            {
                name: 'w',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'W',
                    tip: 'w | undefined',
                },
            },
            {
                name: 'miw',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Miw',
                    tip: 'miw | undefined',
                },
            },
            {
                name: 'maw',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Maw',
                    tip: 'maw | undefined',
                },
            },
            {
                name: 'h',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'H',
                    tip: 'h | undefined',
                },
            },
            {
                name: 'mih',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Mih',
                    tip: 'mih | undefined',
                },
            },
            {
                name: 'mah',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Mah',
                    tip: 'mah | undefined',
                },
            },
            {
                name: 'bgsz',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bgsz',
                    tip: 'bgsz | undefined',
                },
            },
            {
                name: 'bgp',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bgp',
                    tip: 'bgp | undefined',
                },
            },
            {
                name: 'bgr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Bgr',
                    tip: 'bgr | undefined',
                },
            },
            {
                name: 'bga',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Bga',
                    tip: 'bga | undefined',
                },
            },
            {
                name: 'pos',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
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
                title: {
                    label: 'Pos',
                    tip: 'pos | undefined',
                },
            },
            {
                name: 'top',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Top',
                    tip: 'top | undefined',
                },
            },
            {
                name: 'left',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '左',
                    tip: 'left | undefined',
                },
            },
            {
                name: 'bottom',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bottom',
                    tip: 'bottom | undefined',
                },
            },
            {
                name: 'right',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '右',
                    tip: 'right | undefined',
                },
            },
            {
                name: 'inset',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Inset',
                    tip: 'inset | undefined',
                },
            },
            {
                name: 'display',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'flex',
                                'grid',
                                'none',
                                'block',
                                'inline',
                                'run-in',
                                '-ms-flexbox',
                                '-ms-grid',
                                '-webkit-flex',
                                'flow',
                                'flow-root',
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
                    ],
                },
                title: {
                    label: 'Display',
                    tip: 'display | undefined',
                },
            },
        ],
        group: 'UI 组件',
        category: '遮罩',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: true,
            },
        },
        snippets: [
            {
                title: '浮动提示框',
                schema: {
                    componentName: 'MantineTooltip.Floating',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
