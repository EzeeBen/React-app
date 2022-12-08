import { FaDolly } from "react-icons/fa";
const CustomNavbar = () => {
    return(
    <nav className="nav">
        <ul class="nav__lista">
                <li className="nav__title ">
                    <p>Mi Shop | Pasillo 4</p>
                </li>
                <li className="nav__item ">
                    <p>Cerveza</p>
                </li>
                <li className="nav__item ">
                    <p>Vino</p>
                </li>
                <li className="nav__item ">
                    <p>Cocteles</p>
                </li>
                <FaDolly/>
            </ul>
    </nav>)
}
export default CustomNavbar;