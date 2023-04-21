import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCloseButton',
        title: '关闭按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCloseButton',
            main: 'libs/components/src/components/atomic/Buttons/CloseButton/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '按钮',
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
                title: '关闭按钮',
                schema: {
                    componentName: 'MantineCloseButton',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
