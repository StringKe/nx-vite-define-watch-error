import { defaultMetaData } from '../../../default.meta'

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineStepper',
        title: '步骤条',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineStepper',
            main: 'libs/components/src/components/atomic/Navigation/Stepper/component.tsx',
            destructuring: true,
            subName: '',
        },
        group: 'UI 组件',
        category: '导航',
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
                title: '步骤条',
                schema: {
                    componentName: 'MantineStepper',
                    props: {},
                },
            },
        ],
    },
    {
        componentName: 'MantineStepper.Step',
        title: '步骤条项',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineStepper',
            main: 'libs/components/src/components/atomic/Navigation/Stepper/component.tsx',
            destructuring: true,
            subName: 'Step',
        },
        group: 'UI 组件',
        category: '导航',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: true,
            },
            props: 'lsdkjfklsdjflksdjfklxmcnv,n',
        },
        snippets: [
            {
                title: '步骤条项',
                schema: {
                    componentName: 'MantineStepper.Step',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
