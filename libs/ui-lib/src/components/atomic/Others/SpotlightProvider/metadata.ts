import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineSpotlightProvider',
        title: 'SpotlightProvider',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineSpotlightProvider',
            main: 'libs/components/src/components/atomic/Others/SpotlightProvider/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: 'Others',
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
                title: 'SpotlightProvider',
                schema: {
                    componentName: 'MantineSpotlightProvider',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
