import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
const Techs = ({ techs }) => {
    return (
        <div>
            <p>{techs.name}</p>
            <img src={techs.image} height={100} />
        </div>
    )
}
export default Techs