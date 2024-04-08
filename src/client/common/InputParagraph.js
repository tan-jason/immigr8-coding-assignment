import React from "react";

const InputParagraph = ({
  question,
  handleInputChange,
  width,
  numRows = 7,
  formData,
}) => {
  return (
    <div
      className="paragraph_input_wrapper"
      style={{ marginTop: "50px", marginBottom: "30px" }}
    >
      <label
        className="paragraph_input_question_label"
        style={{ display: "block" }}
      >
        {question}
      </label>
      <br />
      <textarea
        id="paragraphInput"
        rows={numRows}
        cols="50"
        onChange={(e) => handleInputChange(e.target.value)}
        style={{ width: width }}
        value={formData}
      />
    </div>
  );
};

export default InputParagraph;
