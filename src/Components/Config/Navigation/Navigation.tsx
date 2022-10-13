import { AiOutlineRight } from 'react-icons/ai';
import { useState } from 'react';
import './Navigation.scss';

function Navigation({item} : {item: {title: string, subRoutes: string[]}}) {
    const { title, subRoutes } = item;
    const [ show, setShow ] = useState(false);
    return(
        <div className="navigation-config-item left-icon">
            <div className="navigation-column-links navigation-config-links" onClick={()=>{ setShow(!show) }}>
                <AiOutlineRight />
                <h2>{title}</h2>
            </div>
            <div className={"links-config-container"+ (show ? ' show' : ' hide')}>
                {subRoutes.map((subRoute, i)=>{
                    return(
                        <div key={i} className="navigation-config-links">
                            <p>{subRoute}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Navigation;