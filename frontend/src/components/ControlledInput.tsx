import type { ReactNode } from 'react'
import { type Control, Controller, type FieldPath, type FieldValues } from 'react-hook-form'

type Props<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    control: Control<TFieldValues>
    name: TName
    label: ReactNode
    placeholder?: string
}

export default function ControlledInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, placeholder }: Props<TFieldValues, TName>) {
    return (
        <Controller<TFieldValues>
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-gray-800 text-sm font-bold">{label}</label>
                    <input className={`border rounded-md p-2 w-full ${error ? 'border-red-500' : ''}`} {...field} placeholder={placeholder} />
                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                </div>
            )}
        />
    )
}