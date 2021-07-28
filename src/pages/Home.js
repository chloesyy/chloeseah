import React, { useState } from 'react';
import '../App.css';
import Card from '../components/Card';
import ButterflySvg from '../components/ButterflySvg.js';
import { useSpring, animated, useSpringRef } from 'react-spring';

function Home() {
    const [start, setStart] = useState(false);
    const AnimatedButterflySvg = animated(ButterflySvg);

    const butterflyAnimation = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: {
            duration: 1000
        },
        onRest: () => setStart(true)
    })

    return (
        <>
            <div className='card-container'>
                <AnimatedButterflySvg style={butterflyAnimation}/>
                <Card start={start}/>    
            </div>
        </>
    )
}

export default Home
