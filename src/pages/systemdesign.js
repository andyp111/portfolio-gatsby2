import React from 'react';
import SDC_Instances from '../images/sdcInstances.png';
import SDC_Metrics from '../images/sdcMetrics.png';
import Header from '../components/header.js';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap'

const SystemDesign = () => {
    return (
        <Container fluid={true}>
            <div className="rei-container">
                <Header />
                <Row>
                    <Col>
                        <h1>System Design</h1>
                            <p1 className="tech">PostgreSQL | Node.js | Express | K6.io | Loader.io | NewRelic | Nginx | Git</p1>
                                <br />
                                <br />
                            <p2 className="descrip">A scaled database with over 50,000,000 stored data with 1100 rps throughput, 1958ms latency, and less than 1% error rate</p2>
                                <br />
                            <Button className="button" variant="dark" style={{color: 'goldenrod', top: '5%'}} href="https://github.com/Pied-Piperz/SDCqanda">Github</Button>
                    </Col>
                </Row>
                <Row>
                    <Col  md={12} xs={{span: 12, offset: 2}} lg={{span: 10, offset: 3}}>
                        <div className="wrapper">
                            <div className="img-area">
                                <img src={SDC_Instances} alt="" class="img-box box-1"/>
                                <img src={SDC_Metrics} alt="" class="img-box box-2"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SystemDesign;