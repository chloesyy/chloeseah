import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, useChain, useSpringRef } from 'react-spring';
import './Card.css';

function Card({ start }) {
    const delay = 4000;
    const cardRef = useSpringRef();
    const cardAnimation = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            friction: 100
        },
        delay: delay,
        ref: cardRef
    })

    const contentRef = useSpringRef();
    const contentAnimation = useSpring({
        from: {
            opacity: 0,
            y: 50
        },
        to: {
            opacity: 1,
            y: 0
        },
        config: {
            duration: 500
        },
        delay: delay,
        ref: contentRef
    })

    const headingRef = useSpringRef();
    const headingAnimation = useSpring({
        from: {
            opacity: 0,
            y: 50
        },
        to: {
            opacity: 1,
            y: 0
        },
        config: {
            duration: 500
        },
        delay: delay,
        ref: headingRef
    })

    const smallTextRef = useSpringRef();
    const smallTextAnimation = useSpring({
        from: {
            opacity: 0,
            y: 50
        },
        to: {
            opacity: 1,
            y: 0
        },
        config: {
            duration: 500
        },
        delay: delay,
        ref: smallTextRef
    })

    const AnimatedLink = animated(Link)
    const linkedinRef = useSpringRef();
    const linkedinAnimation = useSpring({
        from: {
            opacity: 0,
            scale: 1
        },
        to: [
            {opacity: 1, scale: 1.5},
            {opacity: 1, scale: 1}
        ],
        config: {
            duration: 250
        },
        delay: delay,
        ref: linkedinRef
    })

    const instagramRef = useSpringRef();
    const instagramAnimation = useSpring({
        from: {
            opacity: 0,
            scale: 1
        },
        to: [
            {opacity: 1, scale: 1.5},
            {opacity: 1, scale: 1}
        ],
        config: {
            duration: 250
        },
        delay: delay,
        ref: instagramRef
    })

    const githubRef = useSpringRef();
    const githubAnimation = useSpring({
        from: {
            opacity: 0,
            scale: 1
        },
        to: [
            {opacity: 1, scale: 1.5},
            {opacity: 1, scale: 1}
        ],
        config: {
            duration: 250
        },
        delay: delay,
        ref: githubRef
    })

    useChain(start ? [cardRef, contentRef, headingRef, smallTextRef, linkedinRef, instagramRef, githubRef] : [], [0, 0.1, 0.2, 0.3, 0.6, 0.7, 0.8], 4000);

    return (
        <>
            <animated.div style={cardAnimation} className='card'>
                <div className='card-intro'>
                    <animated.p style={contentAnimation} className='content'>Hey! I'm</animated.p>
                    <animated.h1 style={headingAnimation} className='heading'>chloeseah.</animated.h1>
                    <animated.p style={smallTextAnimation} className='small-text'>Welcome to my space on the internet.</animated.p>
                </div>
                <div className='social-icons-container'>
                    <div className='social-icons'>
                        <AnimatedLink style={linkedinAnimation} className='social-icon-link linkedin' to={{ pathname: 'https://www.linkedin.com/in/chloe-seah-1456901b0/' }} target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </AnimatedLink>
                        <AnimatedLink style={instagramAnimation} className='social-icon-link instagram' to={{ pathname: 'https://www.instagram.com/chloe_syy_/' }} target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </AnimatedLink>
                        <AnimatedLink style={githubAnimation} className='social-icon-link github' to={{ pathname: 'https://github.com/chloesyy' }} target='_blank' aria-label='Github'>
                            <i className='fab fa-github'></i>
                        </AnimatedLink>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default Card
