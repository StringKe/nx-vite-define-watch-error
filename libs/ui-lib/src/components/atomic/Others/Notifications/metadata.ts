import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineNotifications',
        title: 'Notifications',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineNotifications',
            main: 'libs/components/src/components/atomic/Others/Notifications/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: 'Others',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: false,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: 'Notifications',
                schema: {
                    componentName: 'MantineNotifications',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
