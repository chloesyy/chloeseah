import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card() {
    return (
        <>
            <div className='card'>
                <p className='content'>Hey! I'm</p>
                <h1>chloeseah.</h1>
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
        </>
    )
}

export default Card
