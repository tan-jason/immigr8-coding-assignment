import { useState } from "react";
import "./individualpetitionform.css";
import InputField from "./common/InputField";
import SubmitButton from "./common/SubmitButton";
import PreviousButton from "./common/PreviousButton";
import CheckboxWrapper from "./common/CheckboxWrapper";
import DropdownSelect from "./common/DropdownSelect";
import { US_STATES } from "../constants";

const IndividualPetitionSecondForm = () => {
  const [formData, setFormData] = useState({
    employerName: "",
    address: "",
    aptSteFlr: "",
    number: "",
    city: "",
    state: "",
    zipCode: "",
    province: "",
    postalCode: "",
    country: "",
  });

  const handleOnSubmit = () => {
    // TODO: handle API call and store data
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <>
      <div className="form_wrapper">
        <h2>Complete This Section If Filling for An Individual Petition</h2>
        <form className="individual_petition_form_wrapper">
          <InputField
            fieldName="Name of Employer Abroad"
            onChange={(value) => handleInputChange("employerName", value)}
          />
          <h3>Address of Employer Abroad</h3>
          <div className="question_wrapper" style={{ display: "flex" }}>
            <InputField
              fieldName="Street Number and Name"
              onChange={(value) => handleInputChange("address", value)}
              style={{ marginTop: "20px" }}
            />
            <div
              className="checkboxes_question_wrapper_row_1"
              style={{ display: "flex", marginLeft: "50px", marginTop: "10px" }}
            >
              <CheckboxWrapper
                checkboxLabel="Apt."
                onChange={(value) => handleInputChange("aptSteFlr", value)}
              />
              <CheckboxWrapper
                checkboxLabel="Ste."
                onChange={(value) => handleInputChange("aptSteFlr", value)}
              />
              <CheckboxWrapper
                checkboxLabel="Flr."
                onChange={(value) => handleInputChange("aptSteFlr", value)}
              />
            </div>
            <InputField
              style={{
                marginLeft: "50px",
                width: "10%",
              }}
              fieldName="Number"
              onChange={(value) => handleInputChange("number", value)}
            />
            <InputField
              style={{ marginLeft: "70px", width: "25%" }}
              fieldName="City or Town"
              onChange={(value) => handleInputChange("city", value)}
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
            />

            <InputField
              style={{ marginRight: "50px", width: "10%" }}
              fieldName="Province"
              onChange={(value) => handleInputChange("province", value)}
            />
            <InputField
              style={{ marginRight: "50px", width: "10%" }}
              fieldName="Postal Code"
              onChange={(value) => handleInputChange("postalCode", value)}
            />
            <InputField
              style={{ width: "20%" }}
              fieldName="Country"
              onChange={(value) => handleInputChange("country", value)}
            />
          </div>
        </form>
        <div className="button-container" style={{ display: "flex" }}>
          <PreviousButton />
          <SubmitButton
            nextPage={"/individual-petition/third"}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionSecondForm;
