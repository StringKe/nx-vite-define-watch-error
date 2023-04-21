import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineColorSwatch',
        title: '颜色样本',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineColorSwatch',
            main: 'libs/components/src/components/atomic/DataDisplay/ColorSwatch/component.tsx',
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
                title: '颜色样本',
                schema: {
                    componentName: 'MantineColorSwatch',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
