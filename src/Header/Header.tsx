import { Link } from 'react-router-dom'
import './Header.scss'
import screensList from '../data/screensList';
import { BsFillGearFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

function Header() {  
    return (
        <>
            <header className="navbar">
                <div className="content">
                    <div className="left resize">
                        <div className="menu-btn"/>
                        <div className="title">
                            {'NOME DO ...'}
                        </div>
                        <div className="links flex align resize">
                            {screensList.map((screen, i)=>{
                                return(
                                    <Link key={i} to={screen.route}>{screen.title}</Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="right">
                        <div className="search hide-mobile lateral-margin">
                            <FiSearch />
                            <input  placeholder='Search' type="search" />
                        </div>
                        <select defaultValue="" className="language hide-mobile-first lateral-margin">
                            <option disabled>Language</option>
                            {
                                ['English', 'Português'].map((language, i)=>{
                                    return(
                                        <option key={i}>{language}</option>
                                    );
                                })
                            }
                        </select>
                        <div className="icons-header svg-hover lateral-margin">
                            <Link to='/config'>
                                <BsFillGearFill />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;