import React, { useState } from 'react';
import '../App.css';
import Card from '../components/Card';
import ButterflySvg from '../components/ButterflySvg.js';


function Home() {
    const [start, setStart] = useState(true);
    return (
        <>
            <div className='card-container'>
            <ButterflySvg />
            <Card start={start}/>    
            </div>
        </>
    )
}

export default Home
