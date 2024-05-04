import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Container,Row,Col } from "react-bootstrap";
import html5     from "../assets/img/html5.jpg";
import css from "../assets/img/CSS.jpg";
import html1 from "../assets/img/html1.jpg"
import js3  from "../assets/img/js3.jpg";
import react2 from "../assets/img/react2.jpg"
import MateriaUi from "../assets/img/MateriaUi.jpg"
import Next from "../assets/img/Next.jpg"
import state1 from "../assets/img/state1.jpg"
import redux from "../assets/img/redux.jpg"
import agile from "../assets/img/Agile.jpg"
import problems_solving from "../assets/img/problems solving.jpg"
import uml3 from "../assets/img/uml3.jpg"

    export const Skills =()=>{

        const responsive ={
            superLargerDesktop:{
                
                breakpoint:{max:4000,min:3000},
                items:5
            },
            desktop:{
                
                breakpoint:{max:3000,min:1024},
                items:3
            },
            tablet:{
                
                breakpoint:{max:1024,min:464},
                items:2
            },
            mobile:{
                breakpoint:{max:464,min:0},
                items:1
            },
        };

        return(
            <section className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>

                            <p>
                                Further More those skills i will be able to learn any new skill to convert business needs
                                into high-value products 
                            </p>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={html5} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5> HTML </h5>
                                </div>
                                <div className="item">
                                    <img src={css} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5> CSS </h5>
                                </div>
                                <div className="item">
                                    <img src={js3} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={html1} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>Tailwind CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={MateriaUi} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>Material-Ui</h5>
                                </div>
                                <div className="item">
                                    <img src={react2} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>ReactJs</h5>
                                </div>
                                <div className="item">
                                    <img src={state1} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>State Management</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>ReduxToolkit</h5>
                                </div>
                                <div className="item">
                                    <img src={Next} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>NextJs</h5>
                                </div>
                                <div className="item">
                                    <img src={agile} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>Agile</h5>
                                </div>
                                <div className="item">
                                    <img src={problems_solving} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>Problem Solving</h5>
                                </div>
                                <div className="item">
                                    <img src={uml3} style={{height:'200px',borderRadius:'50%'}} alt="img1"/>
                                    <h5>UML CHARTS</h5>
                                </div>

                                </Carousel>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );



    }