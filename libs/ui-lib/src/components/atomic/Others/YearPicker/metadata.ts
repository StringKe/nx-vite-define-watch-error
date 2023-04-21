import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineYearPicker',
        title: 'YearPicker',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineYearPicker',
            main: 'libs/components/src/components/atomic/Others/YearPicker/component.tsx',
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
                title: 'YearPicker',
                schema: {
                    componentName: 'MantineYearPicker',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
