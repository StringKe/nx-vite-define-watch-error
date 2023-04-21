import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAccordion',
        title: '手风琴',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAccordion',
            main: 'libs/components/src/components/atomic/DataDisplay/Accordion/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '手风琴',
                schema: {
                    componentName: 'MantineAccordion',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineAccordion.Item',
        title: '手风琴项',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAccordion',
            main: 'libs/components/src/components/atomic/DataDisplay/Accordion/component.tsx',
            destructuring: true,
            subName: 'Item',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '手风琴项',
                schema: {
                    componentName: 'MantineAccordion.Item',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineAccordion.Control',
        title: '手风琴控制器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAccordion',
            main: 'libs/components/src/components/atomic/DataDisplay/Accordion/component.tsx',
            destructuring: true,
            subName: 'Control',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '手风琴控制器',
                schema: {
                    componentName: 'MantineAccordion.Control',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineAccordion.Panel',
        title: '手风琴面板',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAccordion',
            main: 'libs/components/src/components/atomic/DataDisplay/Accordion/component.tsx',
            destructuring: true,
            subName: 'Panel',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '手风琴面板',
                schema: {
                    componentName: 'MantineAccordion.Panel',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
