import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />{" "}
          {/*Kan legge til errorelement attributt senere */}
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
