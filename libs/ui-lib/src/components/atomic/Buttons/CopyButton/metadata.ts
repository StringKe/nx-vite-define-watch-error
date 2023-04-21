import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCopyButton',
        title: '复制按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCopyButton',
            main: 'libs/components/src/components/atomic/Buttons/CopyButton/component.tsx',
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
                style: false,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: '复制按钮',
                schema: {
                    componentName: 'MantineCopyButton',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
