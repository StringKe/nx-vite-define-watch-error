import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTypographyStylesProvider',
        title: '字体样式提供者',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTypographyStylesProvider',
            main: 'libs/components/src/components/atomic/Typography/TypographyStylesProvider/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '排版',
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
                title: '字体样式提供者',
                schema: {
                    componentName: 'MantineTypographyStylesProvider',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
