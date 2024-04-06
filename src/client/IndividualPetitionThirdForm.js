import { useState } from "react";
import "./individualpetitionform.css";
import SubmitButton from "./common/SubmitButton";
import TableQuestion from "./common/TableQuestion";
import PreviousButton from "./common/PreviousButton";
import InputParagraph from "./common/InputParagraph";
import { long_table_question_2 } from "../constants";

const TABLE_ROWS_THIRD_FORM = 6;

const IndividualPetitionThirdForm = () => {
  const [formData, setFormData] = useState({
    classification: "",
    interruptions: Array.from({ length: TABLE_ROWS_THIRD_FORM }).map(() => ({
      employmentDateStart: "",
      employmentDateEnd: "",
      explanation: "",
    })),
    beneficiaryDuties: "",
  });

  const handleOnSubmit = () => {};

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTableInputChange = (index, field, value) => {
    const updatedTableData = [...formData.interruptions];
    updatedTableData[index][field] = value;
    setFormData({ ...formData, interruptions: updatedTableData });
  };
  return (
    <>
      <div className="form_wrapper">
        <h2>Complete This Section If Filling for An Individual Petition</h2>
        <TableQuestion
          question={
            "Date of beneficiary's employment with this employer. Explain any interruptions in employment."
          }
          headers={[
            <p>
              Date of employment (mm/dd/yyyy)
              <br />
              From
            </p>,
            <p>
              Date of employment (mm/dd/yyyy)
              <br />
              To
            </p>,
            "Explanation of Interruptions",
          ]}
          numRows={TABLE_ROWS_THIRD_FORM}
          fields={["employmentDateStart", "employmentDateEnd", "explanation"]}
          handleTableInputChange={handleTableInputChange}
        />
        <InputParagraph
          question={long_table_question_2}
          handleInputChange={(value) =>
            handleInputChange("beneficiaryDuties", value)
          }
          width="50%"
        />
        <div className="button_container">
          <PreviousButton />
          <SubmitButton
            nextPage={"/individual-petition/fourth"}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionThirdForm;
