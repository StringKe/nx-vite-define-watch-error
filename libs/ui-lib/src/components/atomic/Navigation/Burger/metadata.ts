import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineBurger',
        title: '开关式导航按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineBurger',
            main: 'libs/components/src/components/atomic/Navigation/Burger/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '开关式导航按钮',
                schema: {
                    componentName: 'MantineBurger',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
