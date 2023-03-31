import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { useStateContext } from "../context";
import { checkIfImage } from "../utils";
import { ethers } from "ethers";

function CreateCampaign() {
  const { publishCampaign } = useStateContext();
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleInputValues = (title, e) => {
    const value = e.target.value;
    setInputValues({ ...inputValues, [title]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    checkIfImage(inputValues.image, async (exist) => {
      if (exist) {
        await publishCampaign({
          ...inputValues,
          target: ethers.utils.parseUnits(inputValues.target, 18),
        });
      } else {
        alert("Please enter Valid image url");
        setInputValues({ ...inputValues, image: "" });
      }
    });
  };
  console.log(inputValues);

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="w-[400px] bg-[#343a40] text-center rounded-xl py-5 shadow-md hover:shadow-[0_0px_16px_4px_#db00b6] transition-all duration-300">
      <div className="w-full text-center" >
        <h2 className="bg-[#495057] w-fit mx-auto px-5 py-2 font-bold text-xl uppercase text-[#db00b6] rounded-lg shadow-lg">Create Campaign</h2>
      </div>

      <div className="px-10">
        <div>
          <form onSubmit={submitHandler}>
            <TextInput
              label="Title"
              placeHolder="Enter Campaign Title"
              value={inputValues.title}
              handleChange={(e) => handleInputValues("title", e)}
              inputType="text"
            />
            <TextInput
              isTextArea={true}
              placeHolder="Enter Description"
              value={inputValues.description}
              label="Story"
              handleChange={(e) => handleInputValues("description", e)}
              inputType="text"
            />
            <TextInput
              label="End Date"
              value={inputValues.deadline}
              inputType="date"
              placeHolder="01/01/00"
              handleChange={(e) => handleInputValues("deadline", e)}

            />
            <TextInput
              label="Target"
              value={inputValues.target}
              inputType="text"
              placeHolder="0.2 ETH"
              handleChange={(e) => handleInputValues("target", e)}

            />
            <TextInput
              label="Image"
              value={inputValues.image}
              inputType="text"
              placeHolder="Enter Image url"
              handleChange={(e) => handleInputValues("image", e)}

            />

            <button className="px-4 py-2 shadow-sm shadow-black hover:shadow-[0_0px_16px_4px_#db00b6] rounded border border-black font-[Montserrat] text-[#db00b6] uppercase mt-6" type="submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CreateCampaign;
