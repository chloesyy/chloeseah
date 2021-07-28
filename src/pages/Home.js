import React from 'react';
import '../App.css';
import Card from '../components/Card';
import ButterflySvg from '../components/ButterflySvg.js';


function Home() {
    return (
        <>
            <div className='card-container'>
            <ButterflySvg />
            <Card />    
            </div>
        </>
    )
}

export default Home
