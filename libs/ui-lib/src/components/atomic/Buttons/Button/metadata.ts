import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineButton',
        title: '按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineButton',
            main: 'libs/components/src/components/atomic/Buttons/Button/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '按钮',
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
                title: '按钮',
                schema: {
                    componentName: 'MantineButton',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineButton.Group',
        title: '按钮组',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineButton',
            main: 'libs/components/src/components/atomic/Buttons/Button/component.tsx',
            destructuring: true,
            subName: 'Group',
        },
        group: 'UI 组件',
        category: '按钮',
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
                title: '按钮组',
                schema: {
                    componentName: 'MantineButton.Group',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
