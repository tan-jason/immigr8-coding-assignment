const CheckboxWrapper = ({ checkboxLabel, onChange }) => {
  return (
    <div className="checkbox_wrapper" style={{ display: "block" }}>
      <label style={{ marginBottom: "8px", marginLeft: "5px" }}>
        {checkboxLabel}
      </label>
      <input type="checkbox" onChange={() => onChange(checkboxLabel)} />
    </div>
  );
};

export default CheckboxWrapper;
