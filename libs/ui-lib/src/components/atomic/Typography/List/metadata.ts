import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineList',
        title: '列表',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineList',
            main: 'libs/components/src/components/atomic/Typography/List/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '排版',
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
                title: '列表',
                schema: {
                    componentName: 'MantineList',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineList.Item',
        title: '列表项',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineList',
            main: 'libs/components/src/components/atomic/Typography/List/component.tsx',
            destructuring: true,
            subName: 'Item',
        },
        group: 'UI 组件',
        category: '排版',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: true,
            },
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '列表项',
                schema: {
                    componentName: 'MantineList.Item',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
