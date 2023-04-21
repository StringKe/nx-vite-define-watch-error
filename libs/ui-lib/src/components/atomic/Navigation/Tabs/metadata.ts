import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTabs',
        title: '标签页',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTabs',
            main: 'libs/components/src/components/atomic/Navigation/Tabs/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '标签页',
                schema: {
                    componentName: 'MantineTabs',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTabs.List',
        title: '标签页列表',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTabs',
            main: 'libs/components/src/components/atomic/Navigation/Tabs/component.tsx',
            destructuring: true,
            subName: 'List',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '标签页列表',
                schema: {
                    componentName: 'MantineTabs.List',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTabs.Tab',
        title: '标签页',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTabs',
            main: 'libs/components/src/components/atomic/Navigation/Tabs/component.tsx',
            destructuring: true,
            subName: 'Tab',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '标签页',
                schema: {
                    componentName: 'MantineTabs.Tab',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTabs.Panel',
        title: '标签页面板',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTabs',
            main: 'libs/components/src/components/atomic/Navigation/Tabs/component.tsx',
            destructuring: true,
            subName: 'Panel',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '标签页面板',
                schema: {
                    componentName: 'MantineTabs.Panel',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
