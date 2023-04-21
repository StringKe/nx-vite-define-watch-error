import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDatePicker',
        title: 'DatePicker',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDatePicker',
            main: 'libs/components/src/components/atomic/Others/DatePicker/component.tsx',
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
                title: 'DatePicker',
                schema: {
                    componentName: 'MantineDatePicker',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
