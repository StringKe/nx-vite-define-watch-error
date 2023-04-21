import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineLoadingOverlay',
        title: '加载遮罩',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineLoadingOverlay',
            main: 'libs/components/src/components/atomic/Overlay/LoadingOverlay/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '遮罩',
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
                title: '加载遮罩',
                schema: {
                    componentName: 'MantineLoadingOverlay',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
