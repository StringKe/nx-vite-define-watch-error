import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDrawer',
        title: '抽屉',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
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
                style: true,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: '抽屉',
                schema: {
                    componentName: 'MantineDrawer',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDrawer.Root',
        title: '抽屉根节点',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
            destructuring: true,
            subName: 'Root',
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
                title: '抽屉根节点',
                schema: {
                    componentName: 'MantineDrawer.Root',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDrawer.CloseButton',
        title: '抽屉关闭按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
            destructuring: true,
            subName: 'CloseButton',
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
                title: '抽屉关闭按钮',
                schema: {
                    componentName: 'MantineDrawer.CloseButton',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDrawer.Overlay',
        title: '抽屉遮罩',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
            destructuring: true,
            subName: 'Overlay',
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
                title: '抽屉遮罩',
                schema: {
                    componentName: 'MantineDrawer.Overlay',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDrawer.Content',
        title: '抽屉内容',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
            destructuring: true,
            subName: 'Content',
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
                title: '抽屉内容',
                schema: {
                    componentName: 'MantineDrawer.Content',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDrawer.Header',
        title: '抽屉头部',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
            destructuring: true,
            subName: 'Header',
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
                title: '抽屉头部',
                schema: {
                    componentName: 'MantineDrawer.Header',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDrawer.Title',
        title: '抽屉标题',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
            destructuring: true,
            subName: 'Title',
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
                title: '抽屉标题',
                schema: {
                    componentName: 'MantineDrawer.Title',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDrawer.Body',
        title: '抽屉主体',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDrawer',
            main: 'libs/components/src/components/atomic/Overlay/Drawer/component.tsx',
            destructuring: true,
            subName: 'Body',
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
                title: '抽屉主体',
                schema: {
                    componentName: 'MantineDrawer.Body',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
