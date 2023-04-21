import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineChip',
        title: '标签',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineChip',
            main: 'libs/components/src/components/atomic/Inputs/Chip/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '输入框',
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
                title: '标签',
                schema: {
                    componentName: 'MantineChip',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineChip.Group',
        title: '标签组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineChip',
            main: 'libs/components/src/components/atomic/Inputs/Chip/component.tsx',
            destructuring: true,
            subName: 'Group',
        },
        group: 'UI 组件',
        category: '输入框',
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
                title: '标签组',
                schema: {
                    componentName: 'MantineChip.Group',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
