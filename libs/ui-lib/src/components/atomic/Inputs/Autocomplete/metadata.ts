import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAutocomplete',
        title: '自动完成',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAutocomplete',
            main: 'libs/components/src/components/atomic/Inputs/Autocomplete/component.tsx',
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
                title: '自动完成',
                schema: {
                    componentName: 'MantineAutocomplete',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
