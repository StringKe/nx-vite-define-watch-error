import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineMultiSelect',
        title: '多选框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMultiSelect',
            main: 'libs/components/src/components/atomic/Inputs/MultiSelect/component.tsx',
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
                title: '多选框',
                schema: {
                    componentName: 'MantineMultiSelect',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
