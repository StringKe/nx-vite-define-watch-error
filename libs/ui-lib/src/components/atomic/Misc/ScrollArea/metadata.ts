import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineScrollArea',
        title: '滚动区域',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineScrollArea',
            main: 'libs/components/src/components/atomic/Misc/ScrollArea/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '杂项',
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
                title: '滚动区域',
                schema: {
                    componentName: 'MantineScrollArea',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineScrollArea.Autosize',
        title: '自动调整大小的滚动区域',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineScrollArea',
            main: 'libs/components/src/components/atomic/Misc/ScrollArea/component.tsx',
            destructuring: true,
            subName: 'Autosize',
        },
        group: 'UI 组件',
        category: '杂项',
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
                title: '自动调整大小的滚动区域',
                schema: {
                    componentName: 'MantineScrollArea.Autosize',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
