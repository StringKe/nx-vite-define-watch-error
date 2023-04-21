import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

export default [
    {
        componentName: 'MantineDateTimePicker',
        title: 'DateTimePicker',
        devMode: 'proCode',
        npm: {
            package: '@app/mantine-components',
            version: '0.0.0',
            exportName: 'MantineDateTimePicker',
            main: 'libs/components/src/components/atomic/Others/DateTimePicker/component.tsx',
            destructuring: true,
            subName: '',
        },
        props: [
            {
                name: 'form',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Form',
                    tip: 'form | undefined',
                },
            },
            {
                name: 'label',
                propType: 'node',
                title: {
                    label: 'Label',
                    tip: 'label | Input label, displayed before input',
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
                name: 'slot',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Slot',
                    tip: 'slot | undefined',
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
                name: 'title',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Title',
                    tip: 'title | undefined',
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
                name: 'color',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: '颜色',
                    tip: 'color | undefined',
                },
            },
            {
                name: 'id',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Id',
                    tip: 'id | undefined',
                },
            },
            {
                name: 'lang',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Lang',
                    tip: 'lang | undefined',
                },
            },
            {
                name: 'name',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Name',
                    tip: 'name | undefined',
                },
            },
            {
                name: 'role',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Role',
                    tip: 'role | undefined',
                },
            },
            {
                name: 'tabIndex',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'TabIndex',
                    tip: 'tabIndex | undefined',
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
                                'flex',
                                'flow',
                                'flow-root',
                                'grid',
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
                name: 'radius',
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
                    label: 'Radius',
                    tip: 'radius | Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default',
                },
            },
            {
                name: 'dangerouslySetInnerHTML',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'DangerouslySetInnerHTML',
                    tip: 'dangerouslySetInnerHTML | undefined',
                },
            },
            {
                name: 'onCopy',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCopy',
                    tip: 'onCopy | undefined',
                },
            },
            {
                name: 'onCopyCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCopyCapture',
                    tip: 'onCopyCapture | undefined',
                },
            },
            {
                name: 'onCut',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCut',
                    tip: 'onCut | undefined',
                },
            },
            {
                name: 'onCutCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCutCapture',
                    tip: 'onCutCapture | undefined',
                },
            },
            {
                name: 'onPaste',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPaste',
                    tip: 'onPaste | undefined',
                },
            },
            {
                name: 'onPasteCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPasteCapture',
                    tip: 'onPasteCapture | undefined',
                },
            },
            {
                name: 'onCompositionEnd',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCompositionEnd',
                    tip: 'onCompositionEnd | undefined',
                },
            },
            {
                name: 'onCompositionEndCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCompositionEndCapture',
                    tip: 'onCompositionEndCapture | undefined',
                },
            },
            {
                name: 'onCompositionStart',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCompositionStart',
                    tip: 'onCompositionStart | undefined',
                },
            },
            {
                name: 'onCompositionStartCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCompositionStartCapture',
                    tip: 'onCompositionStartCapture | undefined',
                },
            },
            {
                name: 'onCompositionUpdate',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCompositionUpdate',
                    tip: 'onCompositionUpdate | undefined',
                },
            },
            {
                name: 'onCompositionUpdateCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCompositionUpdateCapture',
                    tip: 'onCompositionUpdateCapture | undefined',
                },
            },
            {
                name: 'onFocus',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnFocus',
                    tip: 'onFocus | undefined',
                },
            },
            {
                name: 'onFocusCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnFocusCapture',
                    tip: 'onFocusCapture | undefined',
                },
            },
            {
                name: 'onBlur',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnBlur',
                    tip: 'onBlur | undefined',
                },
            },
            {
                name: 'onBlurCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnBlurCapture',
                    tip: 'onBlurCapture | undefined',
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
                    raw: '(value: Date) => void',
                },
                title: {
                    label: 'OnChange',
                    tip: 'onChange | Called when value changes',
                },
            },
            {
                name: 'onChangeCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnChangeCapture',
                    tip: 'onChangeCapture | undefined',
                },
            },
            {
                name: 'onBeforeInput',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnBeforeInput',
                    tip: 'onBeforeInput | undefined',
                },
            },
            {
                name: 'onBeforeInputCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnBeforeInputCapture',
                    tip: 'onBeforeInputCapture | undefined',
                },
            },
            {
                name: 'onInput',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnInput',
                    tip: 'onInput | undefined',
                },
            },
            {
                name: 'onInputCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnInputCapture',
                    tip: 'onInputCapture | undefined',
                },
            },
            {
                name: 'onReset',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnReset',
                    tip: 'onReset | undefined',
                },
            },
            {
                name: 'onResetCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnResetCapture',
                    tip: 'onResetCapture | undefined',
                },
            },
            {
                name: 'onSubmit',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSubmit',
                    tip: 'onSubmit | undefined',
                },
            },
            {
                name: 'onSubmitCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSubmitCapture',
                    tip: 'onSubmitCapture | undefined',
                },
            },
            {
                name: 'onInvalid',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnInvalid',
                    tip: 'onInvalid | undefined',
                },
            },
            {
                name: 'onInvalidCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnInvalidCapture',
                    tip: 'onInvalidCapture | undefined',
                },
            },
            {
                name: 'onLoad',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoad',
                    tip: 'onLoad | undefined',
                },
            },
            {
                name: 'onLoadCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoadCapture',
                    tip: 'onLoadCapture | undefined',
                },
            },
            {
                name: 'onError',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnError',
                    tip: 'onError | undefined',
                },
            },
            {
                name: 'onErrorCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnErrorCapture',
                    tip: 'onErrorCapture | undefined',
                },
            },
            {
                name: 'onKeyDown',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnKeyDown',
                    tip: 'onKeyDown | undefined',
                },
            },
            {
                name: 'onKeyDownCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnKeyDownCapture',
                    tip: 'onKeyDownCapture | undefined',
                },
            },
            {
                name: 'onKeyPress',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnKeyPress',
                    tip: 'onKeyPress | undefined',
                },
            },
            {
                name: 'onKeyPressCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnKeyPressCapture',
                    tip: 'onKeyPressCapture | undefined',
                },
            },
            {
                name: 'onKeyUp',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnKeyUp',
                    tip: 'onKeyUp | undefined',
                },
            },
            {
                name: 'onKeyUpCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnKeyUpCapture',
                    tip: 'onKeyUpCapture | undefined',
                },
            },
            {
                name: 'onAbort',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAbort',
                    tip: 'onAbort | undefined',
                },
            },
            {
                name: 'onAbortCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAbortCapture',
                    tip: 'onAbortCapture | undefined',
                },
            },
            {
                name: 'onCanPlay',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCanPlay',
                    tip: 'onCanPlay | undefined',
                },
            },
            {
                name: 'onCanPlayCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCanPlayCapture',
                    tip: 'onCanPlayCapture | undefined',
                },
            },
            {
                name: 'onCanPlayThrough',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCanPlayThrough',
                    tip: 'onCanPlayThrough | undefined',
                },
            },
            {
                name: 'onCanPlayThroughCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnCanPlayThroughCapture',
                    tip: 'onCanPlayThroughCapture | undefined',
                },
            },
            {
                name: 'onDurationChange',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDurationChange',
                    tip: 'onDurationChange | undefined',
                },
            },
            {
                name: 'onDurationChangeCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDurationChangeCapture',
                    tip: 'onDurationChangeCapture | undefined',
                },
            },
            {
                name: 'onEmptied',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnEmptied',
                    tip: 'onEmptied | undefined',
                },
            },
            {
                name: 'onEmptiedCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnEmptiedCapture',
                    tip: 'onEmptiedCapture | undefined',
                },
            },
            {
                name: 'onEncrypted',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnEncrypted',
                    tip: 'onEncrypted | undefined',
                },
            },
            {
                name: 'onEncryptedCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnEncryptedCapture',
                    tip: 'onEncryptedCapture | undefined',
                },
            },
            {
                name: 'onEnded',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnEnded',
                    tip: 'onEnded | undefined',
                },
            },
            {
                name: 'onEndedCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnEndedCapture',
                    tip: 'onEndedCapture | undefined',
                },
            },
            {
                name: 'onLoadedData',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoadedData',
                    tip: 'onLoadedData | undefined',
                },
            },
            {
                name: 'onLoadedDataCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoadedDataCapture',
                    tip: 'onLoadedDataCapture | undefined',
                },
            },
            {
                name: 'onLoadedMetadata',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoadedMetadata',
                    tip: 'onLoadedMetadata | undefined',
                },
            },
            {
                name: 'onLoadedMetadataCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoadedMetadataCapture',
                    tip: 'onLoadedMetadataCapture | undefined',
                },
            },
            {
                name: 'onLoadStart',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoadStart',
                    tip: 'onLoadStart | undefined',
                },
            },
            {
                name: 'onLoadStartCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLoadStartCapture',
                    tip: 'onLoadStartCapture | undefined',
                },
            },
            {
                name: 'onPause',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPause',
                    tip: 'onPause | undefined',
                },
            },
            {
                name: 'onPauseCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPauseCapture',
                    tip: 'onPauseCapture | undefined',
                },
            },
            {
                name: 'onPlay',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPlay',
                    tip: 'onPlay | undefined',
                },
            },
            {
                name: 'onPlayCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPlayCapture',
                    tip: 'onPlayCapture | undefined',
                },
            },
            {
                name: 'onPlaying',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPlaying',
                    tip: 'onPlaying | undefined',
                },
            },
            {
                name: 'onPlayingCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPlayingCapture',
                    tip: 'onPlayingCapture | undefined',
                },
            },
            {
                name: 'onProgress',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnProgress',
                    tip: 'onProgress | undefined',
                },
            },
            {
                name: 'onProgressCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnProgressCapture',
                    tip: 'onProgressCapture | undefined',
                },
            },
            {
                name: 'onRateChange',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnRateChange',
                    tip: 'onRateChange | undefined',
                },
            },
            {
                name: 'onRateChangeCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnRateChangeCapture',
                    tip: 'onRateChangeCapture | undefined',
                },
            },
            {
                name: 'onSeeked',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSeeked',
                    tip: 'onSeeked | undefined',
                },
            },
            {
                name: 'onSeekedCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSeekedCapture',
                    tip: 'onSeekedCapture | undefined',
                },
            },
            {
                name: 'onSeeking',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSeeking',
                    tip: 'onSeeking | undefined',
                },
            },
            {
                name: 'onSeekingCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSeekingCapture',
                    tip: 'onSeekingCapture | undefined',
                },
            },
            {
                name: 'onStalled',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnStalled',
                    tip: 'onStalled | undefined',
                },
            },
            {
                name: 'onStalledCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnStalledCapture',
                    tip: 'onStalledCapture | undefined',
                },
            },
            {
                name: 'onSuspend',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSuspend',
                    tip: 'onSuspend | undefined',
                },
            },
            {
                name: 'onSuspendCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSuspendCapture',
                    tip: 'onSuspendCapture | undefined',
                },
            },
            {
                name: 'onTimeUpdate',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTimeUpdate',
                    tip: 'onTimeUpdate | undefined',
                },
            },
            {
                name: 'onTimeUpdateCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTimeUpdateCapture',
                    tip: 'onTimeUpdateCapture | undefined',
                },
            },
            {
                name: 'onVolumeChange',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnVolumeChange',
                    tip: 'onVolumeChange | undefined',
                },
            },
            {
                name: 'onVolumeChangeCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnVolumeChangeCapture',
                    tip: 'onVolumeChangeCapture | undefined',
                },
            },
            {
                name: 'onWaiting',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnWaiting',
                    tip: 'onWaiting | undefined',
                },
            },
            {
                name: 'onWaitingCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnWaitingCapture',
                    tip: 'onWaitingCapture | undefined',
                },
            },
            {
                name: 'onAuxClick',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAuxClick',
                    tip: 'onAuxClick | undefined',
                },
            },
            {
                name: 'onAuxClickCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAuxClickCapture',
                    tip: 'onAuxClickCapture | undefined',
                },
            },
            {
                name: 'onClick',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnClick',
                    tip: 'onClick | undefined',
                },
            },
            {
                name: 'onClickCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnClickCapture',
                    tip: 'onClickCapture | undefined',
                },
            },
            {
                name: 'onContextMenu',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnContextMenu',
                    tip: 'onContextMenu | undefined',
                },
            },
            {
                name: 'onContextMenuCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnContextMenuCapture',
                    tip: 'onContextMenuCapture | undefined',
                },
            },
            {
                name: 'onDoubleClick',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDoubleClick',
                    tip: 'onDoubleClick | undefined',
                },
            },
            {
                name: 'onDoubleClickCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDoubleClickCapture',
                    tip: 'onDoubleClickCapture | undefined',
                },
            },
            {
                name: 'onDrag',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDrag',
                    tip: 'onDrag | undefined',
                },
            },
            {
                name: 'onDragCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragCapture',
                    tip: 'onDragCapture | undefined',
                },
            },
            {
                name: 'onDragEnd',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragEnd',
                    tip: 'onDragEnd | undefined',
                },
            },
            {
                name: 'onDragEndCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragEndCapture',
                    tip: 'onDragEndCapture | undefined',
                },
            },
            {
                name: 'onDragEnter',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragEnter',
                    tip: 'onDragEnter | undefined',
                },
            },
            {
                name: 'onDragEnterCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragEnterCapture',
                    tip: 'onDragEnterCapture | undefined',
                },
            },
            {
                name: 'onDragExit',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragExit',
                    tip: 'onDragExit | undefined',
                },
            },
            {
                name: 'onDragExitCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragExitCapture',
                    tip: 'onDragExitCapture | undefined',
                },
            },
            {
                name: 'onDragLeave',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragLeave',
                    tip: 'onDragLeave | undefined',
                },
            },
            {
                name: 'onDragLeaveCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragLeaveCapture',
                    tip: 'onDragLeaveCapture | undefined',
                },
            },
            {
                name: 'onDragOver',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragOver',
                    tip: 'onDragOver | undefined',
                },
            },
            {
                name: 'onDragOverCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragOverCapture',
                    tip: 'onDragOverCapture | undefined',
                },
            },
            {
                name: 'onDragStart',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragStart',
                    tip: 'onDragStart | undefined',
                },
            },
            {
                name: 'onDragStartCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDragStartCapture',
                    tip: 'onDragStartCapture | undefined',
                },
            },
            {
                name: 'onDrop',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDrop',
                    tip: 'onDrop | undefined',
                },
            },
            {
                name: 'onDropCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnDropCapture',
                    tip: 'onDropCapture | undefined',
                },
            },
            {
                name: 'onMouseDown',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseDown',
                    tip: 'onMouseDown | undefined',
                },
            },
            {
                name: 'onMouseDownCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseDownCapture',
                    tip: 'onMouseDownCapture | undefined',
                },
            },
            {
                name: 'onMouseEnter',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseEnter',
                    tip: 'onMouseEnter | undefined',
                },
            },
            {
                name: 'onMouseLeave',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseLeave',
                    tip: 'onMouseLeave | undefined',
                },
            },
            {
                name: 'onMouseMove',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseMove',
                    tip: 'onMouseMove | undefined',
                },
            },
            {
                name: 'onMouseMoveCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseMoveCapture',
                    tip: 'onMouseMoveCapture | undefined',
                },
            },
            {
                name: 'onMouseOut',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseOut',
                    tip: 'onMouseOut | undefined',
                },
            },
            {
                name: 'onMouseOutCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseOutCapture',
                    tip: 'onMouseOutCapture | undefined',
                },
            },
            {
                name: 'onMouseOver',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseOver',
                    tip: 'onMouseOver | undefined',
                },
            },
            {
                name: 'onMouseOverCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseOverCapture',
                    tip: 'onMouseOverCapture | undefined',
                },
            },
            {
                name: 'onMouseUp',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseUp',
                    tip: 'onMouseUp | undefined',
                },
            },
            {
                name: 'onMouseUpCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnMouseUpCapture',
                    tip: 'onMouseUpCapture | undefined',
                },
            },
            {
                name: 'onSelect',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSelect',
                    tip: 'onSelect | undefined',
                },
            },
            {
                name: 'onSelectCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnSelectCapture',
                    tip: 'onSelectCapture | undefined',
                },
            },
            {
                name: 'onTouchCancel',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchCancel',
                    tip: 'onTouchCancel | undefined',
                },
            },
            {
                name: 'onTouchCancelCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchCancelCapture',
                    tip: 'onTouchCancelCapture | undefined',
                },
            },
            {
                name: 'onTouchEnd',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchEnd',
                    tip: 'onTouchEnd | undefined',
                },
            },
            {
                name: 'onTouchEndCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchEndCapture',
                    tip: 'onTouchEndCapture | undefined',
                },
            },
            {
                name: 'onTouchMove',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchMove',
                    tip: 'onTouchMove | undefined',
                },
            },
            {
                name: 'onTouchMoveCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchMoveCapture',
                    tip: 'onTouchMoveCapture | undefined',
                },
            },
            {
                name: 'onTouchStart',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchStart',
                    tip: 'onTouchStart | undefined',
                },
            },
            {
                name: 'onTouchStartCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTouchStartCapture',
                    tip: 'onTouchStartCapture | undefined',
                },
            },
            {
                name: 'onPointerDown',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerDown',
                    tip: 'onPointerDown | undefined',
                },
            },
            {
                name: 'onPointerDownCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerDownCapture',
                    tip: 'onPointerDownCapture | undefined',
                },
            },
            {
                name: 'onPointerMove',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerMove',
                    tip: 'onPointerMove | undefined',
                },
            },
            {
                name: 'onPointerMoveCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerMoveCapture',
                    tip: 'onPointerMoveCapture | undefined',
                },
            },
            {
                name: 'onPointerUp',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerUp',
                    tip: 'onPointerUp | undefined',
                },
            },
            {
                name: 'onPointerUpCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerUpCapture',
                    tip: 'onPointerUpCapture | undefined',
                },
            },
            {
                name: 'onPointerCancel',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerCancel',
                    tip: 'onPointerCancel | undefined',
                },
            },
            {
                name: 'onPointerCancelCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerCancelCapture',
                    tip: 'onPointerCancelCapture | undefined',
                },
            },
            {
                name: 'onPointerEnter',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerEnter',
                    tip: 'onPointerEnter | undefined',
                },
            },
            {
                name: 'onPointerEnterCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerEnterCapture',
                    tip: 'onPointerEnterCapture | undefined',
                },
            },
            {
                name: 'onPointerLeave',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerLeave',
                    tip: 'onPointerLeave | undefined',
                },
            },
            {
                name: 'onPointerLeaveCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerLeaveCapture',
                    tip: 'onPointerLeaveCapture | undefined',
                },
            },
            {
                name: 'onPointerOver',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerOver',
                    tip: 'onPointerOver | undefined',
                },
            },
            {
                name: 'onPointerOverCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerOverCapture',
                    tip: 'onPointerOverCapture | undefined',
                },
            },
            {
                name: 'onPointerOut',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerOut',
                    tip: 'onPointerOut | undefined',
                },
            },
            {
                name: 'onPointerOutCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnPointerOutCapture',
                    tip: 'onPointerOutCapture | undefined',
                },
            },
            {
                name: 'onGotPointerCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnGotPointerCapture',
                    tip: 'onGotPointerCapture | undefined',
                },
            },
            {
                name: 'onGotPointerCaptureCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnGotPointerCaptureCapture',
                    tip: 'onGotPointerCaptureCapture | undefined',
                },
            },
            {
                name: 'onLostPointerCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLostPointerCapture',
                    tip: 'onLostPointerCapture | undefined',
                },
            },
            {
                name: 'onLostPointerCaptureCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnLostPointerCaptureCapture',
                    tip: 'onLostPointerCaptureCapture | undefined',
                },
            },
            {
                name: 'onScroll',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnScroll',
                    tip: 'onScroll | undefined',
                },
            },
            {
                name: 'onScrollCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnScrollCapture',
                    tip: 'onScrollCapture | undefined',
                },
            },
            {
                name: 'onWheel',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnWheel',
                    tip: 'onWheel | undefined',
                },
            },
            {
                name: 'onWheelCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnWheelCapture',
                    tip: 'onWheelCapture | undefined',
                },
            },
            {
                name: 'onAnimationStart',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAnimationStart',
                    tip: 'onAnimationStart | undefined',
                },
            },
            {
                name: 'onAnimationStartCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAnimationStartCapture',
                    tip: 'onAnimationStartCapture | undefined',
                },
            },
            {
                name: 'onAnimationEnd',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAnimationEnd',
                    tip: 'onAnimationEnd | undefined',
                },
            },
            {
                name: 'onAnimationEndCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAnimationEndCapture',
                    tip: 'onAnimationEndCapture | undefined',
                },
            },
            {
                name: 'onAnimationIteration',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAnimationIteration',
                    tip: 'onAnimationIteration | undefined',
                },
            },
            {
                name: 'onAnimationIterationCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnAnimationIterationCapture',
                    tip: 'onAnimationIterationCapture | undefined',
                },
            },
            {
                name: 'onTransitionEnd',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTransitionEnd',
                    tip: 'onTransitionEnd | undefined',
                },
            },
            {
                name: 'onTransitionEndCapture',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'OnTransitionEndCapture',
                    tip: 'onTransitionEndCapture | undefined',
                },
            },
            {
                name: 'key',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
                title: {
                    label: 'Key',
                    tip: 'key | undefined',
                },
            },
            {
                name: 'hidden',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: '隐藏',
                    tip: 'hidden | undefined',
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
                    tip: 'size | Input size',
                },
            },
            {
                name: 'icon',
                propType: 'node',
                title: {
                    label: '图标',
                    tip: 'icon | Adds icon on the left side of input',
                },
            },
            {
                name: 'disabled',
                propType: 'bool',
                title: {
                    label: 'Disabled',
                    tip: 'disabled | Disabled input state',
                },
            },
            {
                name: 'translate',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Translate',
                    tip: 'translate | undefined',
                },
            },
            {
                name: 'defaultChecked',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'DefaultChecked',
                    tip: 'defaultChecked | undefined',
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
                name: 'suppressContentEditableWarning',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'SuppressContentEditableWarning',
                    tip: 'suppressContentEditableWarning | undefined',
                },
            },
            {
                name: 'suppressHydrationWarning',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'SuppressHydrationWarning',
                    tip: 'suppressHydrationWarning | undefined',
                },
            },
            {
                name: 'accessKey',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'AccessKey',
                    tip: 'accessKey | undefined',
                },
            },
            {
                name: 'contentEditable',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'ContentEditable',
                    tip: 'contentEditable | undefined',
                },
            },
            {
                name: 'contextMenu',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'ContextMenu',
                    tip: 'contextMenu | undefined',
                },
            },
            {
                name: 'dir',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Dir',
                    tip: 'dir | undefined',
                },
            },
            {
                name: 'draggable',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Draggable',
                    tip: 'draggable | undefined',
                },
            },
            {
                name: 'placeholder',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Placeholder',
                    tip: 'placeholder | undefined',
                },
            },
            {
                name: 'spellCheck',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'SpellCheck',
                    tip: 'spellCheck | undefined',
                },
            },
            {
                name: 'radioGroup',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'RadioGroup',
                    tip: 'radioGroup | undefined',
                },
            },
            {
                name: 'about',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'About',
                    tip: 'about | undefined',
                },
            },
            {
                name: 'datatype',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Datatype',
                    tip: 'datatype | undefined',
                },
            },
            {
                name: 'inlist',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Inlist',
                    tip: 'inlist | undefined',
                },
            },
            {
                name: 'prefix',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Prefix',
                    tip: 'prefix | undefined',
                },
            },
            {
                name: 'property',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Property',
                    tip: 'property | undefined',
                },
            },
            {
                name: 'resource',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Resource',
                    tip: 'resource | undefined',
                },
            },
            {
                name: 'typeof',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Typeof',
                    tip: 'typeof | undefined',
                },
            },
            {
                name: 'vocab',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Vocab',
                    tip: 'vocab | undefined',
                },
            },
            {
                name: 'autoCapitalize',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'AutoCapitalize',
                    tip: 'autoCapitalize | undefined',
                },
            },
            {
                name: 'autoCorrect',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'AutoCorrect',
                    tip: 'autoCorrect | undefined',
                },
            },
            {
                name: 'autoSave',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'AutoSave',
                    tip: 'autoSave | undefined',
                },
            },
            {
                name: 'itemProp',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'ItemProp',
                    tip: 'itemProp | undefined',
                },
            },
            {
                name: 'itemScope',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'ItemScope',
                    tip: 'itemScope | undefined',
                },
            },
            {
                name: 'itemType',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Item类型',
                    tip: 'itemType | undefined',
                },
            },
            {
                name: 'itemID',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'ItemID',
                    tip: 'itemID | undefined',
                },
            },
            {
                name: 'itemRef',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'ItemRef',
                    tip: 'itemRef | undefined',
                },
            },
            {
                name: 'results',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Results',
                    tip: 'results | undefined',
                },
            },
            {
                name: 'security',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Security',
                    tip: 'security | undefined',
                },
            },
            {
                name: 'unselectable',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Unselectable',
                    tip: 'unselectable | undefined',
                },
            },
            {
                name: 'inputMode',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'InputMode',
                    tip: 'inputMode | undefined',
                },
            },
            {
                name: 'is',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'Is',
                    tip: 'is | undefined',
                },
            },
            {
                name: 'variant',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'object',
                        {
                            type: 'oneOf',
                            value: ['unstyled', 'default', 'filled'],
                        },
                    ],
                },
                title: {
                    label: 'Variant',
                    tip: 'variant | Defines input appearance, defaults to default in light color scheme and filled in dark',
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
                                                    value: ['dark', 'light'],
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
                                                                'blue',
                                                                'cyan',
                                                                'gray',
                                                                'green',
                                                                'indigo',
                                                                'lime',
                                                                'orange',
                                                                'pink',
                                                                'red',
                                                                'teal',
                                                                'violet',
                                                                'yellow',
                                                                'dark',
                                                                'grape',
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
                                                                            'bold',
                                                                            'normal',
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
                                                                                                            'bold',
                                                                                                            'normal',
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
                                                                                                            'bold',
                                                                                                            'normal',
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
                                                                                                            'bold',
                                                                                                            'normal',
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
                                                                                                            'bold',
                                                                                                            'normal',
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
                                                                                                            'bold',
                                                                                                            'normal',
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
                                                                                                            'bold',
                                                                                                            'normal',
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
                                                                raw: '(offset?: Key) => any',
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
                                                                raw: '(size?: MantineNumberSize) => Key',
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
                                                                                                            'blue',
                                                                                                            'cyan',
                                                                                                            'gray',
                                                                                                            'green',
                                                                                                            'indigo',
                                                                                                            'lime',
                                                                                                            'orange',
                                                                                                            'pink',
                                                                                                            'red',
                                                                                                            'teal',
                                                                                                            'violet',
                                                                                                            'yellow',
                                                                                                            'dark',
                                                                                                            'grape',
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
                                                                                    'dark',
                                                                                    'light',
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
                                                                                    'dark',
                                                                                    'light',
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
                                                                raw: '(theme: Pick<MantineTheme, "radius" | "dir" | "black" | "white" | "fontFamily" | "lineHeight" | "colorScheme" | "transitionTimingFunction" | "primaryShade" | "focusRing" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                raw: '(theme: Pick<MantineTheme, "radius" | "dir" | "black" | "white" | "fontFamily" | "lineHeight" | "colorScheme" | "transitionTimingFunction" | "primaryShade" | "focusRing" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                raw: '(theme: Pick<MantineTheme, "radius" | "dir" | "black" | "white" | "fontFamily" | "lineHeight" | "colorScheme" | "transitionTimingFunction" | "primaryShade" | "focusRing" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                    'dark',
                                                                    'light',
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
                                                                            'blue',
                                                                            'cyan',
                                                                            'gray',
                                                                            'green',
                                                                            'indigo',
                                                                            'lime',
                                                                            'orange',
                                                                            'pink',
                                                                            'red',
                                                                            'teal',
                                                                            'violet',
                                                                            'yellow',
                                                                            'dark',
                                                                            'grape',
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
                                                                                            'bold',
                                                                                            'normal',
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
                                                                                                                            'bold',
                                                                                                                            'normal',
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
                                                                                                                            'bold',
                                                                                                                            'normal',
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
                                                                                                                            'bold',
                                                                                                                            'normal',
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
                                                                                                                            'bold',
                                                                                                                            'normal',
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
                                                                                                                            'bold',
                                                                                                                            'normal',
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
                                                                                                                            'bold',
                                                                                                                            'normal',
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
                                                                                raw: '(offset?: Key) => any',
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
                                                                                raw: '(size?: MantineNumberSize) => Key',
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
                                                                                                                            'blue',
                                                                                                                            'cyan',
                                                                                                                            'gray',
                                                                                                                            'green',
                                                                                                                            'indigo',
                                                                                                                            'lime',
                                                                                                                            'orange',
                                                                                                                            'pink',
                                                                                                                            'red',
                                                                                                                            'teal',
                                                                                                                            'violet',
                                                                                                                            'yellow',
                                                                                                                            'dark',
                                                                                                                            'grape',
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
                                                                                                    'dark',
                                                                                                    'light',
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
                                                                                                    'dark',
                                                                                                    'light',
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
                                                                                raw: '(theme: Pick<MantineTheme, "radius" | "dir" | "black" | "white" | "fontFamily" | "lineHeight" | "colorScheme" | "transitionTimingFunction" | "primaryShade" | "focusRing" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                                raw: '(theme: Pick<MantineTheme, "radius" | "dir" | "black" | "white" | "fontFamily" | "lineHeight" | "colorScheme" | "transitionTimingFunction" | "primaryShade" | "focusRing" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                                                                raw: '(theme: Pick<MantineTheme, "radius" | "dir" | "black" | "white" | "fontFamily" | "lineHeight" | "colorScheme" | "transitionTimingFunction" | "primaryShade" | "focusRing" | ... 18 more ... | "focusRingStyles">) => CSSObject',
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
                                'blue',
                                'cyan',
                                'gray',
                                'green',
                                'indigo',
                                'lime',
                                'orange',
                                'pink',
                                'red',
                                'teal',
                                'violet',
                                'yellow',
                                'dark',
                                'grape',
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
                                'blue',
                                'cyan',
                                'gray',
                                'green',
                                'indigo',
                                'lime',
                                'orange',
                                'pink',
                                'red',
                                'teal',
                                'violet',
                                'yellow',
                                'dark',
                                'grape',
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
                                'bold',
                                'normal',
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
                                'none',
                                'capitalize',
                                'full-size-kana',
                                'full-width',
                                'lowercase',
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
                name: '__preventFocus',
                propType: 'bool',
                title: {
                    label: '__preventFocus',
                    tip: '__preventFocus | Prevents focus shift when buttons are clicked',
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
                name: 'nextIcon',
                propType: 'node',
                title: {
                    label: 'Next图标',
                    tip: 'nextIcon | Change next icon',
                },
            },
            {
                name: 'previousIcon',
                propType: 'node',
                title: {
                    label: 'Previous图标',
                    tip: 'previousIcon | Change previous icon',
                },
            },
            {
                name: 'nextLabel',
                propType: 'string',
                title: {
                    label: 'NextLabel',
                    tip: 'nextLabel | aria-label for next button',
                },
            },
            {
                name: 'previousLabel',
                propType: 'string',
                title: {
                    label: 'PreviousLabel',
                    tip: 'previousLabel | aria-label for previous button',
                },
            },
            {
                name: 'onLevelClick',
                propType: {
                    type: 'func',
                    raw: '() => void',
                },
                title: {
                    label: 'OnLevelClick',
                    tip: 'onLevelClick | Called when level button is clicked',
                },
            },
            {
                name: 'nextDisabled',
                propType: 'bool',
                title: {
                    label: 'NextDisabled',
                    tip: 'nextDisabled | Determines whether next control should be disabled, defaults to true',
                },
            },
            {
                name: 'previousDisabled',
                propType: 'bool',
                title: {
                    label: 'PreviousDisabled',
                    tip: 'previousDisabled | Determines whether previous control should be disabled, defaults to true',
                },
            },
            {
                name: 'hasNextLevel',
                propType: 'bool',
                title: {
                    label: 'HasNextLevel',
                    tip: 'hasNextLevel | Determines whether next level button should be enabled, defaults to true',
                },
            },
            {
                name: 'withNext',
                propType: 'bool',
                title: {
                    label: 'WithNext',
                    tip: 'withNext | Determines whether next control should be rendered, defaults to true',
                },
            },
            {
                name: 'withPrevious',
                propType: 'bool',
                title: {
                    label: 'WithPrevious',
                    tip: 'withPrevious | Determines whether previous control should be rendered, defaults to true',
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
                name: 'autoFocus',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'AutoFocus',
                    tip: 'autoFocus | undefined',
                },
            },
            {
                name: 'formAction',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'FormAction',
                    tip: 'formAction | undefined',
                },
            },
            {
                name: 'formEncType',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'FormEnc类型',
                    tip: 'formEncType | undefined',
                },
            },
            {
                name: 'formMethod',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'FormMethod',
                    tip: 'formMethod | undefined',
                },
            },
            {
                name: 'formNoValidate',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'FormNoValidate',
                    tip: 'formNoValidate | undefined',
                },
            },
            {
                name: 'formTarget',
                propType: {
                    type: 'object',
                    isRequired: true,
                },
                title: {
                    label: 'FormTarget',
                    tip: 'formTarget | undefined',
                },
            },
            {
                name: 'value',
                propType: 'object',
                title: {
                    label: 'Value',
                    tip: 'value | Controlled component value',
                },
            },
            {
                name: 'readOnly',
                propType: 'bool',
                title: {
                    label: 'ReadOnly',
                    tip: 'readOnly | Determines whether the user can modify the value',
                },
            },
            {
                name: 'required',
                propType: 'bool',
                title: {
                    label: 'Required',
                    tip: 'required | Sets required on input element',
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
                name: 'firstDayOfWeek',
                propType: {
                    type: 'oneOf',
                    value: [0, 1, 2, 3, 4, 5, 6],
                },
                title: {
                    label: 'FirstDayOfWeek',
                    tip: 'firstDayOfWeek | number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday',
                },
            },
            {
                name: 'weekendDays',
                propType: {
                    type: 'arrayOf',
                    value: {
                        type: 'oneOf',
                        value: [0, 1, 2, 3, 4, 5, 6],
                    },
                },
                title: {
                    label: 'WeekendDays',
                    tip: 'weekendDays | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider',
                },
            },
            {
                name: 'labelSeparator',
                propType: 'string',
                title: {
                    label: 'LabelSeparator',
                    tip: 'labelSeparator | Separator between range value',
                },
            },
            {
                name: 'weekdayFormat',
                propType: 'string',
                title: {
                    label: 'WeekdayFormat',
                    tip: 'weekdayFormat | dayjs format for weekdays names, defaults to "dd"',
                },
            },
            {
                name: 'error',
                propType: 'node',
                title: {
                    label: 'Error',
                    tip: 'error | Displays error message after input',
                },
            },
            {
                name: 'renderDay',
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
                    raw: '(date: Date) => ReactNode',
                },
                title: {
                    label: 'RenderDay',
                    tip: 'renderDay | Controls day value rendering',
                },
            },
            {
                name: '__onDayClick',
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
                    label: '__onDayClick',
                    tip: '__onDayClick | Called when day is clicked with click event and date',
                },
            },
            {
                name: '__onDayMouseEnter',
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
                    label: '__onDayMouseEnter',
                    tip: '__onDayMouseEnter | Called when mouse enters day',
                },
            },
            {
                name: '__onDayKeyDown',
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
                    label: '__onDayKeyDown',
                    tip: '__onDayKeyDown | Called when any keydown event is registered on day, used for arrows navigation',
                },
            },
            {
                name: '__getDayRef',
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
                    label: '__getDayRef',
                    tip: '__getDayRef | Assigns ref of every day based on its position in the table, used for arrows navigation',
                },
            },
            {
                name: 'getDayProps',
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
                    raw: '(date: Date) => Partial<DayProps>',
                },
                title: {
                    label: 'GetDayProps',
                    tip: 'getDayProps | Adds props to Day component based on date',
                },
            },
            {
                name: 'excludeDate',
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
                    raw: '(date: Date) => boolean',
                },
                title: {
                    label: 'ExcludeDate',
                    tip: 'excludeDate | Callback function to determine whether the day should be disabled',
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
                name: 'hideOutsideDates',
                propType: 'bool',
                title: {
                    label: 'HideOutsideDates',
                    tip: 'hideOutsideDates | Determines whether outside dates should be hidden, defaults to false',
                },
            },
            {
                name: 'hideWeekdays',
                propType: 'bool',
                title: {
                    label: 'HideWeekdays',
                    tip: 'hideWeekdays | Determines whether weekdays row should be hidden, defaults to false',
                },
            },
            {
                name: 'getDayAriaLabel',
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
                    raw: '(date: Date) => string',
                },
                title: {
                    label: 'GetDayAriaLabel',
                    tip: 'getDayAriaLabel | Assigns aria-label to days based on date',
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
                name: 'monthLabelFormat',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'string',
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'month',
                                    propType: 'object',
                                },
                            ],
                            raw: '(month: Date) => ReactNode',
                        },
                    ],
                },
                title: {
                    label: 'MonthLabelFormat',
                    tip: 'monthLabelFormat | dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY"',
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
                name: 'monthsListFormat',
                propType: 'string',
                title: {
                    label: 'MonthsListFormat',
                    tip: 'monthsListFormat | dayjs format for months list',
                },
            },
            {
                name: 'getMonthControlProps',
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
                    label: 'GetMonthControlProps',
                    tip: 'getMonthControlProps | Adds props to month picker control based on date',
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
                name: 'yearLabelFormat',
                propType: {
                    type: 'oneOfType',
                    value: [
                        'string',
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'year',
                                    propType: 'object',
                                },
                            ],
                            raw: '(year: Date) => ReactNode',
                        },
                    ],
                },
                title: {
                    label: 'YearLabelFormat',
                    tip: 'yearLabelFormat | dayjs label format to display year label or a function that returns year label based on year value, defaults to "YYYY"',
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
                name: 'defaultLevel',
                propType: {
                    type: 'oneOf',
                    value: ['month', 'year', 'decade'],
                },
                title: {
                    label: 'DefaultLevel',
                    tip: 'defaultLevel | Initial level displayed to the user (decade, year, month), used for uncontrolled component',
                },
            },
            {
                name: 'level',
                propType: {
                    type: 'oneOf',
                    value: ['month', 'year', 'decade'],
                },
                title: {
                    label: 'Level',
                    tip: 'level | Current level displayed to the user (decade, year, month), used for controlled component',
                },
            },
            {
                name: 'onLevelChange',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'level',
                            propType: {
                                type: 'oneOf',
                                value: ['month', 'year', 'decade'],
                            },
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(level: CalendarLevel) => void',
                },
                title: {
                    label: 'OnLevelChange',
                    tip: 'onLevelChange | Called when level changes',
                },
            },
            {
                name: 'onYearSelect',
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
                    label: 'OnYearSelect',
                    tip: 'onYearSelect | Called when user clicks year on decade level',
                },
            },
            {
                name: 'onMonthSelect',
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
                    label: 'OnMonthSelect',
                    tip: 'onMonthSelect | Called when user clicks month on year level',
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
                name: 'onNextYear',
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
                    label: 'OnNextYear',
                    tip: 'onNextYear | Called when next year button is clicked',
                },
            },
            {
                name: 'onPreviousYear',
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
                    label: 'OnPreviousYear',
                    tip: 'onPreviousYear | Called when previous year button is clicked',
                },
            },
            {
                name: 'onNextMonth',
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
                    label: 'OnNextMonth',
                    tip: 'onNextMonth | Called when next month button is clicked',
                },
            },
            {
                name: 'onPreviousMonth',
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
                    label: 'OnPreviousMonth',
                    tip: 'onPreviousMonth | Called when previous month button is clicked',
                },
            },
            {
                name: 'rightSection',
                propType: 'node',
                title: {
                    label: '右Section',
                    tip: 'rightSection | Right section of input, similar to icon but on the right',
                },
            },
            {
                name: 'description',
                propType: 'node',
                title: {
                    label: 'Description',
                    tip: 'description | Input description, displayed after label',
                },
            },
            {
                name: 'popoverProps',
                propType: 'object',
                title: {
                    label: 'PopoverProps',
                    tip: 'popoverProps | Props added to Popover component',
                },
            },
            {
                name: 'clearable',
                propType: 'bool',
                title: {
                    label: 'Clearable',
                    tip: 'clearable | Determines whether input value can be cleared, adds clear button to right section, false by default',
                },
            },
            {
                name: 'clearButtonProps',
                propType: 'object',
                title: {
                    label: 'ClearButtonProps',
                    tip: 'clearButtonProps | Props added to clear button',
                },
            },
            {
                name: 'valueFormat',
                propType: 'string',
                title: {
                    label: 'ValueFormat',
                    tip: 'valueFormat | Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default',
                },
            },
            {
                name: 'iconWidth',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '图标Width',
                    tip: 'iconWidth | Width of icon section',
                },
            },
            {
                name: 'rightSectionWidth',
                propType: {
                    type: 'oneOfType',
                    value: ['string', 'number', 'object'],
                },
                title: {
                    label: '右SectionWidth',
                    tip: 'rightSectionWidth | Width of right section, is used to calculate input padding-right',
                },
            },
            {
                name: 'rightSectionProps',
                propType: 'object',
                title: {
                    label: '右SectionProps',
                    tip: 'rightSectionProps | Props spread to rightSection div element',
                },
            },
            {
                name: 'wrapperProps',
                propType: 'object',
                title: {
                    label: 'WrapperProps',
                    tip: 'wrapperProps | Properties spread to root element',
                },
            },
            {
                name: 'withAsterisk',
                propType: 'bool',
                title: {
                    label: 'WithAsterisk',
                    tip: 'withAsterisk | Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input',
                },
            },
            {
                name: 'labelProps',
                propType: 'object',
                title: {
                    label: 'LabelProps',
                    tip: 'labelProps | Props spread to label element',
                },
            },
            {
                name: 'descriptionProps',
                propType: 'object',
                title: {
                    label: 'DescriptionProps',
                    tip: 'descriptionProps | Props spread to description element',
                },
            },
            {
                name: 'errorProps',
                propType: 'object',
                title: {
                    label: 'ErrorProps',
                    tip: 'errorProps | Props spread to error element',
                },
            },
            {
                name: 'inputContainer',
                propType: {
                    type: 'func',
                    params: [
                        {
                            name: 'children',
                            propType: 'node',
                        },
                    ],
                    returns: {
                        propType: 'number',
                    },
                    raw: '(children: ReactNode) => ReactNode',
                },
                title: {
                    label: 'InputContainer',
                    tip: 'inputContainer | Input container component, defaults to React.Fragment',
                },
            },
            {
                name: 'inputWrapperOrder',
                propType: {
                    type: 'arrayOf',
                    value: {
                        type: 'oneOf',
                        value: ['label', 'error', 'description', 'input'],
                    },
                },
                title: {
                    label: 'InputWrapperOrder',
                    tip: 'inputWrapperOrder | Controls order of the Input.Wrapper elements',
                },
            },
            {
                name: 'sortDates',
                propType: 'bool',
                title: {
                    label: 'SortDates',
                    tip: 'sortDates | Determines whether dates value should be sorted before onChange call, only applicable when type="multiple", true by default',
                },
            },
            {
                name: 'dropdownType',
                propType: {
                    type: 'oneOf',
                    value: ['popover', 'modal'],
                },
                title: {
                    label: 'Dropdown类型',
                    tip: 'dropdownType | Type of dropdown, defaults to popover',
                },
            },
            {
                name: 'modalProps',
                propType: 'object',
                title: {
                    label: 'ModalProps',
                    tip: 'modalProps | Props added to Modal component',
                },
            },
            {
                name: 'withSeconds',
                propType: 'bool',
                title: {
                    label: 'WithSeconds',
                    tip: 'withSeconds | Determines whether seconds input should be rendered',
                },
            },
            {
                name: 'timeInputProps',
                propType: {
                    type: 'shape',
                    value: [
                        {
                            name: 'withSeconds',
                            propType: 'bool',
                        },
                    ],
                },
                title: {
                    label: 'TimeInputProps',
                    tip: 'timeInputProps | TimeInput component props',
                },
            },
            {
                name: 'submitButtonProps',
                propType: {
                    type: 'shape',
                    value: [
                        {
                            name: '__staticSelector',
                            propType: 'string',
                        },
                        {
                            name: 'children',
                            propType: 'node',
                        },
                        {
                            name: 'variant',
                            propType: {
                                type: 'oneOfType',
                                value: [
                                    'object',
                                    {
                                        type: 'oneOf',
                                        value: [
                                            'transparent',
                                            'default',
                                            'filled',
                                            'outline',
                                            'light',
                                            'subtle',
                                            'gradient',
                                        ],
                                    },
                                ],
                            },
                        },
                        {
                            name: 'color',
                            propType: {
                                type: 'oneOfType',
                                value: [
                                    'object',
                                    {
                                        type: 'oneOf',
                                        value: [
                                            'blue',
                                            'cyan',
                                            'gray',
                                            'green',
                                            'indigo',
                                            'lime',
                                            'orange',
                                            'pink',
                                            'red',
                                            'teal',
                                            'violet',
                                            'yellow',
                                            'dark',
                                            'grape',
                                        ],
                                    },
                                ],
                            },
                        },
                        {
                            name: 'gradient',
                            propType: {
                                type: 'shape',
                                value: [
                                    {
                                        name: 'from',
                                        propType: {
                                            type: 'string',
                                            isRequired: true,
                                        },
                                    },
                                    {
                                        name: 'to',
                                        propType: {
                                            type: 'string',
                                            isRequired: true,
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
                            name: 'radius',
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
                        },
                        {
                            name: 'size',
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
                        },
                        {
                            name: 'loaderProps',
                            propType: {
                                type: 'shape',
                                value: [
                                    {
                                        name: 'size',
                                        propType: {
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
                                    {
                                        name: 'color',
                                        propType: {
                                            type: 'oneOfType',
                                            value: [
                                                'object',
                                                {
                                                    type: 'oneOf',
                                                    value: [
                                                        'blue',
                                                        'cyan',
                                                        'gray',
                                                        'green',
                                                        'indigo',
                                                        'lime',
                                                        'orange',
                                                        'pink',
                                                        'red',
                                                        'teal',
                                                        'violet',
                                                        'yellow',
                                                        'dark',
                                                        'grape',
                                                    ],
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        name: 'variant',
                                        propType: {
                                            type: 'oneOf',
                                            value: ['bars', 'oval', 'dots'],
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            name: 'loading',
                            propType: 'bool',
                        },
                        {
                            name: 'disabled',
                            propType: 'bool',
                        },
                    ],
                },
                title: {
                    label: 'SubmitButtonProps',
                    tip: 'submitButtonProps | Props added to submit button',
                },
            },
            {
                name: 'ref',
                propType: {
                    type: 'oneOfType',
                    value: [
                        {
                            type: 'func',
                            params: [
                                {
                                    name: 'instance',
                                    propType: 'object',
                                },
                            ],
                            returns: {
                                propType: 'number',
                            },
                            raw: '(instance: HTMLButtonElement) => void',
                        },
                        'object',
                    ],
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
                title: 'DateTimePicker',
                schema: {
                    componentName: 'MantineDateTimePicker',
                    props: {},
                },
            },
        ],
    },
] as IPublicTypeComponentMetadata[]
