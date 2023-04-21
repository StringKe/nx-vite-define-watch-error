import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAlert',
        title: '警告',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAlert',
            main: 'libs/components/src/components/atomic/Feedback/Alert/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '反馈',
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
                title: '警告',
                schema: {
                    componentName: 'MantineAlert',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
