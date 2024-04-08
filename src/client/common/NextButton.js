import "./submitButtonStyle.css";
import { useNavigate } from "react-router-dom";

const NextButton = ({ nextPage, handleOnSubmit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nextPage);
    return false;
  };

  return (
    <button className="next-button" onClick={handleClick}>
      Next
    </button>
  );
};

export default NextButton;
