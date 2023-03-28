import React from 'react'

function TextInput({label,value,handleChange,placeHolder,inputType,isTextArea}) {
  return (
    <div>
        <div>

        <label>{label}</label>
        </div>
        <div>

        {isTextArea ?<textarea value={value} onChange={handleChange} placeholder={placeHolder} type={inputType}/>: <input value={value} onChange={handleChange} placeholder={placeHolder} type={inputType}/>}
        </div>
    </div>
  )
}

export default TextInput