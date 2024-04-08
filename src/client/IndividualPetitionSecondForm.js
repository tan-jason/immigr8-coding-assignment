import "./individualpetitionform.css";
import InputField from "./common/InputField";
import NextButton from "./common/NextButton";
import PreviousButton from "./common/PreviousButton";
import CheckboxWrapper from "./common/CheckboxWrapper";
import DropdownSelect from "./common/DropdownSelect";
import { US_STATES } from "../constants";

const IndividualPetitionSecondForm = ({ handleInputChange, formData }) => {
  return (
    <>
      <div className="form_wrapper">
        <h2>Complete This Section If Filling for An Individual Petition</h2>
        <form className="individual_petition_form_wrapper">
          <InputField
            fieldName="Name of Employer Abroad"
            onChange={(value) => handleInputChange("employerNameAbroad", value)}
            formData={formData.employerNameAbroad}
          />
          <h3>Address of Employer Abroad</h3>
          <div className="question_wrapper" style={{ display: "flex" }}>
            <InputField
              fieldName="Street Number and Name"
              onChange={(value) =>
                handleInputChange("employerAbroadAddress", value)
              }
              style={{ marginTop: "20px" }}
              formData={formData.employerAbroadAddress}
            />
            <div
              className="checkboxes_question_wrapper_row_1"
              style={{ display: "flex", marginLeft: "50px", marginTop: "10px" }}
            >
              <CheckboxWrapper
                checkboxLabel="Apt."
                onChange={(value) => handleInputChange("isApt", value)}
              />
              <CheckboxWrapper
                checkboxLabel="Ste."
                onChange={(value) => handleInputChange("isSte", value)}
              />
              <CheckboxWrapper
                checkboxLabel="Flr."
                onChange={(value) => handleInputChange("isFlr", value)}
              />
            </div>
            <InputField
              style={{
                marginLeft: "50px",
                width: "10%",
              }}
              fieldName="Number"
              onChange={(value) => handleInputChange("aptSteFlrNumber", value)}
              formData={formData.aptSteFlrNumber}
            />
            <InputField
              style={{ marginLeft: "70px", width: "25%" }}
              fieldName="City or Town"
              onChange={(value) => handleInputChange("city", value)}
              formData={formData.city}
            />
          </div>
          <div
            className="checkboxes_question_wrapper_row_2"
            style={{ display: "flex", paddingTop: 20 }}
          >
            <DropdownSelect
              dropdownLabel="State"
              value={formData.state}
              onChange={(value) => handleInputChange("state", value)}
              options={US_STATES}
            />
            <InputField
              style={{ marginRight: "50px", width: "25%" }}
              fieldName="Zip Code"
              onChange={(value) => handleInputChange("zipCode", value)}
              formData={formData.zipCode}
            />

            <InputField
              style={{ marginRight: "50px", width: "10%" }}
              fieldName="Province"
              onChange={(value) => handleInputChange("province", value)}
              formData={formData.province}
            />
            <InputField
              style={{ marginRight: "50px", width: "10%" }}
              fieldName="Postal Code"
              onChange={(value) => handleInputChange("postalCode", value)}
              formData={formData.postalCode}
            />
            <InputField
              style={{ width: "20%" }}
              fieldName="Country"
              onChange={(value) => handleInputChange("country", value)}
              formData={formData.country}
            />
          </div>
        </form>
        <div className="button_container">
          <PreviousButton />
          <NextButton nextPage={"/individual-petition/third"} />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionSecondForm;
