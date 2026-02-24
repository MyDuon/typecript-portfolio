import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />{" "}
          {/*Kan legge til errorelement attributt senere */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
