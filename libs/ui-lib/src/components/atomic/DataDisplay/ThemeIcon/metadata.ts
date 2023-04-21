import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineThemeIcon',
        title: '主题图标',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineThemeIcon',
            main: 'libs/components/src/components/atomic/DataDisplay/ThemeIcon/component.tsx',
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
                title: '主题图标',
                schema: {
                    componentName: 'MantineThemeIcon',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
