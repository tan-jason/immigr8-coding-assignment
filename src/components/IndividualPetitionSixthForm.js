import { useState } from "react";
import "./individualpetitionform.css";
import SubmitButton from "./common/SubmitButton";
import PreviousButton from "./common/PreviousButton";
import InputParagraph from "./common/InputParagraph";
import InputCheckbox from "./common/InputCheckbox";

const IndividualPetitionSixthForm = () => {
  const [formData, setFormData] = useState({
    comingToStates: "",
    stationedOffSite: "",
    describeSupervision: "",
    describePlacement: "",
  });

  const handleOnSubmit = () => {};

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <>
      <div className="form_wrapper">
        <h2>Complete This Section If Filling for An Individual Petition</h2>
        <InputCheckbox
          question={
            "Is the beneficiary coming to the United States to open a new office?"
          }
          checkboxSet={["Yes", "No (attach explanation)"]}
          onChange={(value) => handleInputChange("comingToStates", value)}
        />
        <h3>
          <b>
            If you are seeking L-1B specialized knowledge status for an
            individual, answer the following question:
          </b>
        </h3>
        <InputCheckbox
          question={
            "Will the beneficiary be stationed primarily offsite (at the worksite of an employer other than the petitioner or its affiliate, subsidiary, or parent)?"
          }
          checkboxSet={["Yes", "No "]}
          onChange={(value) => handleInputChange("stationedOffSite", value)}
        />
        <InputParagraph
          question={
            "If you answered yes to the preceeding question, describe how and by whom the beneficiary's work will be controlled and supervised. Include a description of the amount of time each supervisor is expected to control and supervise the work. If you need additional space to respond to this question, proceed to Part 9 of the Form I-129, and type or print your explanation."
          }
          handleInputChange={(value) =>
            handleInputChange("describeSupervision", value)
          }
          width="50%"
          numRows={4}
        />
        <InputParagraph
          question={
            "If you answered yes to the preceeding question, describe the reasons why placement at another worksite outisd ehte petitioner, subsidiary, affiliate, or parent is needed. Include a description of how the beneficiary's duties at another worksite relate to the need for the specialized knowledge he or she possesses. If you need additional space to respond to this question, proceed to Part 9 of the Form I-129, and type or print your explanation."
          }
          handleInputChange={(value) =>
            handleInputChange("describePlacement", value)
          }
          width="50%"
          numRows={5}
        />

        <div className="button_container">
          <PreviousButton />
          <SubmitButton
            nextPage={"/additional-fees"}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionSixthForm;
