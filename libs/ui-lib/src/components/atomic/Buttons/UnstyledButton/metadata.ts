import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineUnstyledButton',
        title: '无样式按钮',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineUnstyledButton',
            main: 'libs/components/src/components/atomic/Buttons/UnstyledButton/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '按钮',
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
                title: '无样式按钮',
                schema: {
                    componentName: 'MantineUnstyledButton',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
