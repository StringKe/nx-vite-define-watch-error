import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineMark',
        title: '标记',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMark',
            main: 'libs/components/src/components/atomic/Typography/Mark/component.tsx',
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
                title: '标记',
                schema: {
                    componentName: 'MantineMark',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
