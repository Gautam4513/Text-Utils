import React, { useState } from 'react'
import { Field, Label, Textarea, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
    const handleClear = () => {
        setText("");
    }
    const handleCopy = async () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    toast.success('copid successfuly', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                })
                .catch((err) => {
                    
                    console.error('Error copying text: ', err);
                });
        } else {
            toast.warn('Clipboard API is not supported.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            console.log('Clipboard API is not supported.');
        }
    };
    const handlePaste =()=>{
        if(navigator.clipboard){
            navigator.clipboard.readText().then(data=>{
                setText(data);
            }).catch(err=>{
                console.error(err);
            })
        }
    }
    const handleExtraSpaces = () =>{
        setText(text.split(/ +/).join(" "));
    }
    const btns =[
        {
            "name":"Convert to Uppercase",
            "fun":handleUpClick
        },
        {
            "name":"Convert to Lowercase",
            "fun":handleLoClick
        },
        {
            "name":"clear text",
            "fun":handleClear
        },
        {
            "name":"copy text",
            "fun":handleCopy
        },
        {
            "name":"paste Text",
            "fun":handlePaste
        },
        {
            "name":"Remove extra spaces",
            "fun":handleExtraSpaces
        }
    ]
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
            <div className="editMenu  absolute top-10 lg:top-0 scale-75 lg:scale-100 right-0">
                <Menu>
                    <MenuButton className={clsx('group px-2 bg-violet-500/50 rounded-md flex gap-2 py-2 ')}>
                        <PencilIcon className='size-6 fill-black/60 ' />
                        <p>Edit Options</p>
                        <ChevronDownIcon className="size-6 fill-black/60 group-data-[open]:rotate-180 transition-all ease-in-out duration-100" />
                    </MenuButton>
                    <MenuItems
                        transition
                        anchor={{ to: "bottom end", gap: "5px" }}

                        className="w-52 flex flex-col gap-3 p-2 origin-top-right rounded-xl border border-black/5 bg-black/10  text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                            {btns.map((item,index)=>{
                                return <MenuItem key={index}>
                                <button className='py-2 px-5  bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 active:outline-none active:ring active:ring-violet-400 active:ring-opacity-75' onClick={item.fun}>{item.name}</button>
                            </MenuItem>
                            })}
                    </MenuItems>
                </Menu>
            </div>


            <div className="preview ">
                <h1 className='text-3xl font-bold'>Yout text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>element.length!==0).length} words , {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>element.length!==0).length} minitus to read</p>
                <h2 className='text-2xl font-bold '>Privew</h2>
                <p>{text}</p>
            </div>
            <ToastContainer />
        </div>
    )
}
