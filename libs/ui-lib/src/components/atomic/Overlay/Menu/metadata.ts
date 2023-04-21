import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineMenu',
        title: '菜单',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMenu',
            main: 'libs/components/src/components/atomic/Overlay/Menu/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '遮罩',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: false,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: '菜单',
                schema: {
                    componentName: 'MantineMenu',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineMenu.Item',
        title: '菜单项',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMenu',
            main: 'libs/components/src/components/atomic/Overlay/Menu/component.tsx',
            destructuring: true,
            subName: 'Item',
        },
        group: 'UI 组件',
        category: '遮罩',
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
                title: '菜单项',
                schema: {
                    componentName: 'MantineMenu.Item',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineMenu.Label',
        title: '菜单标签',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMenu',
            main: 'libs/components/src/components/atomic/Overlay/Menu/component.tsx',
            destructuring: true,
            subName: 'Label',
        },
        group: 'UI 组件',
        category: '遮罩',
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
                title: '菜单标签',
                schema: {
                    componentName: 'MantineMenu.Label',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineMenu.Dropdown',
        title: '菜单下拉',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMenu',
            main: 'libs/components/src/components/atomic/Overlay/Menu/component.tsx',
            destructuring: true,
            subName: 'Dropdown',
        },
        group: 'UI 组件',
        category: '遮罩',
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
                title: '菜单下拉',
                schema: {
                    componentName: 'MantineMenu.Dropdown',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineMenu.Target',
        title: '菜单目标',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMenu',
            main: 'libs/components/src/components/atomic/Overlay/Menu/component.tsx',
            destructuring: true,
            subName: 'Target',
        },
        group: 'UI 组件',
        category: '遮罩',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: false,
            },
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '菜单目标',
                schema: {
                    componentName: 'MantineMenu.Target',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineMenu.Divider',
        title: '菜单分隔符',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineMenu',
            main: 'libs/components/src/components/atomic/Overlay/Menu/component.tsx',
            destructuring: true,
            subName: 'Divider',
        },
        group: 'UI 组件',
        category: '遮罩',
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
                title: '菜单分隔符',
                schema: {
                    componentName: 'MantineMenu.Divider',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
