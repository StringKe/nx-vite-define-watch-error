import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineText',
        title: '文本',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineText',
            main: 'libs/components/src/components/atomic/Typography/Text/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '排版',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: true,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: '文本',
                schema: {
                    componentName: 'MantineText',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
