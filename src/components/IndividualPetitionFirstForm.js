import { useState } from "react";
import "./individualpetitionform.css";
import InputCheckbox from "./common/InputCheckbox";
import SubmitButton from "./common/SubmitButton";
import TableQuestion from "./common/TableQuestion";
import { long_table_question_1 } from "../constants";
import PreviousButton from "./common/PreviousButton";

const IndividualPetitionFirstForm = () => {
  const [formData, setFormData] = useState({
    classification: "",
    priorStays: [{}],
  });

  const handleOnSubmit = (e) => {
    const table = e.target;
    const tableData = new FormData(table);

    const tableJSON = Object.fromEntries(tableData.entries());
    console.log(tableJSON);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <>
      <div className="form_wrapper">
        <h2>Complete This Section If Filling for An Individual Petition</h2>
        <form className="individual_petition_form_wrapper">
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
        </form>
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
          numRows={7}
          handleSubmit={handleOnSubmit}
        />
        <div className="button-container" style={{ display: "flex" }}>
          <PreviousButton />
          <SubmitButton
            nextPage={"/individual-petition/second"}
            handleOnSubmit={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionFirstForm;
