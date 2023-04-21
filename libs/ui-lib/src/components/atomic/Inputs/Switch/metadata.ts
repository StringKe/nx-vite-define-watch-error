import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineSwitch',
        title: '开关',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineSwitch',
            main: 'libs/components/src/components/atomic/Inputs/Switch/component.tsx',
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
                title: '开关',
                schema: {
                    componentName: 'MantineSwitch',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineSwitch.Group',
        title: '开关组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineSwitch',
            main: 'libs/components/src/components/atomic/Inputs/Switch/component.tsx',
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
                title: '开关组',
                schema: {
                    componentName: 'MantineSwitch.Group',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
