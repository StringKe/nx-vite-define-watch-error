import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTransition',
        title: '过渡动画',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTransition',
            main: 'libs/components/src/components/atomic/Misc/Transition/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'keepMounted',
                propType: 'bool',
                title: {
                    label: 'KeepMounted',
                    tip: 'keepMounted | If set element will not be unmounted from the DOM when it is hidden, display: none styles will be added instead',
                },
            },
            {
                name: 'transition',
                propType: {
                    type: 'oneOfType',
                    isRequired: true,
                    value: [
                        {
                            type: 'shape',
                            value: [
                                {
                                    name: 'common',
                                    propType: 'object',
                                },
                                {
                                    name: 'in',
                                    propType: {
                                        type: 'object',
                                        isRequired: true,
                                    },
                                },
                                {
                                    name: 'out',
                                    propType: {
                                        type: 'object',
                                        isRequired: true,
                                    },
                                },
                                {
                                    name: 'transitionProperty',
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
                                                    'all',
                                                    'none',
                                                ],
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                        {
                            type: 'oneOf',
                            value: [
                                'fade',
                                'skew-up',
                                'skew-down',
                                'rotate-right',
                                'rotate-left',
                                'slide-down',
                                'slide-up',
                                'slide-right',
                                'slide-left',
                                'scale-y',
                                'scale-x',
                                'scale',
                                'pop',
                                'pop-top-left',
                                'pop-top-right',
                                'pop-bottom-left',
                                'pop-bottom-right',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Transition',
                    tip: 'transition | Predefined transition name or transition styles',
                },
            },
            {
                name: 'duration',
                propType: 'number',
                title: {
                    label: 'Duration',
                    tip: 'duration | Transition duration in ms',
                },
            },
            {
                name: 'exitDuration',
                propType: 'number',
                title: {
                    label: 'ExitDuration',
                    tip: 'exitDuration | Exit transition duration in ms',
                },
            },
            {
                name: 'timingFunction',
                propType: 'string',
                title: {
                    label: 'TimingFunction',
                    tip: 'timingFunction | Transition timing function, defaults to theme.transitionTimingFunction',
                },
            },
            {
                name: 'mounted',
                propType: {
                    type: 'bool',
                    isRequired: true,
                },
                title: {
                    label: 'Mounted',
                    tip: 'mounted | When true, component will be mounted',
                },
            },
            {
                name: 'children',
                propType: {
                    type: 'func',
                    isRequired: true,
                    params: [
                        {
                            name: 'styles',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(styles: CSSProperties) => ReactElement<any, any>',
                },
                title: {
                    label: '子元素',
                    tip: 'children | Render function with transition styles argument',
                },
            },
            {
                name: 'onExited',
                propType: 'func',
            },
            {
                name: 'onExit',
                propType: 'func',
                title: {
                    label: 'OnExit',
                    tip: 'onExit | Calls when exit transition starts',
                },
            },
            {
                name: 'onEnter',
                propType: 'func',
                title: {
                    label: 'OnEnter',
                    tip: 'onEnter | Calls when enter transition starts',
                },
            },
            {
                name: 'onEntered',
                propType: 'func',
                title: {
                    label: 'OnEntered',
                    tip: 'onEntered | Calls when enter transition ends',
                },
            },
        ],
        group: 'UI 组件',
        category: '杂项',
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
                title: '过渡动画',
                schema: {
                    componentName: 'MantineTransition',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
