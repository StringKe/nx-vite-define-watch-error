import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineOverlay',
        title: '遮罩',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineOverlay',
            main: 'libs/components/src/components/atomic/Overlay/Overlay/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '遮罩',
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
                title: '遮罩',
                schema: {
                    componentName: 'MantineOverlay',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
