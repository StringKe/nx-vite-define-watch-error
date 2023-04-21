import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineFileButton',
        title: '文件按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineFileButton',
            main: 'libs/components/src/components/atomic/Buttons/FileButton/component.tsx',
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
                title: '文件按钮',
                schema: {
                    componentName: 'MantineFileButton',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
