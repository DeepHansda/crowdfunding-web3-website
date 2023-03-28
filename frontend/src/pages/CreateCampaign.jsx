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
    <div>
      <div>
        <h2>Create Campaign</h2>
      </div>

      <div>
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

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCampaign;
