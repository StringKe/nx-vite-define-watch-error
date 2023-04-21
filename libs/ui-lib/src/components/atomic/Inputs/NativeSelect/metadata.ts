import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineNativeSelect',
        title: '原生选择框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineNativeSelect',
            main: 'libs/components/src/components/atomic/Inputs/NativeSelect/component.tsx',
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
                title: '原生选择框',
                schema: {
                    componentName: 'MantineNativeSelect',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
