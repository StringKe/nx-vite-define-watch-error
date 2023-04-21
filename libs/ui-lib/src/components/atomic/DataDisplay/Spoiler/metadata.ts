import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineSpoiler',
        title: '隐藏内容',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineSpoiler',
            main: 'libs/components/src/components/atomic/DataDisplay/Spoiler/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '隐藏内容',
                schema: {
                    componentName: 'MantineSpoiler',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
