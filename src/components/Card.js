import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './Card.css';

function Card() {
    const [cardVisible, setCardVisible] = useState(false);
    const transitionCard = useTransition(cardVisible, {
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        config: {
            friction: 100,
        }
    });
    window.onload = () => {
        setCardVisible(true);
    }
    return (
        <>
            {transitionCard((style, item) => item && 
            <animated.div style={style} className='card'>
                <div className='card-intro'>
                    <p className='content'>Hey! I'm</p>
                    <h1>chloeseah.</h1>
                    <p className='small-text'>Welcome to my space on the internet.</p>
                </div>
                <div className='social-icons-container'>
                    <div className='social-icons'>
                        <Link className='social-icon-link linkedin' to={{ pathname: 'https://www.linkedin.com/in/chloe-seah-1456901b0/' }} target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                        <Link className='social-icon-link instagram' to={{ pathname: 'https://www.instagram.com/chloe_syy_/' }} target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link github' to={{ pathname: 'https://github.com/chloesyy' }} target='_blank' aria-label='Github'>
                            <i className='fab fa-github'></i>
                        </Link>
                    </div>
                </div>
            </animated.div>)}
        </>
    )
}

export default Card
