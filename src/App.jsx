import { useState } from "react";
import "./App.css";
import companiesJSON from "./companies.json";
import techJSON from "./technologies.json";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [tech, setTech] = useState(techJSON);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route path="/tech/:slug" element={<TechnologyPage tech={tech} />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
