import { JsonInput, type JsonInputProps } from '@mantine/core'

const Component = JsonInput as React.FC<
    Omit<JsonInputProps, 'serialize' | 'deserialize'>
>
export default Component
