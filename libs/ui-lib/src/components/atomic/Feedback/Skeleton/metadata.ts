import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineSkeleton',
        title: '骨架屏',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineSkeleton',
            main: 'libs/components/src/components/atomic/Feedback/Skeleton/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '反馈',
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
                title: '骨架屏',
                schema: {
                    componentName: 'MantineSkeleton',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
