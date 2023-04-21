import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineCarousel',
        title: 'Carousel',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCarousel',
            main: 'libs/components/src/components/atomic/Others/Carousel/component.tsx',
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
                title: 'Carousel',
                schema: {
                    componentName: 'MantineCarousel',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineCarousel.Slide',
        title: 'Carousel.Slide',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineCarousel',
            main: 'libs/components/src/components/atomic/Others/Carousel/component.tsx',
            destructuring: true,
            subName: 'Slide',
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
                title: 'Carousel.Slide',
                schema: {
                    componentName: 'MantineCarousel.Slide',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
