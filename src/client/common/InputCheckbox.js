import "./styles.css";

const InputCheckbox = ({
  question,
  checkboxSet,
  onChange,
  checkboxLabelOnRight = false,
  formData,
}) => {
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
          marginTop: "20px",
        }}
      >
        {checkboxSet.map((checkboxValue) => {
          return (
            <div
              className={`checkbox_${question}_wrapper`}
              style={{ display: "flex", marginRight: "50px" }}
            >
              {!checkboxLabelOnRight ? (
                <label
                  style={{ marginRight: "20px" }}
                  className={`label_checkbox_${checkboxValue}`}
                >
                  {checkboxValue}
                </label>
              ) : (
                <></>
              )}

              <input
                className={`input_${question}`}
                type="checkbox"
                onChange={() => onChange(checkboxValue)}
                checked={formData === checkboxValue ? true : false}
              />

              {checkboxLabelOnRight ? (
                <label
                  style={{ marginLeft: "20px" }}
                  className={`label_checkbox_${checkboxValue}`}
                >
                  {checkboxValue}
                </label>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputCheckbox;
