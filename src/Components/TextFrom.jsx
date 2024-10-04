import React, { useState } from 'react'
import {  Field, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'



export default function TextFrom(props) {
    const [text, setText] = useState('');
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    return (
        <div className="w-full max-w-3xl px-4 text-black    py-3  mx-auto ">
            <Field>
                <Label className="text-xl/6 font-medium text-black">{props.heading}</Label>
                <Textarea
                    className={clsx(
                        'mt-3 block w-full resize-none rounded-lg border-2 border-blue-200/50 bg-white py-1.5 px-3 text-sm/6 text-black ',
                        'focus:outline-none data-[focus]:border-blue-200'
                    )}
                    value={text}
                    onChange={(e)=>{
                        setText(e.target.value);
                    }}
                    placeholder='Enter text here'
                    rows={7}
                />
            </Field>
            <button className='py-2 px-5 mt-3 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 active:outline-none active:ring active:ring-violet-400 active:ring-opacity-75' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
