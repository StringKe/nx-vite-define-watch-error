import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTable',
        title: '表格',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTable',
            main: 'libs/components/src/components/atomic/Typography/Table/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '排版',
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
                title: '表格',
                schema: {
                    componentName: 'MantineTable',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
