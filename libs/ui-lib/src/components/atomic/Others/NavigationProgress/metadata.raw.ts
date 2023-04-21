import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineNavigationProgress',
        title: 'NavigationProgress',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineNavigationProgress',
            main: 'libs/components/src/components/atomic/Others/NavigationProgress/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'initialProgress',
                propType: 'number',
                title: {
                    label: 'InitialProgress',
                    tip: 'initialProgress | The default progress',
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
                    tip: 'color | Key of theme.colors of any other valid CSS color',
                },
            },
            {
                name: 'size',
                propType: 'number',
                title: {
                    label: '大小',
                    tip: 'size | Height of the progressbar',
                },
            },
            {
                name: 'onFinish',
                propType: {
                    type: 'func',
                    raw: '() => void',
                },
                title: {
                    label: 'OnFinish',
                    tip: 'onFinish | Called when the progressbar reaches 100%',
                },
            },
            {
                name: 'autoReset',
                propType: 'bool',
                title: {
                    label: 'AutoReset',
                    tip: 'autoReset | Determines whether progress should be automatically reset when 100% is reached',
                },
            },
            {
                name: 'stepInterval',
                propType: 'number',
                title: {
                    label: 'StepInterval',
                    tip: 'stepInterval | Step interval in ms',
                },
            },
            {
                name: 'transitionDuration',
                propType: 'number',
                title: {
                    label: 'TransitionDuration',
                    tip: 'transitionDuration | Transition duration in ms',
                },
            },
            {
                name: 'exitTimeout',
                propType: 'number',
                title: {
                    label: 'ExitTimeout',
                    tip: 'exitTimeout | Number of ms that should elapse before progressbar is hidden after reaching 100%',
                },
            },
            {
                name: 'exitTransitionDuration',
                propType: 'number',
                title: {
                    label: 'ExitTransitionDuration',
                    tip: 'exitTransitionDuration | Exit transition duration in ms',
                },
            },
            {
                name: 'withinPortal',
                propType: 'bool',
                title: {
                    label: 'WithinPortal',
                    tip: 'withinPortal | Determines whether progressbar should be rendered within Portal, defaults to true',
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
                name: 'zIndex',
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
                                'auto',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'ZIndex',
                    tip: 'zIndex | Progressbar z-index',
                },
            },
            {
                name: 'progressLabel',
                propType: 'string',
            },
        ],
        group: 'UI 组件',
        category: 'Others',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: false,
            },
        },
        snippets: [
            {
                title: 'NavigationProgress',
                schema: {
                    componentName: 'MantineNavigationProgress',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
