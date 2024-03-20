import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies.map((company) => {
        return (
          <ul key={company.id}>
            <Link to={`/company/${company.slug}`}>
              <li>{company.name}</li>
              <li>
                <img src={company.logo} alt="Company logo" height={"70px"} />
              </li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default HomePage;
