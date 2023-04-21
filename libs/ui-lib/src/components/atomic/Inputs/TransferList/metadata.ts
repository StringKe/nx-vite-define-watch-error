import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTransferList',
        title: '转移列表',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTransferList',
            main: 'libs/components/src/components/atomic/Inputs/TransferList/component.tsx',
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
                title: '转移列表',
                schema: {
                    componentName: 'MantineTransferList',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
