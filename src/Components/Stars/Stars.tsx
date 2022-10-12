import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import arrN from '../../Utils/ArrN';
import './Stars.scss';

function Stars() {
    const [starsPos, setStarsPos] = React.useState(0);
    function setStar(starPos : number) {
        setStarsPos(starPos);
    }
    return (
        <div className="stars svg-hover">
            {arrN(5).map((_, i) => {
                if(i <= starsPos)
                    return <BsStarFill onMouseOver={()=>{ setStar(i) }} style={{color: 'yellow'}} key={i} />
                else 
                    return <BsStarFill onMouseOver={()=>{ setStar(i) }} key={i} />
            })}
        </div>
    );
}

export default Stars;