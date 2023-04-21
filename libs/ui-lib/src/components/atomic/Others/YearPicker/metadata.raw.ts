import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineYearPicker',
        title: 'YearPicker',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineYearPicker',
            main: 'libs/components/src/components/atomic/Others/YearPicker/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'type',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: ['default', 'multiple', 'range'],
                        },
                    ],
                },
                title: {
                    label: '类型',
                    tip: 'type | Picker type: range, multiple or default',
                },
            },
            {
                name: 'value',
                propType: 'object',
                title: {
                    label: 'Value',
                    tip: 'value | Value for controlled component',
                },
            },
            {
                name: 'defaultValue',
                propType: 'object',
                title: {
                    label: 'DefaultValue',
                    tip: 'defaultValue | Default value for uncontrolled component',
                },
            },
            {
                name: 'onChange',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'value',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(value: DatePickerValue<Type>) => void',
                },
                title: {
                    label: 'OnChange',
                    tip: 'onChange | Called when value changes',
                },
            },
            {
                name: 'allowDeselect',
                propType: 'object',
                title: {
                    label: 'AllowDeselect',
                    tip: 'allowDeselect | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default"',
                },
            },
            {
                name: 'allowSingleDateInRange',
                propType: 'object',
                title: {
                    label: 'AllowSingleDateInRange',
                    tip: 'allowSingleDateInRange | Determines whether single year can be selected as range, applicable only when type="range"',
                },
            },
            {
                name: 'decadeLabelFormat',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'string',
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'startOfDecade',
                                    propType: 'object',
                                },
                                {
                                    name: 'endOfDecade',
                                    propType: 'object',
                                },
                            ],
                            raw: '(startOfDecade: Date, endOfDecade: Date) => ReactNode',
                        },
                    ],
                },
                title: {
                    label: 'DecadeLabelFormat',
                    tip: 'decadeLabelFormat | dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY"',
                },
            },
            {
                name: '__preventFocus',
                propType: 'bool',
                title: {
                    label: '__preventFocus',
                    tip: '__preventFocus | Prevents focus shift when buttons are clicked',
                },
            },
            {
                name: 'yearsListFormat',
                propType: 'string',
                title: {
                    label: 'YearsListFormat',
                    tip: 'yearsListFormat | dayjs format for years list',
                },
            },
            {
                name: 'getYearControlProps',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'date',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(date: Date) => Partial<PickerControlProps>',
                },
                title: {
                    label: 'GetYearControlProps',
                    tip: 'getYearControlProps | Adds props to year picker control based on date',
                },
            },
            {
                name: 'size',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: '大小',
                    tip: 'size | Component size',
                },
            },
            {
                name: '__stopPropagation',
                propType: 'bool',
                title: {
                    label: '__stopPropagation',
                    tip: '__stopPropagation | Determines whether propagation for Escape key should be stopped',
                },
            },
            {
                name: 'withCellSpacing',
                propType: 'bool',
                title: {
                    label: 'WithCellSpacing',
                    tip: 'withCellSpacing | Determines whether controls should be separated by spacing, true by default',
                },
            },
            {
                name: '__onControlClick',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'event',
                            propType: 'object',
                        },
                        {
                            name: 'date',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>, date: Date) => void',
                },
                title: {
                    label: '__onControlClick',
                    tip: '__onControlClick | Called when control is clicked with event and date',
                },
            },
            {
                name: '__onControlMouseEnter',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'event',
                            propType: 'object',
                        },
                        {
                            name: 'date',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>, date: Date) => void',
                },
                title: {
                    label: '__onControlMouseEnter',
                    tip: '__onControlMouseEnter | Called when mouse enters control with event and date, used for ranges',
                },
            },
            {
                name: '__onControlKeyDown',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'event',
                            propType: 'object',
                        },
                        {
                            name: 'payload',
                            propType: {
                                type: 'shape',
                                value: [
                                    {
                                        name: 'cellIndex',
                                        propType: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                    },
                                    {
                                        name: 'rowIndex',
                                        propType: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                    },
                                    {
                                        name: 'date',
                                        propType: {
                                            type: 'object',
                                            isRequired: true,
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(event: KeyboardEvent<HTMLButtonElement>, payload: ControlKeydownPayload) => void',
                },
                title: {
                    label: '__onControlKeyDown',
                    tip: '__onControlKeyDown | Called when any keydown event is registered on control, used for arrows navigation',
                },
            },
            {
                name: '__getControlRef',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'rowIndex',
                            propType: 'number',
                        },
                        {
                            name: 'cellIndex',
                            propType: 'number',
                        },
                        {
                            name: 'node',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(rowIndex: number, cellIndex: number, node: HTMLButtonElement) => void',
                },
                title: {
                    label: '__getControlRef',
                    tip: '__getControlRef | Assigns ref of every control based on its position in the table, used for arrows navigation',
                },
            },
            {
                name: 'minDate',
                propType: 'object',
                title: {
                    label: 'MinDate',
                    tip: 'minDate | Minimum possible date',
                },
            },
            {
                name: 'maxDate',
                propType: 'object',
                title: {
                    label: 'MaxDate',
                    tip: 'maxDate | Maximum possible date',
                },
            },
            {
                name: 'locale',
                propType: 'string',
                title: {
                    label: 'Locale',
                    tip: 'locale | dayjs locale, defaults to value defined in DatesProvider',
                },
            },
            {
                name: '__staticSelector',
                propType: 'string',
                title: {
                    label: '__staticSelector',
                    tip: '__staticSelector | undefined',
                },
            },
            {
                name: '__updateDateOnYearSelect',
                propType: 'bool',
                title: {
                    label: '__updateDateOnYearSelect',
                    tip: '__updateDateOnYearSelect | Determines whether date should be updated when year control is clicked',
                },
            },
            {
                name: '__updateDateOnMonthSelect',
                propType: 'bool',
                title: {
                    label: '__updateDateOnMonthSelect',
                    tip: '__updateDateOnMonthSelect | Determines whether date should be updated when month control is clicked',
                },
            },
            {
                name: 'defaultDate',
                propType: 'object',
                title: {
                    label: 'DefaultDate',
                    tip: 'defaultDate | Initial date that is displayed, used for uncontrolled component',
                },
            },
            {
                name: 'date',
                propType: 'object',
                title: {
                    label: 'Date',
                    tip: 'date | Date that is displayed, used for controlled component',
                },
            },
            {
                name: 'onDateChange',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'date',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(date: Date) => void',
                },
                title: {
                    label: 'OnDateChange',
                    tip: 'onDateChange | Called when date changes',
                },
            },
            {
                name: 'numberOfColumns',
                propType: 'number',
                title: {
                    label: 'NumberOfColumns',
                    tip: 'numberOfColumns | Number of columns to render next to each other',
                },
            },
            {
                name: 'columnsToScroll',
                propType: 'number',
                title: {
                    label: 'ColumnsToScroll',
                    tip: 'columnsToScroll | Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns',
                },
            },
            {
                name: 'ariaLabels',
                propType: {
                    type: 'shape',
                    value: [
                        {
                            name: 'monthLevelControl',
                            propType: 'string',
                        },
                        {
                            name: 'yearLevelControl',
                            propType: 'string',
                        },
                        {
                            name: 'nextMonth',
                            propType: 'string',
                        },
                        {
                            name: 'previousMonth',
                            propType: 'string',
                        },
                        {
                            name: 'nextYear',
                            propType: 'string',
                        },
                        {
                            name: 'previousYear',
                            propType: 'string',
                        },
                        {
                            name: 'nextDecade',
                            propType: 'string',
                        },
                        {
                            name: 'previousDecade',
                            propType: 'string',
                        },
                    ],
                },
                title: {
                    label: 'AriaLabels',
                    tip: 'ariaLabels | aria-label attributes for controls on different levels',
                },
            },
            {
                name: 'onNextDecade',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'date',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(date: Date) => void',
                },
                title: {
                    label: 'OnNextDecade',
                    tip: 'onNextDecade | Called when next decade button is clicked',
                },
            },
            {
                name: 'onPreviousDecade',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'date',
                            propType: 'object',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(date: Date) => void',
                },
                title: {
                    label: 'OnPreviousDecade',
                    tip: 'onPreviousDecade | Called when previous decade button is clicked',
                },
            },
            {
                name: 'variant',
                propType: 'string',
                title: {
                    label: 'Variant',
                    tip: 'variant | undefined',
                },
            },
            {
                name: 'className',
                propType: 'string',
                title: {
                    label: 'ClassName',
                    tip: 'className | undefined',
                },
            },
            {
                name: 'style',
                propType: 'object',
                title: {
                    label: 'Style',
                    tip: 'style | undefined',
                },
            },
            {
                name: 'sx',
                propType: {
                    type: 'oneOfType',
                    value: [
                        {
                            type: 'objectOf',
                            value: 'oneOfType',
                        },
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'theme',
                                    propType: {
                                        type: 'shape',
                                        value: [
                                            {
                                                name: 'dir',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: ['ltr', 'rtl'],
                                                },
                                            },
                                            {
                                                name: 'primaryShade',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            type: 'shape',
                                                            value: [
                                                                {
                                                                    name: 'light',
                                                                    propType: {
                                                                        type: 'oneOf',
                                                                        isRequired:
                                                                            true,
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    name: 'dark',
                                                                    propType: {
                                                                        type: 'oneOf',
                                                                        isRequired:
                                                                            true,
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                0, 1, 2, 3, 4,
                                                                5, 6, 7, 8, 9,
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'focusRing',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'auto',
                                                        'always',
                                                        'never',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'defaultRadius',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'number',
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                'xs',
                                                                'sm',
                                                                'md',
                                                                'lg',
                                                                'xl',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'loader',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'bars',
                                                        'oval',
                                                        'dots',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'colorScheme',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: ['light', 'dark'],
                                                },
                                            },
                                            {
                                                name: 'white',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'black',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'colors',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'fontFamily',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                '-moz-initial',
                                                                'inherit',
                                                                'initial',
                                                                'revert',
                                                                'revert-layer',
                                                                'unset',
                                                                'cursive',
                                                                'fantasy',
                                                                'monospace',
                                                                'sans-serif',
                                                                'serif',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'lineHeight',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'string',
                                                        'number',
                                                        'object',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'transitionTimingFunction',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                '-moz-initial',
                                                                'inherit',
                                                                'initial',
                                                                'revert',
                                                                'revert-layer',
                                                                'unset',
                                                                'ease',
                                                                'ease-in',
                                                                'ease-in-out',
                                                                'ease-out',
                                                                'step-end',
                                                                'step-start',
                                                                'linear',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fontFamilyMonospace',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                '-moz-initial',
                                                                'inherit',
                                                                'initial',
                                                                'revert',
                                                                'revert-layer',
                                                                'unset',
                                                                'cursive',
                                                                'fantasy',
                                                                'monospace',
                                                                'sans-serif',
                                                                'serif',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'primaryColor',
                                                propType: {
                                                    type: 'oneOfType',
                                                    isRequired: true,
                                                    value: [
                                                        'object',
                                                        {
                                                            type: 'oneOf',
                                                            value: [
                                                                'dark',
                                                                'gray',
                                                                'red',
                                                                'pink',
                                                                'grape',
                                                                'violet',
                                                                'indigo',
                                                                'blue',
                                                                'cyan',
                                                                'green',
                                                                'lime',
                                                                'yellow',
                                                                'orange',
                                                                'teal',
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'respectReducedMotion',
                                                propType: {
                                                    type: 'bool',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'cursorType',
                                                propType: {
                                                    type: 'oneOf',
                                                    isRequired: true,
                                                    value: [
                                                        'default',
                                                        'pointer',
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'defaultGradient',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'from',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'to',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'deg',
                                                            propType: 'number',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fontSizes',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'radius',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'spacing',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'breakpoints',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'shadows',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'headings',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'fontFamily',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            '-moz-initial',
                                                                            'inherit',
                                                                            'initial',
                                                                            'revert',
                                                                            'revert-layer',
                                                                            'unset',
                                                                            'cursive',
                                                                            'fantasy',
                                                                            'monospace',
                                                                            'sans-serif',
                                                                            'serif',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fontWeight',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            '-moz-initial',
                                                                            'inherit',
                                                                            'initial',
                                                                            'revert',
                                                                            'revert-layer',
                                                                            'unset',
                                                                            'normal',
                                                                            'bold',
                                                                            'bolder',
                                                                            'lighter',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'sizes',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'h1',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            '-moz-initial',
                                                                                                            'inherit',
                                                                                                            'initial',
                                                                                                            'revert',
                                                                                                            'revert-layer',
                                                                                                            'unset',
                                                                                                            'normal',
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h2',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            '-moz-initial',
                                                                                                            'inherit',
                                                                                                            'initial',
                                                                                                            'revert',
                                                                                                            'revert-layer',
                                                                                                            'unset',
                                                                                                            'normal',
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h3',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            '-moz-initial',
                                                                                                            'inherit',
                                                                                                            'initial',
                                                                                                            'revert',
                                                                                                            'revert-layer',
                                                                                                            'unset',
                                                                                                            'normal',
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h4',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            '-moz-initial',
                                                                                                            'inherit',
                                                                                                            'initial',
                                                                                                            'revert',
                                                                                                            'revert-layer',
                                                                                                            'unset',
                                                                                                            'normal',
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h5',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            '-moz-initial',
                                                                                                            'inherit',
                                                                                                            'initial',
                                                                                                            'revert',
                                                                                                            'revert-layer',
                                                                                                            'unset',
                                                                                                            'normal',
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'h6',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'fontSize',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'fontWeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            '-moz-initial',
                                                                                                            'inherit',
                                                                                                            'initial',
                                                                                                            'revert',
                                                                                                            'revert-layer',
                                                                                                            'unset',
                                                                                                            'normal',
                                                                                                            'bold',
                                                                                                            'bolder',
                                                                                                            'lighter',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'lineHeight',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                    'object',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'fn',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'fontStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'focusStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'selector',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(selector?: string) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'cover',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'offset',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'string',
                                                                                    'number',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(offset?: string | number) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'themeColor',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'shade',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                    {
                                                                        name: 'primaryFallback',
                                                                        propType:
                                                                            'bool',
                                                                    },
                                                                    {
                                                                        name: 'useSplittedShade',
                                                                        propType:
                                                                            'bool',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'rgba',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'linearGradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'deg',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                    {
                                                                        name: 'colors',
                                                                        propType:
                                                                            {
                                                                                type: 'arrayOf',
                                                                                value: 'string',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(deg: number, ...colors: string[]) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'radialGradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colors',
                                                                        propType:
                                                                            {
                                                                                type: 'arrayOf',
                                                                                value: 'string',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(...colors: string[]) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'gradient',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'gradient',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                value: [
                                                                                    {
                                                                                        name: 'from',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'to',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'deg',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(gradient?: MantineGradient) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'smallerThan',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'breakpoint',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'largerThan',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'breakpoint',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'lighten',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'darken',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'color',
                                                                        propType:
                                                                            'string',
                                                                    },
                                                                    {
                                                                        name: 'alpha',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(color: string, alpha: number) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'radius',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'size',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                value: [
                                                                                    'number',
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            'xs',
                                                                                            'sm',
                                                                                            'md',
                                                                                            'lg',
                                                                                            'xl',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(size?: MantineNumberSize) => string | number',
                                                            },
                                                        },
                                                        {
                                                            name: 'variant',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'payload',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                value: [
                                                                                    {
                                                                                        name: 'variant',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'string',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'dark',
                                                                                                            'gray',
                                                                                                            'red',
                                                                                                            'pink',
                                                                                                            'grape',
                                                                                                            'violet',
                                                                                                            'indigo',
                                                                                                            'blue',
                                                                                                            'cyan',
                                                                                                            'green',
                                                                                                            'lime',
                                                                                                            'yellow',
                                                                                                            'orange',
                                                                                                            'teal',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'gradient',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'from',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'to',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'deg',
                                                                                                        propType:
                                                                                                            'number',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'primaryFallback',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(payload: VariantInput) => VariantOutput',
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryShade',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colorScheme',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOf',
                                                                                value: [
                                                                                    'light',
                                                                                    'dark',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(colorScheme?: ColorScheme) => Shade',
                                                            },
                                                        },
                                                        {
                                                            name: 'hover',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'hoverStyle',
                                                                        propType:
                                                                            {
                                                                                type: 'objectOf',
                                                                                value: 'oneOfType',
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(hoverStyle: CSSObject) => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryColor',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'colorScheme',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOf',
                                                                                value: [
                                                                                    'light',
                                                                                    'dark',
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(colorScheme?: ColorScheme) => string',
                                                            },
                                                        },
                                                        {
                                                            name: 'placeholderStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => any',
                                                            },
                                                        },
                                                        {
                                                            name: 'dimmed',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                raw: '() => string',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                name: 'other',
                                                propType: {
                                                    type: 'object',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'activeStyles',
                                                propType: {
                                                    type: 'objectOf',
                                                    isRequired: true,
                                                    value: 'oneOfType',
                                                },
                                            },
                                            {
                                                name: 'datesLocale',
                                                propType: {
                                                    type: 'string',
                                                    isRequired: true,
                                                },
                                            },
                                            {
                                                name: 'components',
                                                propType: {
                                                    type: 'objectOf',
                                                    isRequired: true,
                                                    value: 'shape',
                                                },
                                            },
                                            {
                                                name: 'globalStyles',
                                                propType: {
                                                    type: 'func',
                                                    isRequired: true,
                                                    params: [
                                                        {
                                                            name: 'theme',
                                                            propType: 'object',
                                                        },
                                                    ],
                                                    raw: '(theme: MantineTheme) => CSSObject',
                                                },
                                            },
                                            {
                                                name: 'focusRingStyles',
                                                propType: {
                                                    type: 'shape',
                                                    isRequired: true,
                                                    value: [
                                                        {
                                                            name: 'styles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'resetStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'inputStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                returns: {
                                                                    propType:
                                                                        'number',
                                                                },
                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                            raw: '(theme: MantineTheme) => CSSObject',
                        },
                        {
                            type: 'arrayOf',
                            value: {
                                type: 'oneOfType',
                                value: [
                                    {
                                        type: 'objectOf',
                                        value: 'oneOfType',
                                    },
                                    {
                                        type: 'func',
                                        params: [
                                            {
                                                name: 'theme',
                                                propType: {
                                                    type: 'shape',
                                                    value: [
                                                        {
                                                            name: 'dir',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'ltr',
                                                                    'rtl',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryShade',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        type: 'shape',
                                                                        value: [
                                                                            {
                                                                                name: 'light',
                                                                                propType:
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        isRequired:
                                                                                            true,
                                                                                        value: [
                                                                                            0,
                                                                                            1,
                                                                                            2,
                                                                                            3,
                                                                                            4,
                                                                                            5,
                                                                                            6,
                                                                                            7,
                                                                                            8,
                                                                                            9,
                                                                                        ],
                                                                                    },
                                                                            },
                                                                            {
                                                                                name: 'dark',
                                                                                propType:
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        isRequired:
                                                                                            true,
                                                                                        value: [
                                                                                            0,
                                                                                            1,
                                                                                            2,
                                                                                            3,
                                                                                            4,
                                                                                            5,
                                                                                            6,
                                                                                            7,
                                                                                            8,
                                                                                            9,
                                                                                        ],
                                                                                    },
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            0,
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4,
                                                                            5,
                                                                            6,
                                                                            7,
                                                                            8,
                                                                            9,
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'focusRing',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'auto',
                                                                    'always',
                                                                    'never',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'defaultRadius',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'number',
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            'xs',
                                                                            'sm',
                                                                            'md',
                                                                            'lg',
                                                                            'xl',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'loader',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'bars',
                                                                    'oval',
                                                                    'dots',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'colorScheme',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'light',
                                                                    'dark',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'white',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'black',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'colors',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'fontFamily',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            '-moz-initial',
                                                                            'inherit',
                                                                            'initial',
                                                                            'revert',
                                                                            'revert-layer',
                                                                            'unset',
                                                                            'cursive',
                                                                            'fantasy',
                                                                            'monospace',
                                                                            'sans-serif',
                                                                            'serif',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'lineHeight',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'string',
                                                                    'number',
                                                                    'object',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'transitionTimingFunction',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            '-moz-initial',
                                                                            'inherit',
                                                                            'initial',
                                                                            'revert',
                                                                            'revert-layer',
                                                                            'unset',
                                                                            'ease',
                                                                            'ease-in',
                                                                            'ease-in-out',
                                                                            'ease-out',
                                                                            'step-end',
                                                                            'step-start',
                                                                            'linear',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fontFamilyMonospace',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            '-moz-initial',
                                                                            'inherit',
                                                                            'initial',
                                                                            'revert',
                                                                            'revert-layer',
                                                                            'unset',
                                                                            'cursive',
                                                                            'fantasy',
                                                                            'monospace',
                                                                            'sans-serif',
                                                                            'serif',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'primaryColor',
                                                            propType: {
                                                                type: 'oneOfType',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'object',
                                                                    {
                                                                        type: 'oneOf',
                                                                        value: [
                                                                            'dark',
                                                                            'gray',
                                                                            'red',
                                                                            'pink',
                                                                            'grape',
                                                                            'violet',
                                                                            'indigo',
                                                                            'blue',
                                                                            'cyan',
                                                                            'green',
                                                                            'lime',
                                                                            'yellow',
                                                                            'orange',
                                                                            'teal',
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'respectReducedMotion',
                                                            propType: {
                                                                type: 'bool',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'cursorType',
                                                            propType: {
                                                                type: 'oneOf',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    'default',
                                                                    'pointer',
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'defaultGradient',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'from',
                                                                        propType:
                                                                            {
                                                                                type: 'string',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'to',
                                                                        propType:
                                                                            {
                                                                                type: 'string',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'deg',
                                                                        propType:
                                                                            'number',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fontSizes',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'radius',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'spacing',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'breakpoints',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'shadows',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'headings',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'fontFamily',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            '-moz-initial',
                                                                                            'inherit',
                                                                                            'initial',
                                                                                            'revert',
                                                                                            'revert-layer',
                                                                                            'unset',
                                                                                            'cursive',
                                                                                            'fantasy',
                                                                                            'monospace',
                                                                                            'sans-serif',
                                                                                            'serif',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'fontWeight',
                                                                        propType:
                                                                            {
                                                                                type: 'oneOfType',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    'object',
                                                                                    {
                                                                                        type: 'oneOf',
                                                                                        value: [
                                                                                            '-moz-initial',
                                                                                            'inherit',
                                                                                            'initial',
                                                                                            'revert',
                                                                                            'revert-layer',
                                                                                            'unset',
                                                                                            'normal',
                                                                                            'bold',
                                                                                            'bolder',
                                                                                            'lighter',
                                                                                        ],
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'sizes',
                                                                        propType:
                                                                            {
                                                                                type: 'shape',
                                                                                isRequired:
                                                                                    true,
                                                                                value: [
                                                                                    {
                                                                                        name: 'h1',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
                                                                                                                    {
                                                                                                                        type: 'oneOf',
                                                                                                                        value: [
                                                                                                                            '-moz-initial',
                                                                                                                            'inherit',
                                                                                                                            'initial',
                                                                                                                            'revert',
                                                                                                                            'revert-layer',
                                                                                                                            'unset',
                                                                                                                            'normal',
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h2',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
                                                                                                                    {
                                                                                                                        type: 'oneOf',
                                                                                                                        value: [
                                                                                                                            '-moz-initial',
                                                                                                                            'inherit',
                                                                                                                            'initial',
                                                                                                                            'revert',
                                                                                                                            'revert-layer',
                                                                                                                            'unset',
                                                                                                                            'normal',
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h3',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
                                                                                                                    {
                                                                                                                        type: 'oneOf',
                                                                                                                        value: [
                                                                                                                            '-moz-initial',
                                                                                                                            'inherit',
                                                                                                                            'initial',
                                                                                                                            'revert',
                                                                                                                            'revert-layer',
                                                                                                                            'unset',
                                                                                                                            'normal',
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h4',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
                                                                                                                    {
                                                                                                                        type: 'oneOf',
                                                                                                                        value: [
                                                                                                                            '-moz-initial',
                                                                                                                            'inherit',
                                                                                                                            'initial',
                                                                                                                            'revert',
                                                                                                                            'revert-layer',
                                                                                                                            'unset',
                                                                                                                            'normal',
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h5',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
                                                                                                                    {
                                                                                                                        type: 'oneOf',
                                                                                                                        value: [
                                                                                                                            '-moz-initial',
                                                                                                                            'inherit',
                                                                                                                            'initial',
                                                                                                                            'revert',
                                                                                                                            'revert-layer',
                                                                                                                            'unset',
                                                                                                                            'normal',
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                    {
                                                                                        name: 'h6',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'fontSize',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'fontWeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'object',
                                                                                                                    {
                                                                                                                        type: 'oneOf',
                                                                                                                        value: [
                                                                                                                            '-moz-initial',
                                                                                                                            'inherit',
                                                                                                                            'initial',
                                                                                                                            'revert',
                                                                                                                            'revert-layer',
                                                                                                                            'unset',
                                                                                                                            'normal',
                                                                                                                            'bold',
                                                                                                                            'bolder',
                                                                                                                            'lighter',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'lineHeight',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                                value: [
                                                                                                                    'string',
                                                                                                                    'number',
                                                                                                                    'object',
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'fn',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'fontStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'focusStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'selector',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(selector?: string) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'cover',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'offset',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'string',
                                                                                                    'number',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(offset?: string | number) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'themeColor',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'shade',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                    {
                                                                                        name: 'primaryFallback',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                    {
                                                                                        name: 'useSplittedShade',
                                                                                        propType:
                                                                                            'bool',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'rgba',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'linearGradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'deg',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                    {
                                                                                        name: 'colors',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'arrayOf',
                                                                                                value: 'string',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(deg: number, ...colors: string[]) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'radialGradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colors',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'arrayOf',
                                                                                                value: 'string',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(...colors: string[]) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'gradient',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'gradient',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'from',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'to',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'deg',
                                                                                                        propType:
                                                                                                            'number',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(gradient?: MantineGradient) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'smallerThan',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'breakpoint',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'largerThan',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'breakpoint',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(breakpoint: MantineNumberSize) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'lighten',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'darken',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'color',
                                                                                        propType:
                                                                                            'string',
                                                                                    },
                                                                                    {
                                                                                        name: 'alpha',
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(color: string, alpha: number) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'radius',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'size',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOfType',
                                                                                                value: [
                                                                                                    'number',
                                                                                                    'object',
                                                                                                    {
                                                                                                        type: 'oneOf',
                                                                                                        value: [
                                                                                                            'xs',
                                                                                                            'sm',
                                                                                                            'md',
                                                                                                            'lg',
                                                                                                            'xl',
                                                                                                        ],
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(size?: MantineNumberSize) => string | number',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'variant',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'payload',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'shape',
                                                                                                value: [
                                                                                                    {
                                                                                                        name: 'variant',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'string',
                                                                                                                isRequired:
                                                                                                                    true,
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'color',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'oneOfType',
                                                                                                                value: [
                                                                                                                    'object',
                                                                                                                    {
                                                                                                                        type: 'oneOf',
                                                                                                                        value: [
                                                                                                                            'dark',
                                                                                                                            'gray',
                                                                                                                            'red',
                                                                                                                            'pink',
                                                                                                                            'grape',
                                                                                                                            'violet',
                                                                                                                            'indigo',
                                                                                                                            'blue',
                                                                                                                            'cyan',
                                                                                                                            'green',
                                                                                                                            'lime',
                                                                                                                            'yellow',
                                                                                                                            'orange',
                                                                                                                            'teal',
                                                                                                                        ],
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'gradient',
                                                                                                        propType:
                                                                                                            {
                                                                                                                type: 'shape',
                                                                                                                value: [
                                                                                                                    {
                                                                                                                        name: 'from',
                                                                                                                        propType:
                                                                                                                            {
                                                                                                                                type: 'string',
                                                                                                                                isRequired:
                                                                                                                                    true,
                                                                                                                            },
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'to',
                                                                                                                        propType:
                                                                                                                            {
                                                                                                                                type: 'string',
                                                                                                                                isRequired:
                                                                                                                                    true,
                                                                                                                            },
                                                                                                                    },
                                                                                                                    {
                                                                                                                        name: 'deg',
                                                                                                                        propType:
                                                                                                                            'number',
                                                                                                                    },
                                                                                                                ],
                                                                                                            },
                                                                                                    },
                                                                                                    {
                                                                                                        name: 'primaryFallback',
                                                                                                        propType:
                                                                                                            'bool',
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(payload: VariantInput) => VariantOutput',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'primaryShade',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colorScheme',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOf',
                                                                                                value: [
                                                                                                    'light',
                                                                                                    'dark',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(colorScheme?: ColorScheme) => Shade',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'hover',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'hoverStyle',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'objectOf',
                                                                                                value: 'oneOfType',
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(hoverStyle: CSSObject) => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'primaryColor',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'colorScheme',
                                                                                        propType:
                                                                                            {
                                                                                                type: 'oneOf',
                                                                                                value: [
                                                                                                    'light',
                                                                                                    'dark',
                                                                                                ],
                                                                                            },
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(colorScheme?: ColorScheme) => string',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'placeholderStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => any',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'dimmed',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                raw: '() => string',
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        {
                                                            name: 'other',
                                                            propType: {
                                                                type: 'object',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'activeStyles',
                                                            propType: {
                                                                type: 'objectOf',
                                                                isRequired:
                                                                    true,
                                                                value: 'oneOfType',
                                                            },
                                                        },
                                                        {
                                                            name: 'datesLocale',
                                                            propType: {
                                                                type: 'string',
                                                                isRequired:
                                                                    true,
                                                            },
                                                        },
                                                        {
                                                            name: 'components',
                                                            propType: {
                                                                type: 'objectOf',
                                                                isRequired:
                                                                    true,
                                                                value: 'shape',
                                                            },
                                                        },
                                                        {
                                                            name: 'globalStyles',
                                                            propType: {
                                                                type: 'func',
                                                                isRequired:
                                                                    true,
                                                                params: [
                                                                    {
                                                                        name: 'theme',
                                                                        propType:
                                                                            'object',
                                                                    },
                                                                ],
                                                                raw: '(theme: MantineTheme) => CSSObject',
                                                            },
                                                        },
                                                        {
                                                            name: 'focusRingStyles',
                                                            propType: {
                                                                type: 'shape',
                                                                isRequired:
                                                                    true,
                                                                value: [
                                                                    {
                                                                        name: 'styles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'resetStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                    {
                                                                        name: 'inputStyles',
                                                                        propType:
                                                                            {
                                                                                type: 'func',
                                                                                isRequired:
                                                                                    true,
                                                                                params: [
                                                                                    {
                                                                                        name: 'theme',
                                                                                        propType:
                                                                                            'object',
                                                                                    },
                                                                                ],
                                                                                returns:
                                                                                    {
                                                                                        propType:
                                                                                            'number',
                                                                                    },
                                                                                raw: '(theme: Pick<MantineTheme, "colorScheme" | "fontFamily" | "lineHeight" | "transitionTimingFunction" | "dir" | "primaryShade" | "focusRing" | "defaultRadius" | "loader" | ... 19 more ... | "focusRingStyles">) => CSSObject',
                                                                            },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                        raw: '(theme: MantineTheme) => CSSObject',
                                    },
                                ],
                            },
                        },
                    ],
                },
                title: {
                    label: 'Sx',
                    tip: 'sx | undefined',
                },
            },
            {
                name: 'classNames',
                propType: 'object',
                title: {
                    label: 'ClassNames',
                    tip: 'classNames | undefined',
                },
            },
            {
                name: 'styles',
                propType: {
                    type: 'oneOfType',
                    value: ['object', 'func'],
                },
                title: {
                    label: 'Styles',
                    tip: 'styles | undefined',
                },
            },
            {
                name: 'unstyled',
                propType: 'bool',
                title: {
                    label: 'Unstyled',
                    tip: 'unstyled | undefined',
                },
            },
            {
                name: 'm',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'M',
                    tip: 'm | undefined',
                },
            },
            {
                name: 'my',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'My',
                    tip: 'my | undefined',
                },
            },
            {
                name: 'mx',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mx',
                    tip: 'mx | undefined',
                },
            },
            {
                name: 'mt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mt',
                    tip: 'mt | undefined',
                },
            },
            {
                name: 'mb',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mb',
                    tip: 'mb | undefined',
                },
            },
            {
                name: 'ml',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Ml',
                    tip: 'ml | undefined',
                },
            },
            {
                name: 'mr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Mr',
                    tip: 'mr | undefined',
                },
            },
            {
                name: 'p',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'P',
                    tip: 'p | undefined',
                },
            },
            {
                name: 'py',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Py',
                    tip: 'py | undefined',
                },
            },
            {
                name: 'px',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Px',
                    tip: 'px | undefined',
                },
            },
            {
                name: 'pt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pt',
                    tip: 'pt | undefined',
                },
            },
            {
                name: 'pb',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pb',
                    tip: 'pb | undefined',
                },
            },
            {
                name: 'pl',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pl',
                    tip: 'pl | undefined',
                },
            },
            {
                name: 'pr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Pr',
                    tip: 'pr | undefined',
                },
            },
            {
                name: 'bg',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'dark',
                                'gray',
                                'red',
                                'pink',
                                'grape',
                                'violet',
                                'indigo',
                                'blue',
                                'cyan',
                                'green',
                                'lime',
                                'yellow',
                                'orange',
                                'teal',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Bg',
                    tip: 'bg | undefined',
                },
            },
            {
                name: 'c',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'dark',
                                'gray',
                                'red',
                                'pink',
                                'grape',
                                'violet',
                                'indigo',
                                'blue',
                                'cyan',
                                'green',
                                'lime',
                                'yellow',
                                'orange',
                                'teal',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'C',
                    tip: 'c | undefined',
                },
            },
            {
                name: 'opacity',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Opacity',
                    tip: 'opacity | undefined',
                },
            },
            {
                name: 'ff',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'cursive',
                                'fantasy',
                                'monospace',
                                'sans-serif',
                                'serif',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Ff',
                    tip: 'ff | undefined',
                },
            },
            {
                name: 'fz',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'number',
                        'object',
                        {
                            type: 'oneOf',
                            value: ['xs', 'sm', 'md', 'lg', 'xl'],
                        },
                    ],
                },
                title: {
                    label: 'Fz',
                    tip: 'fz | undefined',
                },
            },
            {
                name: 'fw',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'normal',
                                'bold',
                                'bolder',
                                'lighter',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Fw',
                    tip: 'fw | undefined',
                },
            },
            {
                name: 'lts',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },

            },
            {
                name: 'ta',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'left',
                                'right',
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'center',
                                'end',
                                'justify',
                                'match-parent',
                                'start',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Ta',
                    tip: 'ta | undefined',
                },
            },
            {
                name: 'lh',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Lh',
                    tip: 'lh | undefined',
                },
            },
            {
                name: 'fs',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'normal',
                                'italic',
                                'oblique',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Fs',
                    tip: 'fs | undefined',
                },
            },
            {
                name: 'tt',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'capitalize',
                                'full-size-kana',
                                'full-width',
                                'lowercase',
                                'none',
                                'uppercase',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Tt',
                    tip: 'tt | undefined',
                },
            },
            {
                name: 'td',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Td',
                    tip: 'td | undefined',
                },
            },
            {
                name: 'w',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'W',
                    tip: 'w | undefined',
                },
            },
            {
                name: 'miw',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Miw',
                    tip: 'miw | undefined',
                },
            },
            {
                name: 'maw',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Maw',
                    tip: 'maw | undefined',
                },
            },
            {
                name: 'h',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'H',
                    tip: 'h | undefined',
                },
            },
            {
                name: 'mih',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Mih',
                    tip: 'mih | undefined',
                },
            },
            {
                name: 'mah',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Mah',
                    tip: 'mah | undefined',
                },
            },
            {
                name: 'bgsz',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bgsz',
                    tip: 'bgsz | undefined',
                },
            },
            {
                name: 'bgp',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bgp',
                    tip: 'bgp | undefined',
                },
            },
            {
                name: 'bgr',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'no-repeat',
                                'repeat',
                                'repeat-x',
                                'repeat-y',
                                'round',
                                'space',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Bgr',
                    tip: 'bgr | undefined',
                },
            },
            {
                name: 'bga',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'fixed',
                                'local',
                                'scroll',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Bga',
                    tip: 'bga | undefined',
                },
            },
            {
                name: 'pos',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'fixed',
                                '-webkit-sticky',
                                'absolute',
                                'relative',
                                'static',
                                'sticky',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Pos',
                    tip: 'pos | undefined',
                },
            },
            {
                name: 'top',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Top',
                    tip: 'top | undefined',
                },
            },
            {
                name: 'left',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '左',
                    tip: 'left | undefined',
                },
            },
            {
                name: 'bottom',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Bottom',
                    tip: 'bottom | undefined',
                },
            },
            {
                name: 'right',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '右',
                    tip: 'right | undefined',
                },
            },
            {
                name: 'inset',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: 'Inset',
                    tip: 'inset | undefined',
                },
            },
            {
                name: 'display',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: [
                                'flex',
                                'grid',
                                '-moz-initial',
                                'inherit',
                                'initial',
                                'revert',
                                'revert-layer',
                                'unset',
                                'none',
                                'block',
                                'inline',
                                'run-in',
                                '-ms-flexbox',
                                '-ms-grid',
                                '-webkit-flex',
                                'flow',
                                'flow-root',
                                'ruby',
                                'table',
                                'ruby-base',
                                'ruby-base-container',
                                'ruby-text',
                                'ruby-text-container',
                                'table-caption',
                                'table-cell',
                                'table-column',
                                'table-column-group',
                                'table-footer-group',
                                'table-header-group',
                                'table-row',
                                'table-row-group',
                                '-ms-inline-flexbox',
                                '-ms-inline-grid',
                                '-webkit-inline-flex',
                                'inline-block',
                                'inline-flex',
                                'inline-grid',
                                'inline-list-item',
                                'inline-table',
                                'contents',
                                'list-item',
                            ],
                        },
                    ],
                },
                title: {
                    label: 'Display',
                    tip: 'display | undefined',
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
                style: true,
            },
        },
        snippets: [
            {
                title: 'YearPicker',
                schema: {
                    componentName: 'MantineYearPicker',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
