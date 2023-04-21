import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineFocusTrap',
        title: '焦点锁定',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineFocusTrap',
            main: 'libs/components/src/components/atomic/Misc/FocusTrap/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '杂项',
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
                title: '焦点锁定',
                schema: {
                    componentName: 'MantineFocusTrap',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
