import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCalendar',
        title: 'Calendar',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCalendar',
            main: 'libs/components/src/components/atomic/Others/Calendar/component.tsx',
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
                style: true,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: 'Calendar',
                schema: {
                    componentName: 'MantineCalendar',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
