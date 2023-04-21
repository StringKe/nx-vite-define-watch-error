import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDateInput',
        title: 'DateInput',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDateInput',
            main: 'libs/components/src/components/atomic/Others/DateInput/component.tsx',
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
                title: 'DateInput',
                schema: {
                    componentName: 'MantineDateInput',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
