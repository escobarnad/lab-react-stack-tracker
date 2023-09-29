import { useState } from "react";
import companiesJSON from "../companies.json"
import Companies from "../components/Companies";

function HomePage() {
  const [company, setCompany] = useState(companiesJSON)
  return (
    <div>
     <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div>
        {company.map((company) => {
          return (
            <Companies key={company.id} company={company}></Companies>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage;
