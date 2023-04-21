import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineYearPickerInput',
        title: 'YearPickerInput',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineYearPickerInput',
            main: 'libs/components/src/components/atomic/Others/YearPickerInput/component.tsx',
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
                title: 'YearPickerInput',
                schema: {
                    componentName: 'MantineYearPickerInput',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
