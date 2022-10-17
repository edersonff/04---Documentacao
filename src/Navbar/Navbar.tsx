import HalfPage from '../Components/HalfPage/HalfPage';
import './Navbar.scss';
import { AiFillHome } from 'react-icons/ai';
function Navbar() {
    return (
    <div className='navbar-container'>
        <div className="navbar-section">
            <h2>Comecei agora! v</h2>
            <div className="buttons-navbar">
                <button>Introdução <AiFillHome /> </button>
                <button className='active'>Introdução <AiFillHome /></button>
                <button>Introdução <AiFillHome /></button>
                <button>Introdução <AiFillHome /></button>
            </div>
        </div>
        <div className="navbar-section">
            <h2>Comecei agora! v</h2>
            <div className="buttons-navbar">
                <button>Introdução <AiFillHome /></button>
                <button>Introdução <AiFillHome /></button>
                <button>Introdução <AiFillHome /></button>
                <button>Introdução <AiFillHome /></button>
            </div>
        </div>
    </div>
    );
}

export default Navbar;