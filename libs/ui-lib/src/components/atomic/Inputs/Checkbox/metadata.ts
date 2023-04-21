import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCheckbox',
        title: '复选框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCheckbox',
            main: 'libs/components/src/components/atomic/Inputs/Checkbox/component.tsx',
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
                title: '复选框',
                schema: {
                    componentName: 'MantineCheckbox',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineCheckbox.Group',
        title: '复选框组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCheckbox',
            main: 'libs/components/src/components/atomic/Inputs/Checkbox/component.tsx',
            destructuring: true,
            subName: 'Group',
        },
        group: 'UI 组件',
        category: '输入框',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: true,
            },
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '复选框组',
                schema: {
                    componentName: 'MantineCheckbox.Group',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
