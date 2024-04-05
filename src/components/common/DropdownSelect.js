import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const DropdownSelect = ({ dropdownLabel, options, value, onChange }) => {
  return (
    <FormControl style={{ width: "10%" }}>
      <InputLabel id={`${dropdownLabel}-label`}>{dropdownLabel}</InputLabel>
      <Select
        labelId={`${dropdownLabel}-select-label`}
        id={`${dropdownLabel}-select-label`}
        value={value}
        label={dropdownLabel}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "80%", marginBottom: "50px" }}
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
