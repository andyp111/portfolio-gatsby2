import React from 'react';
import firstCarousel from '../images/firstCarousel.png';
import secondCarousel from '../images/secondCarousel.png';
import overview from '../images/overview2.png';
import footer from '../images/footer.png';
import Header from '../components/header.js';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const Rei = () => {
    
    return (
        <Container fluid={true}>
            <div className="rei-container">
                <Header />
                <Row>
                    <Col>
                        <h1>Rei Front End</h1>
                        <p1 className="tech">React.js | Axios | CSS | Node.js | Express | MongoDB | AWS EC2 | Docker | Git</p1>
                        <br />
                        <br />
                        <p2 className="descrip">Reproduced REI product detail page with Service Oriented Architecture(SOA)</p2>
                        <br />
                        <Button className="button" variant="dark" style={{color: 'goldenrod', top: '5%'}} href="https://github.com/Pied-Piperz">Github</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={{ span: 12, offset: 2 }} lg={{ span: 10, offset: 3 }}>
                        <div className="wrapper">
                            <div className="img-area">
                                <img alt = "" src={overview} class="img-box box-1" />
                                <img alt = "" src={firstCarousel} class="img-box box-2" />
                                <img alt = "" src={secondCarousel} class="img-box box-3" />
                                <img alt = "" src={footer} class="img-box box-4" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Rei;