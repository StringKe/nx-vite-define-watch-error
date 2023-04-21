import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineStack',
        title: '垂直容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineStack',
            main: 'libs/components/src/components/atomic/Layout/Stack/component.tsx',
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
                title: '垂直容器',
                schema: {
                    componentName: 'MantineStack',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
