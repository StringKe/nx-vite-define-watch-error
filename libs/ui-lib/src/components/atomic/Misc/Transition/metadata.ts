import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineTransition',
        title: '过渡动画',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineTransition',
            main: 'libs/components/src/components/atomic/Misc/Transition/component.tsx',
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
                title: '过渡动画',
                schema: {
                    componentName: 'MantineTransition',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
