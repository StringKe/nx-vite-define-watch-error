import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantinePinInput',
        title: 'Pin输入框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePinInput',
            main: 'libs/components/src/components/atomic/Inputs/PinInput/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'name',
                propType: 'string',
                title: {
                    label: 'Name',
                    tip: 'name | Hidden input name attribute',
                },
            },
            {
                name: 'form',
                propType: 'string',
                title: {
                    label: 'Form',
                    tip: 'form | Hidden input form attribute',
                },
            },
            {
                name: 'spacing',
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
                    label: 'Spacing',
                    tip: 'spacing | Key of theme.spacing or any valid CSS value to set spacing between inputs',
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
                name: 'size',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: '大小',
                    tip: 'size | Input width and height',
                },
            },
            {
                name: 'autoFocus',
                propType: 'bool',
                title: {
                    label: 'AutoFocus',
                    tip: 'autoFocus | If set, first input is focused when component is mounted',
                },
            },
            {
                name: 'value',
                propType: 'string',
                title: {
                    label: 'Value',
                    tip: 'value | Value for controlled component',
                },
            },
            {
                name: 'defaultValue',
                propType: 'string',
                title: {
                    label: 'DefaultValue',
                    tip: 'defaultValue | Default value for uncontrolled component',
                },
            },
            {
                name: 'onChange',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'value',
                            propType: 'string',
                        },
                    ],
                    raw: '(value: string) => void',
                },
                title: {
                    label: 'OnChange',
                    tip: 'onChange | Called when value changes',
                },
            },
            {
                name: 'onComplete',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'value',
                            propType: 'string',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(value: string) => void',
                },
                title: {
                    label: 'OnComplete',
                    tip: 'onComplete | Called when user enters value to all inputs',
                },
            },
            {
                name: 'placeholder',
                propType: 'string',
                title: {
                    label: 'Placeholder',
                    tip: 'placeholder | Placeholder for every input field',
                },
            },
            {
                name: 'manageFocus',
                propType: 'bool',
                title: {
                    label: 'ManageFocus',
                    tip: 'manageFocus | Determines whether focus should be moved automatically to the next input once filled',
                },
            },
            {
                name: 'oneTimeCode',
                propType: 'bool',
                title: {
                    label: 'OneTimeCode',
                    tip: 'oneTimeCode | Determines whether autocomplete="one-time-code" attribute should be set on all inputs',
                },
            },
            {
                name: 'id',
                propType: 'string',
                title: {
                    label: 'Id',
                    tip: 'id | The top-level id that is used as a base in all input fields',
                },
            },
            {
                name: 'disabled',
                propType: 'bool',
                title: {
                    label: 'Disabled',
                    tip: 'disabled | Sets inputs disabled attribute',
                },
            },
            {
                name: 'error',
                propType: 'bool',
                title: {
                    label: 'Error',
                    tip: 'error | Adds error styles to all inputs',
                },
            },
            {
                name: 'type',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: ['number', 'alphanumeric'],
                        },
                    ],
                },
                title: {
                    label: '类型',
                    tip: 'type | The type of allowed values',
                },
            },
            {
                name: 'mask',
                propType: 'bool',
                title: {
                    label: 'Mask',
                    tip: 'mask | Changes input type to "password"',
                },
            },
            {
                name: 'length',
                propType: 'number',
                title: {
                    label: 'Length',
                    tip: 'length | Number of input boxes',
                },
            },
            {
                name: 'readOnly',
                propType: 'bool',
                title: {
                    label: 'ReadOnly',
                    tip: 'readOnly | Determines whether the user can edit input content',
                },
            },
            {
                name: 'inputType',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'number',
                                'button',
                                'checkbox',
                                'color',
                                'date',
                                'datetime-local',
                                'email',
                                'file',
                                'hidden',
                                'image',
                                'month',
                                'password',
                                'radio',
                                'range',
                                'reset',
                                'search',
                                'submit',
                                'tel',
                                'text',
                                'time',
                                'url',
                                'week',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Input类型',
                    tip: 'inputType | Inputs type attribute, inferred from type prop if not specified',
                },
            },
            {
                name: 'inputMode',
                propType: {
                    type: 'oneOf',
                    value: [
                        'email',
                        'search',
                        'tel',
                        'text',
                        'url',
                        'none',
                        'numeric',
                        'decimal',
                    ],
                },
                title: {
                    label: 'InputMode',
                    tip: 'inputMode | inputmode attr, inferred from type prop if not specified',
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
                                                                raw: '(theme: Pick<MantineTheme, "spacing" | "radius" | "fontFamily" | "lineHeight" | "black" | "white" | "colorScheme" | "transitionTimingFunction" | "dir" | "primaryShade" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                raw: '(theme: Pick<MantineTheme, "spacing" | "radius" | "fontFamily" | "lineHeight" | "black" | "white" | "colorScheme" | "transitionTimingFunction" | "dir" | "primaryShade" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                raw: '(theme: Pick<MantineTheme, "spacing" | "radius" | "fontFamily" | "lineHeight" | "black" | "white" | "colorScheme" | "transitionTimingFunction" | "dir" | "primaryShade" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                                raw: '(theme: Pick<MantineTheme, "spacing" | "radius" | "fontFamily" | "lineHeight" | "black" | "white" | "colorScheme" | "transitionTimingFunction" | "dir" | "primaryShade" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                                raw: '(theme: Pick<MantineTheme, "spacing" | "radius" | "fontFamily" | "lineHeight" | "black" | "white" | "colorScheme" | "transitionTimingFunction" | "dir" | "primaryShade" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                                raw: '(theme: Pick<MantineTheme, "spacing" | "radius" | "fontFamily" | "lineHeight" | "black" | "white" | "colorScheme" | "transitionTimingFunction" | "dir" | "primaryShade" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                'bold',
                                'normal',
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
                                'none',
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
                                'none',
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
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
                    ],
                },
                title: {
                    label: 'Display',
                    tip: 'display | undefined',
                },
            },
            {
                name: 'icon',
                propType: 'node',
                title: {
                    label: '图标',
                    tip: 'icon | Adds icon on the left side of input',
                },
            },
            {
                name: 'iconWidth',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '图标Width',
                    tip: 'iconWidth | Width of icon section',
                },
            },
            {
                name: 'rightSection',
                propType: 'node',
                title: {
                    label: '右Section',
                    tip: 'rightSection | Right section of input, similar to icon but on the right',
                },
            },
            {
                name: 'rightSectionWidth',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '右SectionWidth',
                    tip: 'rightSectionWidth | Width of right section, is used to calculate input padding-right',
                },
            },
            {
                name: 'rightSectionProps',
                propType: 'object',
                title: {
                    label: '右SectionProps',
                    tip: 'rightSectionProps | Props spread to rightSection div element',
                },
            },
            {
                name: 'wrapperProps',
                propType: 'object',
                title: {
                    label: 'WrapperProps',
                    tip: 'wrapperProps | Properties spread to root element',
                },
            },
            {
                name: 'required',
                propType: 'bool',
                title: {
                    label: 'Required',
                    tip: 'required | Sets required on input element',
                },
            },
            {
                name: 'variant',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: ['unstyled', 'default', 'filled'],
                        },
                    ],
                },
                title: {
                    label: 'Variant',
                    tip: 'variant | Defines input appearance, defaults to default in light color scheme and filled in dark',
                },
            },
            {
                name: 'ref',
                propType: {
                    type: 'oneOfType',
                    value: [
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'instance',
                                    propType: 'object',
                                },
                            ],
                            returns: {
                                propType: 'number',
                            },
                            raw: '(instance: HTMLDivElement) => void',
                        },
                        'object',
                    ],
                },
            },
            {
                name: 'key',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
                title: {
                    label: 'Key',
                    tip: 'key | undefined',
                },
            },
        ],
        group: 'UI 组件',
        category: '输入框',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: true,
            },
        },
        snippets: [
            {
                title: 'Pin输入框',
                schema: {
                    componentName: 'MantinePinInput',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]