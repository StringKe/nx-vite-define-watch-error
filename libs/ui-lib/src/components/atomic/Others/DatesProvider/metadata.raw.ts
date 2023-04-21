import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDatesProvider',
        title: 'DatesProvider',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDatesProvider',
            main: 'libs/components/src/components/atomic/Others/DatesProvider/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'settings',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
            },
        ],
        group: 'UI 组件',
        category: 'Others',
        configure: {
            component: {
                isContainer: false,
            },
            supports: {
                style: false,
            },
        },
        snippets: [
            {
                title: 'DatesProvider',
                schema: {
                    componentName: 'MantineDatesProvider',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
