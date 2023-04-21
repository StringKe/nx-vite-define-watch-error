import { defaultMetaData } from '../../../default.meta'

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
        group: 'UI 组件',
        category: 'Others',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: false,
            },
            props: [...defaultMetaData],
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
