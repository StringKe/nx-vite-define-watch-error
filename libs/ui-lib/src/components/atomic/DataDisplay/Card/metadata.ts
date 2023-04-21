import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCard',
        title: '卡片容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCard',
            main: 'libs/components/src/components/atomic/DataDisplay/Card/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '卡片容器',
                schema: {
                    componentName: 'MantineCard',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineCard.Section',
        title: '卡片分区',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCard',
            main: 'libs/components/src/components/atomic/DataDisplay/Card/component.tsx',
            destructuring: true,
            subName: 'Section',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '卡片分区',
                schema: {
                    componentName: 'MantineCard.Section',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
