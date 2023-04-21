import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantinePagination',
        title: '分页',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页',
                schema: {
                    componentName: 'MantinePagination',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.Root',
        title: '分页根节点',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'Root',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页根节点',
                schema: {
                    componentName: 'MantinePagination.Root',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.Items',
        title: '分页项',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'Items',
        },
        group: 'UI 组件',
        category: '导航',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: false,
            },
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '分页项',
                schema: {
                    componentName: 'MantinePagination.Items',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.Control',
        title: '分页控制器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'Control',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页控制器',
                schema: {
                    componentName: 'MantinePagination.Control',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.Dots',
        title: '分页dots',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'Dots',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页dots',
                schema: {
                    componentName: 'MantinePagination.Dots',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.Next',
        title: '分页下一页',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'Next',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页下一页',
                schema: {
                    componentName: 'MantinePagination.Next',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.Previous',
        title: '分页上一页',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'Previous',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页上一页',
                schema: {
                    componentName: 'MantinePagination.Previous',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.Last',
        title: '分页最后一页',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'Last',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页最后一页',
                schema: {
                    componentName: 'MantinePagination.Last',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePagination.First',
        title: '分页第一页',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePagination',
            main: 'libs/components/src/components/atomic/Navigation/Pagination/component.tsx',
            destructuring: true,
            subName: 'First',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '分页第一页',
                schema: {
                    componentName: 'MantinePagination.First',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
