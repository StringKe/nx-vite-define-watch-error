import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineIndicator',
        title: '指示器',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineIndicator',
            main: 'libs/components/src/components/atomic/DataDisplay/Indicator/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '数据展示',
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
                title: '指示器',
                schema: {
                    componentName: 'MantineIndicator',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
