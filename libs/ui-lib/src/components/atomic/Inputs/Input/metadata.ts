import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineInput',
        title: '输入框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineInput',
            main: 'libs/components/src/components/atomic/Inputs/Input/component.tsx',
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
                title: '输入框',
                schema: {
                    componentName: 'MantineInput',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineInput.Wrapper',
        title: '输入框容器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineInput',
            main: 'libs/components/src/components/atomic/Inputs/Input/component.tsx',
            destructuring: true,
            subName: 'Wrapper',
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
                title: '输入框容器',
                schema: {
                    componentName: 'MantineInput.Wrapper',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineInput.Label',
        title: '输入框标签',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineInput',
            main: 'libs/components/src/components/atomic/Inputs/Input/component.tsx',
            destructuring: true,
            subName: 'Label',
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
                title: '输入框标签',
                schema: {
                    componentName: 'MantineInput.Label',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineInput.Description',
        title: '输入框描述',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineInput',
            main: 'libs/components/src/components/atomic/Inputs/Input/component.tsx',
            destructuring: true,
            subName: 'Description',
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
                title: '输入框描述',
                schema: {
                    componentName: 'MantineInput.Description',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineInput.Error',
        title: '输入框错误',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineInput',
            main: 'libs/components/src/components/atomic/Inputs/Input/component.tsx',
            destructuring: true,
            subName: 'Error',
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
                title: '输入框错误',
                schema: {
                    componentName: 'MantineInput.Error',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineInput.Placeholder',
        title: '输入框占位符',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineInput',
            main: 'libs/components/src/components/atomic/Inputs/Input/component.tsx',
            destructuring: true,
            subName: 'Placeholder',
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
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '输入框占位符',
                schema: {
                    componentName: 'MantineInput.Placeholder',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
