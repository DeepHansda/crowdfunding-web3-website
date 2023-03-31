import React from "react";

function TextInput({
  label,
  value,
  handleChange,
  placeHolder,
  inputType,
  isTextArea,
}) {
  return (
    <div className="mt-4">
      <div className="text-left text-[#ffffff61] text-sm">
        <label>{label}*</label>
      </div>
      <div className="mt-2">
        {isTextArea ? (
          <textarea
            value={value}
            onChange={handleChange}
            placeholder={placeHolder}
            type={inputType}
            className="py-[10px] px-[20px] shadow-sm shadow-black rounded-xl hover:shadow-[0_0px_16px_4px_#db00b6] focus:shadow-[0_0px_16px_4px_#db00b6] border border-black mr-4 text-white outline-none  font-[Montserrat] text-xs w-full bg-[#495057] mt"
          />
        ) : (
          <input
            value={value}
            onChange={handleChange}
            placeholder={placeHolder}
            type={inputType}
            className="py-[10px] px-[20px] shadow-sm shadow-black rounded-full hover:shadow-[0_0px_16px_4px_#db00b6] focus:shadow-[0_0px_16px_4px_#db00b6] border border-black mr-4 text-white outline-none font-[Montserrat] text-xs w-full bg-[#495057] mt"
          />
        )}
      </div>
    </div>
  );
}

export default TextInput;
