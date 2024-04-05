import React from "react";

const InputParagraph = ({ question, handleInputChange, width }) => {
  return (
    <div
      className="paragraph_input_wrapper"
      style={{ marginTop: "50px", marginBottom: "30px" }}
    >
      <label className="paragraph_input_question_label">{question}</label>
      <br />
      <textarea
        id="paragraphInput"
        rows="7"
        cols="50"
        onChange={handleInputChange}
        style={{ width: width }}
      />
    </div>
  );
};

export default InputParagraph;
