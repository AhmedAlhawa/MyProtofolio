import React from "react"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projim1 from "../assets/img/project-img1.png";
import projim2 from "../assets/img/project-img2.png";
import projim3 from "../assets/img/project-img3.png";
import todolist from "../assets/img/todolist.png";
import movieapp from "../assets/img/movieapp.png";
import ecommerce from "../assets/img/ecommerce.png"
import cruddapp from "../assets/img/cruddapp.png"
import countries from "../assets/img/countries.png"
import imgshrp2 from "../assets/img/color-sharp2.png"




// import imgshrp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {

    const projects = [
        {
            title: "Todo List",
            description: "todolist",
            imgUrl: todolist
        }
        ,{
            title: "Movie App",
            description: "MovieProject",
            imgUrl: movieapp
        }
        , {
            title: "E-Commerce",
            description: "e-commerce",
            imgUrl: ecommerce
        },
        {
            title: "Crud App",
            description: "cruddapp",
            imgUrl: cruddapp
        },
        {
            title: "Countries App",
            description: "countries_app",
            imgUrl: countries
        },
        // {
        //     title: "Business Startup",
        //     description: "Design && Development",
        //     imgUrl: projim3
        // },
    ]
    return (

        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>There are some of my Projects with ReactJs</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Tab tow</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <Col key={index} sm={6} md={4}>
                                                    <div style={{ cursor: 'pointer' }} className="proj-imgbx">
                                                        <a href={`https://ahmadabohawa.github.io/${project.description}/`} target="_blank">
                                                            <img src={project.imgUrl} />
                                                        </a>
                                                        <div className="proj-txtx">
                                                            <h4>{project.title}</h4>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={imgshrp2} className="background-image-right" />
        </section>
    );

}