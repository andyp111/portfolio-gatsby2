import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


const ProjectList = (props) => {

    const [isShown, setIsShown] = useState(false);
    const [isClicked, hasBeenClicked] = useState(false);
    let projectName = props.project.name;

    return (
        <Container fluid={true}>
            <div className="list-container" style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent:'center', position: 'relative', maxWidth:"100%", height: 'auto'}}>
                <Row>
                    <Col xs={12} lg={12}>
                        {isShown ? <img alt="" src={props.project.imgFile} style={{display: 'flex', maxWidth:"100%", height: 'auto', position: 'relative', padding: '10px', opacity: '0.5'}}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)} />
                            : <img alt="" src={props.project.imgFile} style={{display: 'flex', maxWidth:"100%", height: 'auto', position: 'relative', padding: '10px'}}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)} />
                            }
                        {isShown && <a href={`/${projectName}`}><span key={props.index}
                            style={
                                {position: 'absolute', zIndex: '100', color: 'black', top: '50%', left:'50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', background: "transparent", color:"goldenrod", fontSize: '23px'}}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            onClick={() => hasBeenClicked(!isClicked)}>
                                see more
                            </span></a>
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ProjectList;

