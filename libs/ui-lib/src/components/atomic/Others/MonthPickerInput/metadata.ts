import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineMonthPickerInput',
        title: 'MonthPickerInput',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMonthPickerInput',
            main: 'libs/components/src/components/atomic/Others/MonthPickerInput/component.tsx',
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
                title: 'MonthPickerInput',
                schema: {
                    componentName: 'MantineMonthPickerInput',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
