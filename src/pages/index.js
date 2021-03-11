import * as React from "react";
import { Router } from "@reach/router";
import About from './about.js';
import Header from "../components/header.js";
import Intro from '../components/intro.js';
import Contact from './contact.js';
import Projects from './projects.js';
import Resume from './resume.js';
import { Container, Row, Col } from 'react-bootstrap'


const IndexPage = () => {

  return (
    <Container fluid={true}>
      <div className="main">
        <Header>
          <Router>
            <About path="/about" />
            <Contact path="/contact" />
            <Projects path="/projects" />
            <Resume path="/resume" />
            <IndexPage path="/" />
          </Router>
        </Header>
        <Row>
          <Col>
            <Intro />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default IndexPage
