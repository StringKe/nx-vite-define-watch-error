import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTimeInput',
        title: 'TimeInput',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTimeInput',
            main: 'libs/components/src/components/atomic/Others/TimeInput/component.tsx',
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
                title: 'TimeInput',
                schema: {
                    componentName: 'MantineTimeInput',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
