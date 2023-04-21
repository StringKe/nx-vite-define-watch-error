import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAspectRatio',
        title: '宽高比容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAspectRatio',
            main: 'libs/components/src/components/atomic/Layout/AspectRatio/component.tsx',
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
                title: '宽高比容器',
                schema: {
                    componentName: 'MantineAspectRatio',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
