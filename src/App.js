import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundInfromationSection from "./client/BackgroundInformationSection";
import IndividualPetitionFirstForm from "./client/IndividualPetitionFirstForm";
import BlanketPetitionForm from "./client/BlanketPetitionForm";
import IndividualPetitionSecondForm from "./client/IndividualPetitionSecondForm";
import IndividualPetitionThirdForm from "./client/IndividualPetitionThirdForm";
import IndividualPetitionFourthForm from "./client/IndividualPetitionFourthForm";
import IndividualPetitionFifthForm from "./client/IndividualPetitionFifthForm";
import IndividualPetitionSixthForm from "./client/IndividualPetitionSixthForm";
import AdditionalFees from "./client/AdditionalFees";

function App() {
  return (
    <div className="container-wrapper" style={{ paddingBottom: "100px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BackgroundInfromationSection />} />
          <Route path="/blanket-petition" element={<BlanketPetitionForm />} />
          <Route
            path="/individual-petition/first"
            element={<IndividualPetitionFirstForm />}
          />
          <Route
            path="/individual-petition/second"
            element={<IndividualPetitionSecondForm />}
          />
          <Route
            path="/individual-petition/third"
            element={<IndividualPetitionThirdForm />}
          />
          <Route
            path="/individual-petition/fourth"
            element={<IndividualPetitionFourthForm />}
          />
          <Route
            path="/individual-petition/fifth"
            element={<IndividualPetitionFifthForm />}
          />
          <Route
            path="/individual-petition/sixth"
            element={<IndividualPetitionSixthForm />}
          />
          <Route path="/additional-fees" element={<AdditionalFees />} />
          <Route path="/blanket-petition" element={<BlanketPetitionForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
