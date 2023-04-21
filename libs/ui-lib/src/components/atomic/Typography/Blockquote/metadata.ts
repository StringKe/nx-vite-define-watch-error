import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineBlockquote',
        title: '引用',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineBlockquote',
            main: 'libs/components/src/components/atomic/Typography/Blockquote/component.tsx',
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
                title: '引用',
                schema: {
                    componentName: 'MantineBlockquote',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
