import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineAffix',
        title: '固定定位',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineAffix',
            main: 'libs/components/src/components/atomic/Overlay/Affix/component.tsx',
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
                title: '固定定位',
                schema: {
                    componentName: 'MantineAffix',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
