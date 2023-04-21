import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTooltip',
        title: '提示框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTooltip',
            main: 'libs/components/src/components/atomic/Overlay/Tooltip/component.tsx',
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
                title: '提示框',
                schema: {
                    componentName: 'MantineTooltip',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTooltip.Group',
        title: '提示框组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTooltip',
            main: 'libs/components/src/components/atomic/Overlay/Tooltip/component.tsx',
            destructuring: true,
            subName: 'Group',
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
                title: '提示框组',
                schema: {
                    componentName: 'MantineTooltip.Group',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineTooltip.Floating',
        title: '浮动提示框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTooltip',
            main: 'libs/components/src/components/atomic/Overlay/Tooltip/component.tsx',
            destructuring: true,
            subName: 'Floating',
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
                title: '浮动提示框',
                schema: {
                    componentName: 'MantineTooltip.Floating',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
