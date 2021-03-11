import React from 'react';
import trackcar from '../images/trackCardashboard.png';
import Header from '../components/header.js';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap'


const TrackCarMVP = () => {
    return (
        <Container fluid={true}>
            <div className="rei-container">
                <Header />
                <Row>
                    <Col>
                        <h1>TrackCar</h1>
                            <p1 className="tech">React.js | Axios | React Boostrap | CSS | Node.js | Express | MongoDB | Firebase | Git</p1>
                                <br />
                                <br />
                            <p2 className="descrip">A full-stack app that keeps track of all your car's due and upcoming maintenance by a team of four engineers</p2>
                                <br />
                            <Button className="button" variant="dark" style={{color: 'goldenrod', top: '5%'}} href="https://github.com/fix-car/fix-car">Github</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={{span: 12, offset: 2}} lg={{span: 10, offset: 3}}>
                        <div className="wrapper">
                            <div className="img-area">
                                <img src={trackcar} alt="" class="img-box box-5"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default TrackCarMVP;