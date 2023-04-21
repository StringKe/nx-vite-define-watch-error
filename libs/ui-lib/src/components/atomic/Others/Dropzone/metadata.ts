import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDropzone',
        title: 'Dropzone',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDropzone',
            main: 'libs/components/src/components/atomic/Others/Dropzone/component.tsx',
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
                title: 'Dropzone',
                schema: {
                    componentName: 'MantineDropzone',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineDropzone.FullScreen',
        title: 'Dropzone.FullScreen',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDropzone',
            main: 'libs/components/src/components/atomic/Others/Dropzone/component.tsx',
            destructuring: true,
            subName: 'FullScreen',
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
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: 'Dropzone.FullScreen',
                schema: {
                    componentName: 'MantineDropzone.FullScreen',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
