import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAnchor',
        title: '锚点',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAnchor',
            main: 'libs/components/src/components/atomic/Navigation/Anchor/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '锚点',
                schema: {
                    componentName: 'MantineAnchor',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
