import companiesJSON from "./companies.json";
import techsJSON from "./technologies.json";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { useState } from "react";

function App() {
  const [companies, setCompanies] = useState(companiesJSON)
  const [techs, setTechs] = useState(techsJSON)
  return (
    <div className="App">
      <nav>
         <Navbar />
      </nav>
 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={companies} />} />
        <Route path='/tech/:slug' element={<TechnologyPage techs={techs} />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
