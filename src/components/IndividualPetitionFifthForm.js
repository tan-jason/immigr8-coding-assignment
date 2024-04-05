import { useState } from "react";
import "./individualpetitionform.css";
import InputCheckbox from "./common/InputCheckbox";
import SubmitButton from "./common/SubmitButton";
import TableQuestion from "./common/TableQuestion";
import PreviousButton from "./common/PreviousButton";

const TABLE_ROWS_FIFTH_FORM = 5;

const IndividualPetitionFifthForm = () => {
  const [formData, setFormData] = useState({
    tableData: Array.from({ length: TABLE_ROWS_FIFTH_FORM }).map(() => ({
      percentageCompanyStock: "",
      federalEmployerIDNum: "",
    })),
    haveAbroadRelationship: "",
  });

  const handleOnSubmit = (e) => {
    //TODO: handle submit data
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTableInputChange = (index, field, value) => {
    const updatedTableData = [...formData.tableData];
    console.log({ index: index, field: field, value: value });
    updatedTableData[index][field] = value;
    setFormData({ ...formData, tableData: updatedTableData });
  };

  return (
    <div className="form_wrapper">
      <h2>Complete This Section If Filling for An Individual Petition</h2>
      <TableQuestion
        question={
          "Describe the percentage of stock ownership and managerial control of each company that has a qualifying relationship. Provide the Federal Employer Identification Number for each U.S. company that has a qualifying relationship"
        }
        headers={[
          "Percentage of company stock ownership and managerial control of each company that has a qualifying relationship.",
          "Federal Employer Identification Number for each U.S. company that has a qualifying relationship",
        ]}
        numRows={TABLE_ROWS_FIFTH_FORM}
        fields={["percentageCompanyStock", "federalEmployerIDNum"]}
        handleTableInputChange={handleTableInputChange}
      />
      <div className="individual_petition_form_wrapper">
        <InputCheckbox
          question={
            "Do the companies currently have the same qualifying relationship as they did during the one-year period of the beneficiary's employment with the company abroad?"
          }
          checkboxSet={[
            "Yes",
            "No. If no, provide an explanation in Part 9 of Form I-129 that the U.S. company has and will have a qualifying relationship with another foreign entity durign the full period of the requested period of stay.",
          ]}
          onChange={(value) =>
            handleInputChange("haveAbroadRelationship", value)
          }
          checkboxLabelOnRight
        />
      </div>

      <div className="button_container">
        <PreviousButton />
        <SubmitButton
          nextPage={"/individual-petition/second"}
          handleOnSubmit={() => {}}
        />
      </div>
    </div>
  );
};

export default IndividualPetitionFifthForm;
