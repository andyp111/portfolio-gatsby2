import React from 'react'
import Header from '../components/header.js';
import TrackCar from '../images/trackCardashboard.png';
import SDC_Instances from '../images/sdcInstances.png';
import fecOverview from '../images/overview2.png';
import SpotifyPlaylist from '../images/spotify.png'
import ProjectList from '../components/projectList';
import Sptfy from './sptfy.js';
import TrackCarMVP from './trackcar-mvp.js';
import SystemDesign from './systemdesign.js';
import Rei from './rei.js';
import { Container, Row, Col } from 'react-bootstrap'


const Projects = () => {
    let projects = [
        {
            imgFile: SpotifyPlaylist,
            comp: Sptfy,
            name: 'sptfy'
        },
        {
            imgFile: TrackCar,
            comp: TrackCarMVP,
            name: 'trackcar-mvp'
        },
        {
            imgFile: SDC_Instances,
            comp: SystemDesign,
            name: 'systemdesign'
        },
        {
            imgFile: fecOverview,
            comp: Rei,
            name: 'rei'
        }
    ]
    //need to fix size of images
    return (
        <Container fluid={true}>
            <div>
                <Header />
                <div className="container" style={{display: 'flex', justifyContent: 'center', maxWidth: '100%', flexDirection:'row', flexWrap:'wrap', padding: '0px', position: 'relative'}}>
                    {projects.map((project, index) => {
                        return (
                            <Row noGutters={true}>
                                <Col xs={{span: 12, offset: 0}} lg={{span: 8, offset: 2}}>
                                    <ProjectList project={project}/>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Projects;