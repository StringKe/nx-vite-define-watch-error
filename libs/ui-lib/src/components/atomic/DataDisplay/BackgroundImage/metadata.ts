import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineBackgroundImage',
        title: '背景图片',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineBackgroundImage',
            main: 'libs/components/src/components/atomic/DataDisplay/BackgroundImage/component.tsx',
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
                title: '背景图片',
                schema: {
                    componentName: 'MantineBackgroundImage',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
