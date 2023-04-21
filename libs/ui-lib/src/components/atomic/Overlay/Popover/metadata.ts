import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantinePopover',
        title: '弹出框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePopover',
            main: 'libs/components/src/components/atomic/Overlay/Popover/component.tsx',
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
                title: '弹出框',
                schema: {
                    componentName: 'MantinePopover',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePopover.Target',
        title: '弹出框目标',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePopover',
            main: 'libs/components/src/components/atomic/Overlay/Popover/component.tsx',
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
                title: '弹出框目标',
                schema: {
                    componentName: 'MantinePopover.Target',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantinePopover.Dropdown',
        title: '弹出框下拉菜单',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePopover',
            main: 'libs/components/src/components/atomic/Overlay/Popover/component.tsx',
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
                title: '弹出框下拉菜单',
                schema: {
                    componentName: 'MantinePopover.Dropdown',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
