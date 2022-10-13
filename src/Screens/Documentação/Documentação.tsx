import CodeComponent from '../../Components/CodeComponent/CodeComponent';
import HalfPage from '../../Components/HalfPage/HalfPage';
import AiOutlineStar from '../../Components/Icons/Star/Star';
import Stars from '../../Components/Stars/Stars';
import Navbar from '../../Navbar/Navbar';
import './Documentação.scss';

function Documentação({}) {
    return (
    <div className='documentação-container ignore-container'>
        <Navbar />
        <div className="documentação-content resize">
            <Stars />
            <h2 className="navbar-section margin">
                JAVASCRIPT {'>'} <span>Home</span> {'>'} <span>Back-end</span> {'>'} <span>Seila</span>
            </h2>
            <div className="navigation margin">
                <h2>Comece :)</h2>
                <div className="navigation-links">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className="navigation margin">
                <h2>Comece :)</h2>
                <div className="navigation-links">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <span className='textbox margin'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <CodeComponent title='JAVASCRIPT PRIMEIRO PROJETO' />
        </div>
    </div>
    );
}

export default Documentação;