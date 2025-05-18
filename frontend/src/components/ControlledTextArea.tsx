import type { ReactNode } from "react"
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form"

type Props<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    control: Control<TFieldValues>
    name: TName
    label: ReactNode
    placeholder?: string
}

export default function ControlledTextArea<
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
                <textarea rows={4} className="border rounded-md p-2 w-full" {...field} placeholder={placeholder} />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
        )}
    />
  )
}