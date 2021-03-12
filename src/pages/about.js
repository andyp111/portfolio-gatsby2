import React from 'react';
import Photo from '../images/portfoliophoto.jpg';
import Header from '../components/header.js';
import group from '../images/groupsnowboard.jpg';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid={true}>
            <Header />
        <div className="about">
            <Row noGutters={true}>
                    <Col xs={{span: 12, offset: 1}} md={{span: 12, offset: 1}} lg={{span: 12, offset: 4}}> 
                        <div className="photo-container">
                            <div className="photo-wrapper">
                                <img className="photo" src={Photo} alt="self" style={{maxWidth: '100%'}}/>
                                <img className="photo2" src={group} alt="snowboard" style={{maxWidth: '100%'}}/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{span: 12, offset: 1}} md={12} lg={{span: 12, offset: 3}}>
                        <div className="about-text">
                            <h1 className="about-header">Welcome!</h1>
                            <p className="about-p">I am a recent graduate from Hack Reactor's Software Engineer Immersive program. Growing up and being surrounded by new technologies blooming in the Silicon Valley, I've always been intrigued by it and how it improved me and my communities' daily lives. I've always wondered if it would be possible that I could one day help make a big impact as well. It wasn't until I picked up programming that I realized that I can, and will help make an impact too.</p>
                            <p className="about-p">As a software developer, I am able to creatively challenge myself everyday and am excited to be able to work on new innovations destined to make a positive impact on communities. I’m currently looking for a full-time full stack developer role at a company that fosters creativity and innovation. </p>
                            <p className="about-p">In my free time, I like to build computers with the latest hardware, discovering new progamming technologies, listening to and mixing music, and staying active by playing basketball and tennis.</p>
                            <p className="about-p">Feel free to reach out anytime!</p>
                            <IconContext.Provider value={{ padding: "10px", verticalAlign: 'middle'}}>
                                <div className="icons-container">
                                    <a href="https://github.com/andyp111"><FaGithub className="github" size={30}/></a>{' '}{' '}
                                    <a href="https://linkedin.com/in/andyp111"><FiLinkedin className="li" size={30}/></a>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </Col>

                </Row>
        </div>
        </Container>
    )
}

export default About;