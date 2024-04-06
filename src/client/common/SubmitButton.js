import "./submitButtonStyle.css";
import { useNavigate } from "react-router-dom";

const SubmitButton = ({ nextPage, handleOnSubmit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    handleOnSubmit();
    navigate(nextPage);
    return false;
  };

  return (
    <button className="submit-button" role="button" onClick={handleClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
