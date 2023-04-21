import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineHoverCard',
        title: '悬浮卡片',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineHoverCard',
            main: 'libs/components/src/components/atomic/Overlay/HoverCard/component.tsx',
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
                title: '悬浮卡片',
                schema: {
                    componentName: 'MantineHoverCard',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineHoverCard.Target',
        title: '悬浮卡片目标',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineHoverCard',
            main: 'libs/components/src/components/atomic/Overlay/HoverCard/component.tsx',
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
                title: '悬浮卡片目标',
                schema: {
                    componentName: 'MantineHoverCard.Target',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineHoverCard.Dropdown',
        title: '悬浮卡片下拉菜单',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineHoverCard',
            main: 'libs/components/src/components/atomic/Overlay/HoverCard/component.tsx',
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
                title: '悬浮卡片下拉菜单',
                schema: {
                    componentName: 'MantineHoverCard.Dropdown',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
