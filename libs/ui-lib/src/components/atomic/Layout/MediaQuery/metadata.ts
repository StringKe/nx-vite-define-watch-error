import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineMediaQuery',
        title: '媒体查询容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMediaQuery',
            main: 'libs/components/src/components/atomic/Layout/MediaQuery/component.tsx',
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
                style: false,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: '媒体查询容器',
                schema: {
                    componentName: 'MantineMediaQuery',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
