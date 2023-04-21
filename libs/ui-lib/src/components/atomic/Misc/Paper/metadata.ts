import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantinePaper',
        title: '纸张',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePaper',
            main: 'libs/components/src/components/atomic/Misc/Paper/component.tsx',
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
                style: true,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: '纸张',
                schema: {
                    componentName: 'MantinePaper',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
