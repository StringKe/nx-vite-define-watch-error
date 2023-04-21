import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineActionIcon',
        title: '操作图标',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineActionIcon',
            main: 'libs/components/src/components/atomic/Buttons/ActionIcon/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '按钮',
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
                title: '操作图标',
                schema: {
                    componentName: 'MantineActionIcon',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
