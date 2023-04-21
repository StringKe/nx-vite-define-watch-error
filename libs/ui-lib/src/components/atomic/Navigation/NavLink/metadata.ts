import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineNavLink',
        title: '导航链接',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineNavLink',
            main: 'libs/components/src/components/atomic/Navigation/NavLink/component.tsx',
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
                title: '导航链接',
                schema: {
                    componentName: 'MantineNavLink',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
