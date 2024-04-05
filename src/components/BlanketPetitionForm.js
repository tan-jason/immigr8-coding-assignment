import { useState } from "react";
import SubmitButton from "./common/SubmitButton";
import TableQuestion from "./common/TableQuestion";
import PreviousButton from "./common/PreviousButton";

const TABLE_ROWS_BLANKET_FORM = 8;

const BlanketPetitionForm = () => {
  const [formData, setFormData] = useState({
    foreignBranches: Array.from({ length: TABLE_ROWS_BLANKET_FORM }).map(
      () => ({
        nameAndAddress: "",
        relationship: "",
      })
    ),
  });

  const handleOnSubmit = (e) => {
    //TODO: handle submit data
  };

  const handleTableInputChange = (index, field, value) => {
    const updatedTableData = [...formData.priorStays];
    updatedTableData[index][field] = value;
    setFormData({ ...formData, priorStays: updatedTableData });
  };

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
        handleTableInputChange={handleTableInputChange}
      />
      <div className="button_container">
        <PreviousButton />
        <SubmitButton nextPage={"/additional-fees"} handleOnSubmit={() => {}} />
      </div>
    </div>
  );
};

export default BlanketPetitionForm;
