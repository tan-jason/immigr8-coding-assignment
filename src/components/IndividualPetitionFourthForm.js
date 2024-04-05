import { useState } from "react";
import "./individualpetitionform.css";
import SubmitButton from "./common/SubmitButton";
import PreviousButton from "./common/PreviousButton";
import InputParagraph from "./common/InputParagraph";
import InputCheckbox from "./common/InputCheckbox";

const IndividualPetitionFourthForm = () => {
  const [formData, setFormData] = useState({
    beneficiaryDuties: "",
    beneficiaryExperience: "",
    companyRelation: "",
  });

  const handleOnSubmit = () => {};

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <>
      <div className="form_wrapper">
        <h2>Complete This Section If Filling for An Individual Petition</h2>
        <InputParagraph
          question={
            "Describe the beneficiary's proposed duties in the United States."
          }
          handleInputChange={(value) =>
            handleInputChange("beneficiaryDuties", value)
          }
          width="50%"
        />
        <InputParagraph
          question={"Describe the beneficiary's education and work experience"}
          handleInputChange={(value) =>
            handleInputChange("beneficiaryExperience", value)
          }
          width="50%"
        />
        <InputCheckbox
          question={
            <p>
              How is the U.S. company related to the company abroad? (select{" "}
              <b>only one</b> box)
            </p>
          }
          checkboxSet={[
            "a. Parent",
            "b. Branch",
            "c. Subsidiary",
            "d. Affiliate",
            "e. Joint Venture",
          ]}
          onChange={(value) => handleInputChange("companyRelation", value)}
        />
        <div className="button_container">
          <PreviousButton />
          <SubmitButton
            nextPage={"/individual-petition/fifth"}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionFourthForm;
