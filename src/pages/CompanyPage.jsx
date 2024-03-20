import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const oneCompany = companies.find((company) => company.slug === companySlug);
  const [company, setCompany] = useState(oneCompany);

  return (
    <div>
      <h1>Company Profile</h1>
      <a href={company.website} target="_blank">
        <img src={company.logo} alt={`${company.logo} logo`} height={"150px"} />
        <h2>{company.name}</h2>
        <p>{company.description}</p>
      </a>
      {company.techStack.map((tech) => {
        return (
          <ul key={tech.slug}>
            <Link to={`/tech/${tech.slug}?q=${company.slug}`}>
              <img src={tech.image} alt={`${tech.name} logo`} height={"70px"} />
              <li>{tech.name}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default CompanyPage;
