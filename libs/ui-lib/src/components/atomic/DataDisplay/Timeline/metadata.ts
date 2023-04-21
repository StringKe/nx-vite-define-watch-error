import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTimeline',
        title: '时间轴',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTimeline',
            main: 'libs/components/src/components/atomic/DataDisplay/Timeline/component.tsx',
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
                title: '时间轴',
                schema: {
                    componentName: 'MantineTimeline',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTimeline.Item',
        title: '时间轴项',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTimeline',
            main: 'libs/components/src/components/atomic/DataDisplay/Timeline/component.tsx',
            destructuring: true,
            subName: 'Item',
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
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '时间轴项',
                schema: {
                    componentName: 'MantineTimeline.Item',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
