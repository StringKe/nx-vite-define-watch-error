import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCopyButton',
        title: '复制按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCopyButton',
            main: 'libs/components/src/components/atomic/Buttons/CopyButton/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'children',
                propType: {
                    type: 'func',
                    isRequired: true,
                    params: [
                        {
                            name: 'payload',
                            propType: {
                                type: 'shape',
                                value: [
                                    {
                                        name: 'copied',
                                        propType: {
                                            type: 'bool',
                                            isRequired: true,
                                        },
                                    },
                                    {
                                        name: 'copy',
                                        propType: {
                                            type: 'func',
                                            isRequired: true,
                                            raw: '() => void',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(payload: { copied: boolean; copy(): void; }) => ReactNode',
                },
                title: {
                    label: '子元素',
                    tip: 'children | Function called with current status',
                },
            },
            {
                name: 'value',
                propType: {
                    type: 'string',
                    isRequired: true,
                },
                title: {
                    label: 'Value',
                    tip: 'value | Value that should be copied to the clipboard',
                },
            },
            {
                name: 'timeout',
                propType: 'number',
            },
        ],
        group: 'UI 组件',
        category: '按钮',
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
                title: '复制按钮',
                schema: {
                    componentName: 'MantineCopyButton',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
