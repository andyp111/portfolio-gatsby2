import React from 'react';
import Header from '../components/header.js';
import { Button, Container, Row, Col } from 'react-bootstrap';
import resumeFile from '../../downloads/AndyPhamResume2021.pdf';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
    return (
        <Container fluid={true}>
            <div>
                <Header />
                <div style={{ position: 'relative', top: '50%', left: '50%' }}>
                    <a href={`${resumeFile}`} download id="download-btn"><FiDownload size={30}/></a>
                </div>
                <Row xs={1} md={2}>
                    <Col xs={12} md={6} lg={8} xl={8}>
                        <div className="full-resume-page">
                            <div className="resume-title">
                                <h1 style={{ fontSize: '45px' }}>Andy Pham</h1>
                                <h1 style={{ color: '#707b80', fontSize: '35px' }}>Full Stack Developer</h1>
                                <br />
                                <p><span style={{ fontWeight: 'bold' }}>Github</span> | github.com/andyp111</p>
                                <p><span style={{ fontWeight: 'bold' }}>LinkedIn</span> | linkedin.com/in/andyp111</p>
                            </div>
                            <br />
                            <div className="resume-applications">
                                <h1 style={{ color: '#097ddb', fontSize: '30px' }}>APPLICATIONS</h1>
                                <p><span style={{ fontWeight: 'bold' }}>Sptfy</span> | React.js, CSS, Node.js, Node.js, Express, Git</p>
                                <p style={{ fontStyle: 'italic' }}>A full-stack application that allows users to view their top played songs, artists, and plays user’s created and followed playlists.</p>
                                <ul className="resume-list">
                                    <li>Integrated Spotify’s API with an OAuth bridge in order to authenticate user login and persist user information. </li>
                                    <li>Incorporated Redux for API calls in order to request user information per page and what the user selected to view.  </li>
                                </ul>
                                <p><span style={{ fontWeight: 'bold' }}>TrackCar</span> | React.js, React Bootstrap, CSS, Node.js, Express, Firebase, MongoDB</p>
                                <p style={{ fontStyle: 'italic' }}>A full-stack app that keeps track of all your car’s due and upcoming maintenance by a team of four engineers.</p>
                                <ul className="resume-list">
                                    <li>Utilized CarMD’s API to build a restful backend capable of retrieving necessary maintenance depending on the year, model, make and mileage of the user’s car.</li>
                                    <li>Used Firebase’s authentication in order to encrypt and store user information.</li>
                                    <li>Allowed users to filter maintenance and update current car mileage by persisting updated data with necessary calculations on the backend. </li>
                                </ul>
                                <p><span style={{ fontWeight: 'bold' }}>System Design</span> | PostgreSQL, Node.js, Express, K6.io, Loader.io NewRelic, AWS EC2, Nginx, Git</p>
                                <p style={{ fontStyle: 'italic' }}>A scaled database with over 50,000,000 stored data with a throughput of 1100 rps, 1958ms latency and less than 1% error rate.</p>
                                <ul className="resume-list">
                                    <li>Optimized inherited legacy code utilizing PSQL in order to reduce query times for relational data by allocating more memory for join queries.</li>
                                    <li>Deployed 4 EC2 instances and utilized Nginx least connection caching to increase throughput by 450% and decrease latency by 250%.</li>
                                    <li>Analyzed throughput, latency, and error rate with NewRelic when testing with K6.io locally and Loader.io when deployed via AWS EC2.</li>
                                </ul>
                                <p><span style={{ fontWeight: 'bold' }}>REI Products</span> | React.js, Axios, CSS,  Node.js, Express, MongoDB, AWS EC2, Docker, Git</p>
                                <p style={{ fontStyle: 'italic' }}>A full-stack application for a product overview page created by a team of three engineers.</p>
                                <ul className="resume-list">
                                    <li>Built a minimum viable product utilizing agile methodologies in order to efficiently create viable services.</li>
                                    <li>Implemented two image sliders to display related product items and what customers frequently bought utilizing CSS and React.</li>
                                    <li>Deployed website on an AWS t2.micro Linux server and dockerized 4 separate components to serve one static site. </li>
                                </ul>
                            </div>
                            <div className="resume-experience">
                                <h1 style={{ color: '#097ddb', fontSize: '30px' }}>EXPERIENCE</h1>
                                <p><span style={{ fontWeight: 'bold' }}>NinjaCrab Studios,</span> Irvine CA — <span style={{ fontStyle: 'italic' }}>Software Engineer Intern</span></p>
                                <p>February 2021 - Present</p>
                                <ul className="resume-list">
                                    <li>Implementing new features for a mobile application game.</li>
                                    <li>Practicing test driven development to ensure new features operate correctly on a mobile platform.</li>
                                </ul>
                                <p><span style={{ fontWeight: 'bold' }}>Boot Barn Holdings Inc,</span> Irvine CA — <span style={{ fontStyle: 'italic' }}>Logistics Coordinator</span></p>
                                <p>June 2018 - October 2019</p>
                                <ul className="resume-list">
                                    <li>Coordinated 5,000 international LCL and FCL bookings annually to arrive at written purchase order dates and ensure orders were ready for release.</li>
                                    <li>Ensured vendor compliance through Conflict Minerals and Prop 65 to comply with SEC regulations and reporting. </li>
                                </ul>
                                <p><span style={{ fontWeight: 'bold' }}>Sunshine School USA,</span> San Jose CA — <span style={{ fontStyle: 'italic' }}>Teacher Assistant</span></p>
                                <p>June 2018 - October 2019</p>
                                <ul className="resume-list">
                                    <li>Supervised, mentored, and instructed children ages 6-13 by monitoring homework, assisting with projects, and setting up recreational activities.</li>
                                    <li>Assisted staff members with organization, preparation, and execution of special events by planning talent shows, promotion ceremonies, and field trips.</li>
                                </ul>
                            </div>

                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 2 }} md={{ span: 3, offset: 2 }} lg={4} xl={2}>
                        <div className="resume-column2">
                            <div className="langauges">
                                <h1 style={{ color: '#097ddb', fontSize: '30px' }}>LANGUAGES</h1>
                                <p style={{ color: '#707b80' }}>English | Vietnamese</p>
                            </div>
                            <div className="technologies">
                                <h1 style={{ color: '#097ddb', fontSize: '30px' }}>TECHNOLOGIES</h1>
                                <p style={{ color: '#707b80' }}><span style={{ fontWeight: 'bold' }}>Languages</span> | Javascript (ES5, ES6), C#</p>
                                <p style={{ color: '#707b80' }}><span style={{ fontWeight: 'bold' }}>FrontEnd</span> | React, Redux jQuery, Axios, HTML5, CSS3</p>
                                <p style={{ color: '#707b80' }}><span style={{ fontWeight: 'bold' }}>BackEnd</span> | Node.js, Express, MySQL, MongoDB, Mongoose, PostgreSQL, RESTful API Development  </p>
                                <p style={{ color: '#707b80' }}><span style={{ fontWeight: 'bold' }}>Testing</span> | Mocha, Chai, Jest, Loader.io, K6.io</p>
                                <p style={{ color: '#707b80' }}><span style={{ fontWeight: 'bold' }}>Deployment</span> | AWS EC2, Docker</p>
                                <p style={{ color: '#707b80' }}><span style={{ fontWeight: 'bold' }}>Developer Tools</span> | Git, npm, Webpack, Babel, Agile Methodology</p>
                                <p style={{ color: '#707b80' }}><span style={{ fontWeight: 'bold' }}>OS</span> | macOs, Windows, Linux(shell), Ubuntu(shell)</p>
                            </div>
                            <div className="education">
                                <h1 style={{ color: '#097ddb', fontSize: '30px' }}>EDUCATION</h1>
                                <h1 style={{ fontSize: '15px' }}>University of California, Irvine, Irvine CA - Pursued Business Economics Degree</h1>
                                <p>September 2015 - June 2018</p>
                                <h1 style={{ fontSize: '15px' }}>Hack Reactor LA, Los Angeles, CA - SWE Certificate</h1>
                                <p>October 2020 - January 2021</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Resume;