import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineModalsProvider',
        title: 'ModalsProvider',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModalsProvider',
            main: 'libs/components/src/components/atomic/Others/ModalsProvider/component.tsx',
            destructuring: true,
            subName: '',
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
                    tip: 'children | Your app',
                },
            },
            {
                name: 'modals',
                propType: {
                    type: 'objectOf',
                    value: 'object',
                },
                title: {
                    label: 'Modals',
                    tip: 'modals | Predefined modals',
                },
            },
            {
                name: 'modalProps',
                propType: 'object',
            },
            {
                name: 'labels',
                propType: 'object',
                title: {
                    label: 'Labels',
                    tip: 'labels | Confirm modal labels',
                },
            },
        ],
        group: 'UI 组件',
        category: 'Others',
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
                title: 'ModalsProvider',
                schema: {
                    componentName: 'MantineModalsProvider',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
