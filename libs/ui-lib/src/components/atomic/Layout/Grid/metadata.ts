import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineGrid',
        title: '网格容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineGrid',
            main: 'libs/components/src/components/atomic/Layout/Grid/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '布局',
        configure: {
            component: {
                isContainer: true,
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
                    componentName: 'MantineGrid',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineGrid.Col',
        title: '网格列',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineGrid',
            main: 'libs/components/src/components/atomic/Layout/Grid/component.tsx',
            destructuring: true,
            subName: 'Col',
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
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '网格列',
                schema: {
                    componentName: 'MantineGrid.Col',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
