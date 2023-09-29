import "../App.css";
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
function TechnologyPage({ techs }) {
  const { slug } = useParams();
  const matchMaker = techs.find(tech => tech.slug === slug)
  return (
    <>
    <h1>Technology Details</h1>
    <div className="containerTechs">
      <img className='logoCompany' src={matchMaker.image} />
      <div className="details">
        <p className="title">{matchMaker.name}</p>
        <p>{matchMaker.description}</p>
      </div>
    </div >
  </>
  );
}

export default TechnologyPage;
