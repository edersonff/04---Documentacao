import HalfPage from '../Components/HalfPage/HalfPage';
import './Navbar.scss';

function Navbar() {
    return (
    <div className='navbar-container'>
        <div className="navbar-section">
            <h2>Comecei agora! v</h2>
            <div className="buttons-navbar">
                <button>Introdução</button>
                <button className='active'>Introdução</button>
                <button>Introdução</button>
                <button>Introdução</button>
            </div>
        </div>
        <div className="navbar-section">
            <h2>Comecei agora! v</h2>
            <div className="buttons-navbar">
                <button>Introdução</button>
                <button>Introdução</button>
                <button>Introdução</button>
                <button>Introdução</button>
            </div>
        </div>
    </div>
    );
}

export default Navbar;