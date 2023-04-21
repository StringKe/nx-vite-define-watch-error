import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDatePickerInput',
        title: 'DatePickerInput',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDatePickerInput',
            main: 'libs/components/src/components/atomic/Others/DatePickerInput/component.tsx',
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
                title: 'DatePickerInput',
                schema: {
                    componentName: 'MantineDatePickerInput',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
