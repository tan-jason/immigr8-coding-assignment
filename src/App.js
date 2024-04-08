import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundInfromationSection from "./client/BackgroundInformationSection";
import IndividualPetitionFirstForm from "./client/IndividualPetitionFirstForm";
import IndividualPetitionSecondForm from "./client/IndividualPetitionSecondForm";
import IndividualPetitionThirdForm from "./client/IndividualPetitionThirdForm";
import IndividualPetitionFourthForm from "./client/IndividualPetitionFourthForm";
import IndividualPetitionFifthForm from "./client/IndividualPetitionFifthForm";
import IndividualPetitionSixthForm from "./client/IndividualPetitionSixthForm";
import AdditionalFees from "./client/AdditionalFees";
import { useState } from "react";
import BlankPetitionForm from "./client/BlankPetitionForm";
import {
  TABLE_ROWS_BLANK_FORM,
  TABLE_ROWS_FIFTH_FORM,
  TABLE_ROWS_FIRST_FORM,
  TABLE_ROWS_THIRD_FORM,
} from "./constants";

const App = () => {
  const [formData, setFormData] = useState({
    petitionerName: "",
    beneficiaryName: "",
    petitionType: "",
    employsFiftyPlusIndividuals: "",
    hasFiftyPlusNonImmigrantStatus: "",
    // individual petition data
    classification: "",
    beneficiaryPriorStays: Array.from({ length: TABLE_ROWS_FIRST_FORM }).map(
      () => ({
        subjectName: "",
        periodStart: "",
        periodEnd: "",
      })
    ),
    employerNameAbroad: "",
    employerAbroadAddress: "",
    isApt: "",
    isSte: "",
    isFlr: "",
    aptSteFlrNumber: "",
    city: "",
    state: "",
    zipCode: "",
    province: "",
    postalCode: "",
    country: "",
    interruptions: Array.from({ length: TABLE_ROWS_THIRD_FORM }).map(() => ({
      employmentDateStart: "",
      employmentDateEnd: "",
      explanation: "",
    })),
    beneficiaryDuties: "",
    beneficiaryDutiesUS: "",
    beneficiaryExperience: "",
    companyRelation: "",
    stockOwnershipDetails: Array.from({ length: TABLE_ROWS_FIFTH_FORM }).map(
      () => ({
        percentageOwnership: "",
        federalEmployerId: "",
      })
    ),
    hasSameQualifyingRelationship: "",
    isOpeningNewOffice: "",
    isStationedOffsite: "",
    controlBeneficiaryWorkDetails: "",
    placementDescription: "",
    // blank petition data
    foreignBranches: Array.from({ length: TABLE_ROWS_BLANK_FORM }).map(() => ({
      nameAndAddress: "",
      relationship: "",
    })),
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTableInputChange = (index, field, value, data) => {
    const updatedFormData = { ...formData };
    const updatedTableData = [...updatedFormData[data]];

    updatedTableData[index][field] = value;
    updatedFormData[data] = updatedTableData;

    setFormData(updatedFormData);
  };

  return (
    <div className="container-wrapper" style={{ paddingBottom: "100px" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BackgroundInfromationSection
                handleInputChange={handleInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/blank-petition"
            element={
              <BlankPetitionForm
                handleTableInputChange={handleTableInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/individual-petition/first"
            element={
              <IndividualPetitionFirstForm
                handleInputChange={handleInputChange}
                handleTableInputChange={handleTableInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/individual-petition/second"
            element={
              <IndividualPetitionSecondForm
                handleInputChange={handleInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/individual-petition/third"
            element={
              <IndividualPetitionThirdForm
                handleInputChange={handleInputChange}
                handleTableInputChange={handleTableInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/individual-petition/fourth"
            element={
              <IndividualPetitionFourthForm
                handleInputChange={handleInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/individual-petition/fifth"
            element={
              <IndividualPetitionFifthForm
                handleInputChange={handleInputChange}
                handleTableInputChange={handleTableInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/individual-petition/sixth"
            element={
              <IndividualPetitionSixthForm
                handleInputChange={handleInputChange}
                formData={formData}
              />
            }
          />
          <Route
            path="/additional-fees"
            element={<AdditionalFees formData={formData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
