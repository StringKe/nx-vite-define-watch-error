import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTextarea',
        title: '长文本输入框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTextarea',
            main: 'libs/components/src/components/atomic/Inputs/Textarea/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '输入框',
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
                title: '长文本输入框',
                schema: {
                    componentName: 'MantineTextarea',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
