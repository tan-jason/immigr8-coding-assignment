import "./submitButtonStyle.css";
import { useNavigate } from "react-router-dom";

const PreviousButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className="previous-button"
      onClick={handleClick}
      style={{ marginRight: "50px" }}
    >
      Previous
    </button>
  );
};

export default PreviousButton;
