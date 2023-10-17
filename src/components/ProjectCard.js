import React from "react";
import { Col } from "react-bootstrap";


export const ProjectCard = ({title,description,imgUrl})=>{
   
    return(
        <Col sm={6} md={4}>
        <div style={{cursor:'pointer'}} className="proj-imgbx">
            <a href="#">
                <img src={imgUrl}/>
                </a>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )

}