import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundInfromationSection from "./components/BackgroundInformationSection";
import IndividualPetitionFirstForm from "./components/IndividualPetitionFirstForm";
import BlanketPetitionForm from "./components/BlanketPetitionForm";
import IndividualPetitionSecondForm from "./components/IndividualPetitionSecondForm";
import IndividualPetitionThirdForm from "./components/IndividualPetitionThirdForm";
import IndividualPetitionFourthForm from "./components/IndividualPetitionFourthForm";
import IndividualPetitionFifthForm from "./components/IndividualPetitionFifthForm";
import IndividualPetitionSixthForm from "./components/IndividualPetitionSixthForm";
import AdditionalFees from "./components/AdditionalFees";

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
