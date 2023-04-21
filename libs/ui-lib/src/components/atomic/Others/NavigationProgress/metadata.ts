import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineNavigationProgress',
        title: 'NavigationProgress',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineNavigationProgress',
            main: 'libs/components/src/components/atomic/Others/NavigationProgress/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: 'Others',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: false,
            },
            props: [...defaultMetaData],
        },
        snippets: [
            {
                title: 'NavigationProgress',
                schema: {
                    componentName: 'MantineNavigationProgress',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
