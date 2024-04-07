import "./individualpetitionform.css";
import NextButton from "./common/NextButton";
import TableQuestion from "./common/TableQuestion";
import PreviousButton from "./common/PreviousButton";
import InputParagraph from "./common/InputParagraph";
import { long_table_question_2 } from "../constants";

export const TABLE_ROWS_THIRD_FORM = 6;

const IndividualPetitionThirdForm = ({
  handleInputChange,
  handleTableInputChange,
  formData,
}) => {
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
          tableData={"interruptions"}
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
          <NextButton nextPage={"/individual-petition/fourth"} />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionThirdForm;
