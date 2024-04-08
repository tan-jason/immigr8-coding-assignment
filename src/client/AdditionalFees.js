import { ADDITIONAL_FEES } from "../constants";
import PreviousButton from "./common/PreviousButton";
import SubmitButton from "./common/SubmitButton";

const AdditionalFees = ({ formData }) => {
  const handleOnSubmit = () => {
    let userFormData = formData;

    //format form data
    userFormData = {
      ...userFormData,
      beneficiaryPriorStays: checkIfEmpty(formData.beneficiaryPriorStays)
        ? []
        : filterObjArray(formData.beneficiaryPriorStays),
      foreignBranches: checkIfEmpty(formData.foreignBranches)
        ? []
        : filterObjArray(formData.foreignBranches),
      beneficiaryDuties: formData.beneficiaryDuties,
      hasSameQualifyingRelationship: convertStringToBoolean(
        formData.hasSameQualifyingRelationship
      ),
      interruptions: checkIfEmpty(formData.interruptions)
        ? []
        : filterObjArray(formData.interruptions),
      isOpeningNewOffice: convertStringToBoolean(formData.isOpeningNewOffice),
      isStationedOffsite: convertStringToBoolean(formData.isStationedOffsite),
      isApt: formData.isApt !== "" ? true : false,
      isSte: formData.isSte !== "" ? true : false,
      isFlr: formData.isFlr !== "" ? true : false,
      employsFiftyPlusIndividuals: convertStringToBoolean(
        formData.employsFiftyPlusIndividuals
      ),
      hasFiftyPlusNonImmigrantStatus: convertStringToBoolean(
        formData.hasFiftyPlusNonImmigrantStatus
      ),
      aptSteFlrNumber: parseInt(formData.aptSteFlrNumber),
      zipCode: parseInt(formData.zipCode),
      stockOwnershipDetails: checkIfEmpty(formData.stockOwnershipDetails)
        ? []
        : filterObjArray(
            parseStockOwnershipDetails(formData.stockOwnershipDetails)
          ),
    };
    console.log(userFormData);
  };

  const parseStockOwnershipDetails = (stockOwnershipDetails) => {
    return stockOwnershipDetails.map((stockOwnershipDetail) => ({
      percentageOwnership:
        stockOwnershipDetail.percentageOwnership !== ""
          ? parseInt(stockOwnershipDetail.percentageOwnership)
          : "",
      federalEmployerId:
        stockOwnershipDetail.federalEmployerId !== ""
          ? parseInt(stockOwnershipDetail.federalEmployerIdl)
          : "",
    }));
  };

  const convertStringToBoolean = (str) => {
    const lowerStr = str.toLowerCase();
    if (lowerStr.startsWith("yes")) {
      return true;
    } else if (lowerStr.startsWith("no")) {
      return false;
    }
  };

  const checkIfEmpty = (arr) => {
    return arr.every((obj) =>
      Object.values(obj).every((value) => value === "")
    );
  };

  const filterObjArray = (arr) => {
    if (!Array.isArray(arr)) {
      console.log(arr);
    }
    return arr.filter((obj) =>
      Object.values(obj).some((value) => value !== "")
    );
  };

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
        <SubmitButton nextPage={"/"} handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
};

export default AdditionalFees;
