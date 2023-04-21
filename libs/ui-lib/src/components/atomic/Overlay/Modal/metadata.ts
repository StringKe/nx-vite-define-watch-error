import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineModal',
        title: '模态框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框',
                schema: {
                    componentName: 'MantineModal',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineModal.Root',
        title: '模态框根节点',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框根节点',
                schema: {
                    componentName: 'MantineModal.Root',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineModal.CloseButton',
        title: '模态框关闭按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框关闭按钮',
                schema: {
                    componentName: 'MantineModal.CloseButton',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineModal.Overlay',
        title: '模态框遮罩',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框遮罩',
                schema: {
                    componentName: 'MantineModal.Overlay',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineModal.Content',
        title: '模态框内容',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框内容',
                schema: {
                    componentName: 'MantineModal.Content',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineModal.Header',
        title: '模态框头部',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框头部',
                schema: {
                    componentName: 'MantineModal.Header',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineModal.Title',
        title: '模态框标题',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框标题',
                schema: {
                    componentName: 'MantineModal.Title',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineModal.Body',
        title: '模态框主体',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineModal',
            main: 'libs/components/src/components/atomic/Overlay/Modal/component.tsx',
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
                title: '模态框主体',
                schema: {
                    componentName: 'MantineModal.Body',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
