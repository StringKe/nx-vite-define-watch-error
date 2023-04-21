import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineBreadcrumbs',
        title: '面包屑',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineBreadcrumbs',
            main: 'libs/components/src/components/atomic/Navigation/Breadcrumbs/component.tsx',
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
                title: '面包屑',
                schema: {
                    componentName: 'MantineBreadcrumbs',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
