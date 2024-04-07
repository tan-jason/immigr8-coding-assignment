import React from "react";
import InputField from "./common/InputField";
import InputCheckbox from "./common/InputCheckbox";
import "./backgroundinformationstyle.css";
import NextButton from "./common/NextButton";

const BackgroundInformationSection = ({ handleInputChange, formData }) => {
  return (
    <div className="form_wrapper">
      <form className="background_information_form_wrapper">
        <InputField
          fieldName="Name of the Petitioner"
          onChange={(value) => handleInputChange("petitionerName", value)}
        />
        <InputField
          fieldName="Name of the Beneficiary"
          onChange={(value) => handleInputChange("beneficiaryName", value)}
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
          onChange={(value) =>
            handleInputChange("employsFiftyPlusIndividuals", value)
          }
        />
        <InputCheckbox
          question="If yes, are more than 50 percent of those employee in H-1B, L-1A, or L1-B nonimmigrant status?"
          checkboxSet={["Yes", "No"]}
          onChange={(value) =>
            handleInputChange("hasFiftyPlusNonImmigrantStatus", value)
          }
        />
      </form>
      <NextButton
        nextPage={
          formData.petitionType === "a. An individual petition"
            ? "/individual-petition/first"
            : "/blank-petition"
        }
      />
    </div>
  );
};

export default BackgroundInformationSection;
