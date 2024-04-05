import React, { useState } from "react";
import InputField from "./common/InputField";
import InputCheckbox from "./common/InputCheckbox";
import "./backgroundinformationstyle.css";
import SubmitButton from "./common/SubmitButton";

const BackgroundInformationSection = () => {
  const [formData, setFormData] = useState({
    petitionerName: "",
    beneficiary: "",
    petitionType: "",
    employsFiftyOrMore: "",
    immigrantStatus: "",
  });

  const handleOnSubmit = () => {
    const formDataObject = {};
    Object.entries(formData).forEach((value, key) => {
      formDataObject[key] = value;
    });

    // TODO: call endpoint and store in DB
    console.log(formDataObject); // Log the form data
    return false;
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="form_wrapper">
      <form className="background_information_form_wrapper">
        <InputField
          fieldName="Name of the Petitioner"
          onChange={(value) => handleInputChange("petitionerName", value)}
        />
        <InputField
          fieldName="Name of the Beneficiary"
          onChange={(value) => handleInputChange("beneficiary", value)}
        />
        <InputCheckbox
          question={
            <p>
              This petition is (select <b>only one</b> box):{" "}
            </p>
          }
          checkboxSet={["a. An individual petition", "b. A blanket petition"]}
          onChange={(value) => handleInputChange("petitionType", value)}
        />
        <InputCheckbox
          question="Does the petitioner employ 50 or more individuals in the U.S.?"
          checkboxSet={["Yes", "No"]}
          onChange={(value) => handleInputChange("employsFiftyOrMore", value)}
        />
        <InputCheckbox
          question="If yes, are more than 50 percent of those employee in H-1B, L-1A, or L1-B nonimmigrant status?"
          checkboxSet={["Yes", "No"]}
          onChange={(value) => handleInputChange("immigrantStatus", value)}
        />
      </form>
      <SubmitButton
        nextPage={
          formData.petitionType === "a. An individual petition"
            ? "/individual-petition/first"
            : "/blanket-petition"
        }
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
};

export default BackgroundInformationSection;
