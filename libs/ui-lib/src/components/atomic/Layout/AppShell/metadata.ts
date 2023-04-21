import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAppShell',
        title: '应用外壳',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAppShell',
            main: 'libs/components/src/components/atomic/Layout/AppShell/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '布局',
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
                title: '应用外壳',
                schema: {
                    componentName: 'MantineAppShell',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
