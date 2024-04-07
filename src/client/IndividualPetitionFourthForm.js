import "./individualpetitionform.css";
import NextButton from "./common/NextButton";
import PreviousButton from "./common/PreviousButton";
import InputParagraph from "./common/InputParagraph";
import InputCheckbox from "./common/InputCheckbox";

const IndividualPetitionFourthForm = ({ formData, handleInputChange }) => {
  return (
    <>
      <div className="form_wrapper">
        <h2>Complete This Section If Filling for An Individual Petition</h2>
        <InputParagraph
          question={
            "Describe the beneficiary's proposed duties in the United States."
          }
          handleInputChange={(value) =>
            handleInputChange("beneficiaryDutiesUS", value)
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
          <NextButton nextPage={"/individual-petition/fifth"} />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionFourthForm;
