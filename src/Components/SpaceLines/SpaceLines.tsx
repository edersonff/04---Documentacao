import React, { useEffect, useState, useRef } from 'react';
import './SpaceLines.scss'

function SpaceLines({ right = false, velocity, size, opacity, pos } : { right?: boolean, velocity: number, size: number, opacity: number, pos: Array<number> }) {

    const linesRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        
        velocity = velocity == 0 ? 1 : velocity;
        velocity = right ? -velocity : velocity;

        const {innerWidth} = window;
        setInterval(() => {
            if (linesRef && linesRef.current) {
                linesRef.current.style.left = `${linesRef.current.offsetLeft + velocity}px`;

                const left = linesRef.current.offsetLeft + velocity;
                if(innerWidth<left || 0>left+size){
                    linesRef.current.remove();
                }
            }

        }, 1000/45);
    }, [])
    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <div>
            <div ref={linesRef} className="space-lines" style={{ left: pos[0], top: pos[1], width: size, transform: right? 'rotate(180deg)' : '', opacity}}>
                <div className="space-line red" style={{ top: random(4,10), left: random(4,15) }} />
                <div className="space-line blue" />
            </div>
        </div>
    );
}

export default SpaceLines