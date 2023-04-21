import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantinePrism',
        title: 'Prism',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePrism',
            main: 'libs/components/src/components/atomic/Others/Prism/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: 'Others',
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
                title: 'Prism',
                schema: {
                    componentName: 'MantinePrism',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePrism.Tabs',
        title: 'Prism.Tabs',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePrism',
            main: 'libs/components/src/components/atomic/Others/Prism/component.tsx',
            destructuring: true,
            subName: 'Tabs',
        },
        group: 'UI 组件',
        category: 'Others',
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
                title: 'Prism.Tabs',
                schema: {
                    componentName: 'MantinePrism.Tabs',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePrism.TabsList',
        title: 'Prism.TabsList',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePrism',
            main: 'libs/components/src/components/atomic/Others/Prism/component.tsx',
            destructuring: true,
            subName: 'TabsList',
        },
        group: 'UI 组件',
        category: 'Others',
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
                title: 'Prism.TabsList',
                schema: {
                    componentName: 'MantinePrism.TabsList',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePrism.Tab',
        title: 'Prism.Tab',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePrism',
            main: 'libs/components/src/components/atomic/Others/Prism/component.tsx',
            destructuring: true,
            subName: 'Tab',
        },
        group: 'UI 组件',
        category: 'Others',
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
                title: 'Prism.Tab',
                schema: {
                    componentName: 'MantinePrism.Tab',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePrism.Panel',
        title: 'Prism.Panel',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePrism',
            main: 'libs/components/src/components/atomic/Others/Prism/component.tsx',
            destructuring: true,
            subName: 'Panel',
        },
        group: 'UI 组件',
        category: 'Others',
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
                title: 'Prism.Panel',
                schema: {
                    componentName: 'MantinePrism.Panel',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
