import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineSlider',
        title: '滑块',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineSlider',
            main: 'libs/components/src/components/atomic/Inputs/Slider/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '输入框',
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
                title: '滑块',
                schema: {
                    componentName: 'MantineSlider',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
