import { Link } from 'react-router-dom'
import './Header.scss'
import screensList from '../data/screensList';
import { BsFillGearFill } from 'react-icons/bs';

function Header() {  
    return (
        <>
            <header className="navbar">
                <div className="content">
                    <div className="left">
                        <div className="menu-btn"/>
                        <div className="title">
                            {'NOME DO ...'}
                        </div>
                        <div className="links flex align">
                            {screensList.map((screen, i)=>{
                                return(
                                    <Link key={i} to={screen.route}>{screen.title}</Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="right">
                        <div className="icons-header svg-hover">
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