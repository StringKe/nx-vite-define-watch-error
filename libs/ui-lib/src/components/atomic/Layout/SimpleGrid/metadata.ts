import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineSimpleGrid',
        title: '网格容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineSimpleGrid',
            main: 'libs/components/src/components/atomic/Layout/SimpleGrid/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '布局',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: true,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: '网格容器',
                schema: {
                    componentName: 'MantineSimpleGrid',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
