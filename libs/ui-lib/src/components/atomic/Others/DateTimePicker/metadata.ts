import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDateTimePicker',
        title: 'DateTimePicker',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDateTimePicker',
            main: 'libs/components/src/components/atomic/Others/DateTimePicker/component.tsx',
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
                title: 'DateTimePicker',
                schema: {
                    componentName: 'MantineDateTimePicker',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
