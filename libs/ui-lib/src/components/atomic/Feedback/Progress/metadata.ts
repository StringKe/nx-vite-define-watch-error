import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineProgress',
        title: '进度条',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineProgress',
            main: 'libs/components/src/components/atomic/Feedback/Progress/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '反馈',
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
                title: '进度条',
                schema: {
                    componentName: 'MantineProgress',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
