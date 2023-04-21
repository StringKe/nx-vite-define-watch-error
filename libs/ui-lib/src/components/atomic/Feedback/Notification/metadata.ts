import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineNotification',
        title: '通知',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineNotification',
            main: 'libs/components/src/components/atomic/Feedback/Notification/component.tsx',
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
                title: '通知',
                schema: {
                    componentName: 'MantineNotification',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
