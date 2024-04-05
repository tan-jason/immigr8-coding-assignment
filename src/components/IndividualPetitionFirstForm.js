import { useState } from "react";
import "./individualpetitionform.css";
import InputCheckbox from "./common/InputCheckbox";
import SubmitButton from "./common/SubmitButton";
import TableQuestion from "./common/TableQuestion";
import { long_table_question_1 } from "../constants";
import PreviousButton from "./common/PreviousButton";

const TABLE_ROWS_FIRST_FORM = 7;

const IndividualPetitionFirstForm = () => {
  const [formData, setFormData] = useState({
    classification: "",
    priorStays: Array.from({ length: TABLE_ROWS_FIRST_FORM }).map(() => ({
      subjectName: "",
      periodFrom: "",
      periodTo: "",
    })),
  });

  const handleOnSubmit = (e) => {
    //TODO: handle submit data
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTableInputChange = (index, field, value) => {
    const updatedTableData = [...formData.priorStays];
    updatedTableData[index][field] = value;
    setFormData({ ...formData, priorStays: updatedTableData });
  };

  return (
    <div className="form_wrapper">
      <h2>Complete This Section If Filling for An Individual Petition</h2>
      <div className="individual_petition_form_wrapper">
        <InputCheckbox
          question={
            <p>
              Classification sought (select <b>only one</b> box):{" "}
            </p>
          }
          checkboxSet={[
            "a. L-1A manager executive",
            "b. L-1B specialized knowledge",
          ]}
          onChange={(value) => handleInputChange("classification", value)}
        />
      </div>
      <TableQuestion
        question={long_table_question_1}
        headers={[
          "Subject's Name",
          <p>
            Period of stay (mm/dd/yyyy)
            <br />
            From
          </p>,
          <p>
            Period of stay (mm/dd/yyyy)
            <br />
            To
          </p>,
        ]}
        fields={["subjectName", "periodFrom", "periodTo"]}
        numRows={TABLE_ROWS_FIRST_FORM}
        handleTableInputChange={handleTableInputChange}
      />
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

export default IndividualPetitionFirstForm;
