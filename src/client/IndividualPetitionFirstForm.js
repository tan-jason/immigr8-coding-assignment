import "./individualpetitionform.css";
import InputCheckbox from "./common/InputCheckbox";
import NextButton from "./common/NextButton";
import TableQuestion from "./common/TableQuestion";
import { long_table_question_1 } from "../constants";
import PreviousButton from "./common/PreviousButton";
import { TABLE_ROWS_FIRST_FORM } from "../constants";

const IndividualPetitionFirstForm = ({
  handleInputChange,
  handleTableInputChange,
  formData,
}) => {
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
        fields={["subjectName", "periodStart", "periodEnd"]}
        numRows={TABLE_ROWS_FIRST_FORM}
        tableData={"beneficiaryPriorStays"}
        handleTableInputChange={handleTableInputChange}
      />
      <div className="button_container">
        <PreviousButton />
        <NextButton nextPage={"/individual-petition/second"} />
      </div>
    </div>
  );
};

export default IndividualPetitionFirstForm;
