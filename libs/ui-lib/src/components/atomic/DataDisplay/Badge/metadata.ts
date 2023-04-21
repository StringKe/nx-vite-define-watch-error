import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineBadge',
        title: '徽标',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineBadge',
            main: 'libs/components/src/components/atomic/DataDisplay/Badge/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '徽标',
                schema: {
                    componentName: 'MantineBadge',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
