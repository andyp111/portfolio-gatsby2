import React from 'react';
import Typewriter from 'typewriter-effect';
import { BsBoxArrowInRight } from 'react-icons/bs'


const Intro = () => {
    return (
        <div className="intro-container" style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div className="intro-background-blur"></div>
            <div className="intro-wrapper">
                <Typewriter
                    options={{
                        strings: ['Hello! My name is Andy Pham.', ' An aspiring web developer.'],
                        autoStart: true,
                        delay: 50,
                        deleteSpeed: 75,
                        loop: true
                    }}
                />
                {/* <span className="span-rest-of-site">Check it out</span> */}
                <a href="/about"><BsBoxArrowInRight className="box-arrow" size={50} /></a>
            </div>
        </div>
    )
}

export default Intro

//might have to create own css stylesheet for intro component