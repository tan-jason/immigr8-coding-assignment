import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundInfromationSection from "./components/BackgroundInformationSection";
import IndividualPetitionFirstForm from "./components/IndividualPetitionFirstForm";
import BlanketPetitionForm from "./components/BlanketPetitionForm";
import IndividualPetitionSecondForm from "./components/IndividualPetitionSecondForm";
import IndividualPetitionThirdForm from "./components/IndividualPetitionThirdForm";

function App() {
  return (
    <div className="container-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BackgroundInfromationSection />} />
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
          <Route path="/blanket-petition" element={<BlanketPetitionForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
