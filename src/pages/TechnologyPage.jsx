import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ tech }) {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const companySlug = searchParams.get("q");

  const slugTech = tech.find((oneTech) => oneTech.slug === slug);
  const [technology, setTechnology] = useState(slugTech);

  return (
    <div>
      <h1>Technology Details</h1>
      <img
        src={technology.image}
        alt={`${technology.logo} logo`}
        height={"150px"}
      />
      <h2>{technology.name}</h2>
      <p>{technology.description}</p>
      <Link to={`/company/${companySlug}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
