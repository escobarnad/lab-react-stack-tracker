import "../App.css";
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const matchMaker = companies.find(company => company.slug === companySlug)
  return (
    <div>
       <h1>Company profile</h1>
      <div className="containerTechs">
        <a href={matchMaker.website} target='_blank' rel='noreferrer'><img className='logoCompany' src={matchMaker.logo} /></a>
        <div className="details">
          <p className="title">{matchMaker.name}</p>
          <p>{matchMaker.description}</p>
        </div>
      </div>
      {matchMaker.techStack.map((tech) => {
        return (
          <div>
            <Link to={`/tech/${tech.slug}`}>
              <p>{tech.name}</p>
              <img src={tech.image} height={100} />
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default CompanyPage;
