import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCollapse',
        title: '折叠',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCollapse',
            main: 'libs/components/src/components/atomic/Misc/Collapse/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '杂项',
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
                title: '折叠',
                schema: {
                    componentName: 'MantineCollapse',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
