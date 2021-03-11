import React from 'react';
import Header from '../components/header.js';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Contact = () => {

    return (
        <Container fluid={true}>
            <div>
                <Header />
                <Row>
                    <Col xs={12} s={12} lg={12}>
                        <div style={{ justifyContent: 'center', display: 'flex', top: '10%' }}>
                            <h1 style={{ fontSize: "20px" }}>You can contact me here and I'll respond as soon as possible!</h1>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col xs={12} s={12} lg={{ span: 12 }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '10px',
                            top: '10rem',
                            alignItems: 'center'
                        }}>
                            <Form method="post" action="https://getform.io/f/aeb8a857-38d8-43c7-a7f8-7a813557ed31">
                                <Form.Control sz="lg" type="name" placeholder="name" name="name" id="name" />
                                <br />
                                <Form.Control sz="lg" type="email" placeholder="email" name="email" id="email" />
                                <br />
                                <Form.Control sz="lg" type="text" placeholder="subject" name="subject" id="subject" />
                                <br />
                                <Form.Control sz="lg" as="textarea" name="message" id="message" rows={6} />
                                <br />
                                <Button variant="dark" style={{ color: 'goldrenrod' }} type="submit">Send</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Contact;