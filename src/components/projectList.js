import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const ProjectList = (props) => {

    const [isShown, setIsShown] = useState(false);
    const [isClicked, hasBeenClicked] = useState(false);
    let projectName = props.project.name;

    return (
        <div className="list-container" style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent:'center', position: 'relative', maxWidth: "100%"}}>
            {isShown ? <img alt="" src={props.project.imgFile} style={{display: 'flex', maxWidth:'100%', position: 'relative', padding: '10px', opacity: '0.5'}}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)} />
                : <img alt="" src={props.project.imgFile} style={{display: 'flex', maxWidth:'100%', position: 'relative', padding: '10px'}}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)} />
                }
            {isShown && <a href={`/${projectName}`}><span key={props.index}
                style={
                    {position: 'absolute', zIndex: '100', color: 'black', top: '50%', left:'50%', transform: 'translate(-50%, -50%)', borderRadius: '5px', background: "transparent", color:"goldenrod"}}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => hasBeenClicked(!isClicked)}>
                    see more
                </span></a>
            }
        </div>
    )
}

export default ProjectList;

