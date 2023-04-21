import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineFlex',
        title: '弹性盒容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineFlex',
            main: 'libs/components/src/components/atomic/Layout/Flex/component.tsx',
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
                title: '弹性盒容器',
                schema: {
                    componentName: 'MantineFlex',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
