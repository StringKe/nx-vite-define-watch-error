import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineFileButton',
        title: '文件按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineFileButton',
            main: 'libs/components/src/components/atomic/Buttons/FileButton/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'onChange',
                propType: {
                    type: 'func',
                    isRequired: true,
                    params: [
                        {
                            name: 'payload',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(payload: Multiple extends true ? File[] : File) => void',
                },
                title: {
                    label: 'OnChange',
                    tip: 'onChange | Called when files are picked',
                },
            },
            {
                name: 'children',
                propType: {
                    type: 'func',
                    isRequired: true,
                    params: [
                        {
                            name: 'props',
                            propType: {
                                type: 'shape',
                                value: [
                                    {
                                        name: 'onClick',
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
                    raw: '(props: { onClick(): void; }) => ReactNode',
                },
                title: {
                    label: '子元素',
                    tip: 'children | Function that receives button props and returns react node that should be rendered',
                },
            },
            {
                name: 'multiple',
                propType: 'object',
                title: {
                    label: 'Multiple',
                    tip: 'multiple | Determines whether user can pick more than one file',
                },
            },
            {
                name: 'accept',
                propType: 'string',
                title: {
                    label: 'Accept',
                    tip: 'accept | File input accept attribute, for example, "image/png,image/jpeg"',
                },
            },
            {
                name: 'name',
                propType: 'string',
                title: {
                    label: 'Name',
                    tip: 'name | Input name attribute',
                },
            },
            {
                name: 'form',
                propType: 'string',
                title: {
                    label: 'Form',
                    tip: 'form | Input form attribute',
                },
            },
            {
                name: 'resetRef',
                propType: {
                    type: 'oneOfType',
                    value: ['func', 'object'],
                },
                title: {
                    label: 'ResetRef',
                    tip: 'resetRef | Function that should be called when value changes to null or empty array',
                },
            },
            {
                name: 'disabled',
                propType: 'bool',
                title: {
                    label: 'Disabled',
                    tip: 'disabled | Disables file picker',
                },
            },
            {
                name: 'capture',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'bool',
                        {
                            type: 'oneOf',
                            value: ['user', 'environment'],
                        },
                    ],
                },
            },
            {
                name: 'inputProps',
                propType: 'object',
                title: {
                    label: 'InputProps',
                    tip: 'inputProps | Spreads props to input element used to capture files',
                },
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
                title: '文件按钮',
                schema: {
                    componentName: 'MantineFileButton',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
