import React from 'react'
import { Description, Field, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'

export default function TextFrom(props) {
    return (
        <div className="w-full max-w-3xl px-4 text-black    py-3  mx-auto ">
            <Field>
                <Label className="text-xl/6 font-medium text-black">{props.heading}</Label>
                <Textarea
                    className={clsx(
                        'mt-3 block w-full resize-none rounded-lg border-4 border-blue-200/50 bg-white py-1.5 px-3 text-sm/6 text-black ',
                        'focus:outline-none data-[focus]:border-blue-200'
                    )}
                    rows={7}
                />
            </Field>
        </div>
    )
}
