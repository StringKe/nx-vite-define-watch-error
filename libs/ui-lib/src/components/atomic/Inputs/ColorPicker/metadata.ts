import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineColorPicker',
        title: '颜色选择器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineColorPicker',
            main: 'libs/components/src/components/atomic/Inputs/ColorPicker/component.tsx',
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
                title: '颜色选择器',
                schema: {
                    componentName: 'MantineColorPicker',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
