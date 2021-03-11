import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../components/header.js'
import Spotify from '../images/spotify.png';
import { Container, Row, Col } from 'react-bootstrap'


const Sptfy = () => {
    return (
        <Container fluid={true}>
            <div className="rei-container">
                <Header />
                <Row>
                    <Col>
                        <h1>Sptfy</h1>
                            <p1 className="tech">React.js | Redux | Axios | CSS | Spotify API | Express | Git</p1>
                                <br />
                                <br />
                            <p2 className="descrip">A full stack application that keeps track of user's top played songs, artists and plays user's created and followed playlists</p2>
                                <br />
                            <Button className="button" variant="dark" style={{color: 'goldenrod', top: '5%'}} href="https://github.com/andyp111/sptfy">Github</Button>
                    </Col>
                </Row>
                <Row>
                    <Col  md={12} xs={{span: 12, offset: 2}} lg={{span: 10, offset: 3}}>
                        <div className="wrapper">
                       
                            <div className="img-area">
                            
                                <img src={Spotify} alt = "" class="img-box box-5"/>
                            
                            </div>
                        
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Sptfy;