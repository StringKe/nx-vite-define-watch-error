import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDivider',
        title: '分割线',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDivider',
            main: 'libs/components/src/components/atomic/Misc/Divider/component.tsx',
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
                title: '分割线',
                schema: {
                    componentName: 'MantineDivider',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
