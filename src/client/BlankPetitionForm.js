import NextButton from "./common/NextButton";
import TableQuestion from "./common/TableQuestion";
import PreviousButton from "./common/PreviousButton";

export const TABLE_ROWS_BLANKET_FORM = 8;

const BlankPetitionForm = ({ handleTableInputChange }) => {
  return (
    <div className="form_wrapper">
      <h2>Complete This Section If Filling for An Blank Petition</h2>
      <TableQuestion
        question={
          "List all U.S. and foreign parent, branches, subsidiaries, and affiliates included in this petition. (Attach separate files if additional space if needed.)"
        }
        headers={["Name and Address", "Relationship"]}
        fields={["nameAndAddress", "relationship"]}
        numRows={TABLE_ROWS_BLANKET_FORM}
        tableData={"foreignBranches"}
        handleTableInputChange={handleTableInputChange}
      />
      <div className="button_container">
        <PreviousButton />
        <NextButton nextPage={"/additional-fees"} handleOnSubmit={() => {}} />
      </div>
    </div>
  );
};

export default BlankPetitionForm;
