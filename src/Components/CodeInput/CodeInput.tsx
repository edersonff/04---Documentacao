import React, { useRef } from 'react'
import './CodeInput.scss'

export default function CodeInput({onChange, language, value, setValue} : {onChange?: () => void, language?: string, value?: string, setValue?: (value: string) => void}) {
    const refInput = useRef<HTMLInputElement>(null);
    function formater(){
        if(language === 'javascript'){
        }
        if(onChange){
            onChange();
        }
        if(setValue){
            setValue(refInput.current?.value ?? '')
        }
    }
    return (
        <input className='code-input' type="text" ref={refInput} value={value} onChange={()=>{formater()}} />
    )
}