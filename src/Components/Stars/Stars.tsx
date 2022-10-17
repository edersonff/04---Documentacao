import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import arrN from '../../Utils/ArrN';
import './Stars.scss';

function Stars() {
    const [starsPos, setStarsPos] = React.useState(0);
    const [selected, setSelected] = React.useState(0);
    function setStar(starPos : number) {
        setStarsPos(starPos);
    }
    function setSelectedStar(starPos : number) {
        setSelected(starPos);
    }
    return (
        <div className="stars svg-hover" onMouseLeave={()=>{setStar(selected)}}>
            {arrN(5).map((_, i) => {
                if(i <= starsPos)
                    return <BsStarFill onClick={()=>{ setSelectedStar(i) }} onMouseOver={()=>{ setStar(i) }} style={{color: 'yellow'}} key={i} />
                else 
                    return <BsStarFill onClick={()=>{ setSelectedStar(i) }} onMouseOver={()=>{ setStar(i) }} key={i} />
            })}
        </div>
    );
}

export default Stars;