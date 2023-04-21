import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAvatar',
        title: '头像',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAvatar',
            main: 'libs/components/src/components/atomic/DataDisplay/Avatar/component.tsx',
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
                title: '头像',
                schema: {
                    componentName: 'MantineAvatar',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineAvatar.Group',
        title: '头像组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAvatar',
            main: 'libs/components/src/components/atomic/DataDisplay/Avatar/component.tsx',
            destructuring: true,
            subName: 'Group',
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
                title: '头像组',
                schema: {
                    componentName: 'MantineAvatar.Group',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
