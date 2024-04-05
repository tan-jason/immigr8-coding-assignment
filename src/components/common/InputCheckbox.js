import "./styles.css";

const InputCheckbox = ({ question, checkboxSet, onChange }) => {
  return (
    <div
      className={`input_wrapper_${question}`}
      style={{
        display: "block",
        marginBottom: "50px",
        width: "100%",
      }}
    >
      <label>{question}</label>
      <div
        className={`checkboxes_${question}_wrapper`}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "80px",
        }}
      >
        {checkboxSet.map((checkboxValue) => {
          return (
            <div
              className={`checkbox_${question}_wrapper`}
              style={{ display: "flex", marginRight: "50px" }}
            >
              <label
                style={{ marginRight: "20px" }}
                className={`label_checkbox_${checkboxValue}`}
              >
                {checkboxValue}
              </label>
              <input
                className={`input_${question}`}
                type="checkbox"
                onChange={(e) => onChange(checkboxValue)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputCheckbox;
