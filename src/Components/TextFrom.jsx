import React, { useState } from 'react'
import { Field, Label, Textarea, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import {
    ChevronDownIcon,
    PencilIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx'



export default function TextFrom(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLocaleLowerCase());
    }
    return (
        <div className="w-full max-w-3xl px-4 text-black    py-3  mx-auto relative ">
            <Field>
                <Label className="text-xl/6 font-medium text-black">{props.heading}</Label>
                <Textarea
                    className={clsx(
                        'mt-3 block w-full resize-none rounded-lg border-2 border-blue-200/50 bg-white py-1.5 px-3 text-sm/6 text-black ',
                        'focus:outline-none data-[focus]:border-blue-200'
                    )}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    placeholder='Enter text here'
                    rows={7}
                />
            </Field>
            <div className="editMenu absolute top-0 right-0">
                <Menu>
                    <MenuButton className={clsx('group px-2 bg-violet-500/50 rounded-md flex gap-2 py-2 ')}>
                        <PencilIcon className='size-6 fill-black/60 ' />
                        <p>Edit Options</p>
                        <ChevronDownIcon className="size-6 fill-black/60 group-data-[open]:rotate-180 transition-all ease-in-out duration-100" />
                    </MenuButton>
                    <MenuItems
                        transition
                        anchor={{to:"bottom end" , gap:"5px"}}
                        
                        className="w-52 flex flex-col gap-3 p-2 origin-top-right rounded-xl border border-black/5 bg-black/10  text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                        <MenuItem className="">
                            <button className='py-2 px-5  bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 active:outline-none active:ring active:ring-violet-400 active:ring-opacity-75' onClick={handleUpClick}>Convert to Uppercase</button>
                        </MenuItem>
                        <MenuItem className="">
                            <button className='py-2 px-5  bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 active:outline-none active:ring active:ring-violet-400 active:ring-opacity-75' onClick={handleLoClick}>Convert to Lowercase</button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>


            <div className="preview ">
                <h1 className='text-3xl font-bold'>Yout text summary</h1>
                <p>{text.split(" ").length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minitus to read</p>
                <h2 className='text-2xl font-bold '>Privew</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
