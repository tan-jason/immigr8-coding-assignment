import NextButton from "./common/NextButton";
import TableQuestion from "./common/TableQuestion";
import PreviousButton from "./common/PreviousButton";
import { TABLE_ROWS_BLANK_FORM } from "../constants";

const BlankPetitionForm = ({ handleTableInputChange, formData }) => {
  return (
    <div className="form_wrapper">
      <h2>Complete This Section If Filling for An Blank Petition</h2>
      <TableQuestion
        question={
          "List all U.S. and foreign parent, branches, subsidiaries, and affiliates included in this petition. (Attach separate files if additional space if needed.)"
        }
        headers={["Name and Address", "Relationship"]}
        fields={["nameAndAddress", "relationship"]}
        numRows={TABLE_ROWS_BLANK_FORM}
        tableData={"foreignBranches"}
        handleTableInputChange={handleTableInputChange}
        formData={formData.foreignBranches}
      />
      <div className="button_container">
        <PreviousButton />
        <NextButton nextPage={"/additional-fees"} handleOnSubmit={() => {}} />
      </div>
    </div>
  );
};

export default BlankPetitionForm;
