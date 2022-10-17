import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Chicara';
import './Coffe.scss';

function Coffe() {
    return (
        <div className="coffe-container hide-mobile">
            <div className="coffe-canva">
                <Canvas>
                    <OrbitControls minPolarAngle={1.5} maxPolarAngle={1.5} autoRotate={true} autoRotateSpeed={2} enableZoom={false} />
                    <Model />
                </Canvas>
            </div>
            <div className="coffe-circle" />
        </div>
    );
}

export default Coffe;