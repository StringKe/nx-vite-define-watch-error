import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineFocusTrap',
        title: '焦点锁定',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineFocusTrap',
            main: 'libs/components/src/components/atomic/Misc/FocusTrap/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'children',
                propType: {
                    type: 'any',
                    isRequired: true,
                },
                title: {
                    label: '子元素',
                    tip: 'children | Element at which focus should be trapped, should support ref prop',
                },
            },
            {
                name: 'active',
                propType: 'bool',
                title: {
                    label: 'Active',
                    tip: 'active | Determines whether focus should be trapped within child element',
                },
            },
            {
                name: 'refProp',
                propType: 'string',
            },
        ],
        group: 'UI 组件',
        category: '杂项',
        configure: {
            component: {
                isContainer: true,
            },
            supports: {
                style: false,
            },
        },
        snippets: [
            {
                title: '焦点锁定',
                schema: {
                    componentName: 'MantineFocusTrap',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
