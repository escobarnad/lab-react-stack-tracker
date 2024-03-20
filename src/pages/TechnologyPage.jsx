import { useState } from "react";
import { useParams } from "react-router-dom";

function TechnologyPage({ tech }) {
  const { slug } = useParams();

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
      <button></button>
    </div>
  );
}

export default TechnologyPage;
