import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import HalfPage from '../../Components/HalfPage/HalfPage';
import './Home.scss';
import { AiOutlineArrowRight } from "react-icons/ai";
import Section from '../../Components/Section/Section';
import Coffe from '../../Components/Coffe/Coffe';
import SpaceLines from '../../Components/SpaceLines/SpaceLines';
import SideBar from '../../SideBar/SideBar';

function Home({}) {
    const {innerWidth, innerHeight} = window;

    const spacesLines = [];
    for (let i = 0; i < 25; i++) {
        spacesLines.push( i< 12 ? 
        <SpaceLines key={i}         velocity={Math.floor(Math.random() * 2)} size={Math.random() * 300} opacity={Math.random() * 0.5} pos={[Math.random() * innerWidth, Math.random() * innerHeight]} /> : 
        <SpaceLines key={i} right   velocity={Math.floor(Math.random() * 2)} size={Math.random() * 300} opacity={Math.random() * 0.5} pos={[Math.random() * innerWidth, Math.random() * innerHeight]} /> );
        spacesLines.push( i< 12 ? 
        <SpaceLines key={i}         velocity={Math.floor(Math.random() * 2)} size={Math.random() * 20} opacity={Math.random() * 0.5} pos={[Math.random() * innerWidth, Math.random() * innerHeight]} /> : 
        <SpaceLines key={i} right   velocity={Math.floor(Math.random() * 2)} size={Math.random() * 20} opacity={Math.random() * 0.5} pos={[Math.random() * innerWidth, Math.random() * innerHeight]} /> );
    }
    return (
        <div className='home-container'>
        <HalfPage height='100%' color='radial-gradient(41.52% 62.31% at 71.9% 50%, rgba(61, 100, 108, 1) 0%, rgb(22, 43, 49) 100%)' margin='0'>
            <SideBar />
            <div className="home-halfpage">
                <div className="home-halfpage-content">
                    <h1>Uma ajuda para os programadores ;)</h1>
                    <p>Não seja tímido</p>
                    <button>Bora?</button>
                </div>
                <Coffe />
            </div>
            {spacesLines.map((item) => item)}
        </HalfPage>
        <Section>
            <div className="content">
                <div className="section-content">
                    <h1 className='title'>TITULO do cont</h1>
                </div>
            </div>
        </Section>
    </div>
    );
}

export default Home;