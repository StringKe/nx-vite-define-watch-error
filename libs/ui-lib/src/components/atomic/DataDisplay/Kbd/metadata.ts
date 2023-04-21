import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineKbd',
        title: '键盘样式',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineKbd',
            main: 'libs/components/src/components/atomic/DataDisplay/Kbd/component.tsx',
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
                title: '键盘样式',
                schema: {
                    componentName: 'MantineKbd',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
