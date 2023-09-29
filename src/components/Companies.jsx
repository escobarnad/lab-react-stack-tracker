import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
const Companies = ({ company }) => {
    let { slug } = useParams();
    return (
        <div>
            <Link to={`/company/${company.slug}`}>
                <p>{company.name}</p>
                <img src={company.logo} height={100} />
            </Link>
        </div>
    )
}
export default Companies