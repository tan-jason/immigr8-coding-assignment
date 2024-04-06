import { ADDITIONAL_FEES } from "../constants";
import PreviousButton from "./common/PreviousButton";
import SubmitButton from "./common/SubmitButton";

const AdditionalFees = () => {
  return (
    <div
      className="text-wrapper"
      style={{
        top: "30%",
        left: "10%",
        paddingRight: "100px",
        position: "absolute",
      }}
    >
      <p>{ADDITIONAL_FEES}</p>
      <div className="button_container">
        <PreviousButton />
        <SubmitButton nextPage={"/"} handleOnSubmit={() => {}} />
      </div>
    </div>
  );
};

export default AdditionalFees;
