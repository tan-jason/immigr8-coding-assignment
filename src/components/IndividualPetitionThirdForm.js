import { useState } from "react";
import "./individualpetitionform.css";
import SubmitButton from "./common/SubmitButton";
import TableQuestion from "./common/TableQuestion";
import PreviousButton from "./common/PreviousButton";

const IndividualPetitionThirdForm = () => {
  const [formData, setFormData] = useState({
    classification: "",
  });

  const handleOnSubmit = () => {};

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
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
          numRows={7}
        />
        <div className="button-container" style={{ display: "flex" }}>
          <PreviousButton />
          <SubmitButton
            nextPage={"/individual-petition/second"}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default IndividualPetitionThirdForm;
