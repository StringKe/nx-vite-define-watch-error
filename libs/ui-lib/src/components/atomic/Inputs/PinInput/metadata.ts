import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantinePinInput',
        title: 'Pin输入框',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantinePinInput',
            main: 'libs/components/src/components/atomic/Inputs/PinInput/component.tsx',
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
                title: 'Pin输入框',
                schema: {
                    componentName: 'MantinePinInput',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
