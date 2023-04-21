import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineBox',
        title: '盒子',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineBox',
            main: 'libs/components/src/components/atomic/Misc/Box/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '杂项',
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
                title: '盒子',
                schema: {
                    componentName: 'MantineBox',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
