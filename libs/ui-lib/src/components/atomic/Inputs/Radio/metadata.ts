import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineRadio',
        title: '单选框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineRadio',
            main: 'libs/components/src/components/atomic/Inputs/Radio/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '输入框',
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
                title: '单选框',
                schema: {
                    componentName: 'MantineRadio',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineRadio.Group',
        title: '单选框组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineRadio',
            main: 'libs/components/src/components/atomic/Inputs/Radio/component.tsx',
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
                style: true,
            },
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '单选框组',
                schema: {
                    componentName: 'MantineRadio.Group',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
