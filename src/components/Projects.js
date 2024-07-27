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
import food from "../assets/img/ff.png"
import prayerTimings from "../assets/img/prayerTimings.png"
import dadJokes from "../assets/img/Dad-Jokes.png"
import rotatingNavigation from "../assets/img/RotatingNavigation.png"
import landingPage from "../assets/img/Landing-Page.png"
import expandingCard from "../assets/img/ExpandingCard.png"
import TicTacToe from "../assets/img/Tic-Tac-Toe.png"
import verticalSlider from "../assets/img/VerticalSlider.png"
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
        {
            title: "Food Delivery App",
            description: "food-delivery-app",
            imgUrl: food
        },
        {
            title: "Prayer Timings",
            description: "prayer-Timings",
            imgUrl: prayerTimings
        },
        {
            title: "Tic-Tac-Toe",
            description: "Tic-Tac-Toe",
            imgUrl: TicTacToe
        }
    ]

    
    const HtmlProjects = [
        {
            title: "Landing Page",
            description: "LandingPage",
            imgUrl: landingPage
        },
        {
            title: "Dad Jokes",
            description: "Dad-Jokes",
            imgUrl: dadJokes
        },
        {
            title: "Expanding Card",
            description: "ExpandingCard",
            imgUrl: expandingCard
        },
        {
            title: "RotatingNavigation",
            description: "RotatingNavigation",
            imgUrl: rotatingNavigation
        },
        {
            title: "VerticalSlider",
            description: "VerticalSlider",
            imgUrl: verticalSlider
        }
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
                                    <Nav.Link eventKey="first">React Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Html&Css&js</Nav.Link>
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
                                                        <a href={`https://ahmedalhawa.github.io/${project.description}/`} target="_blank">
                                                            {
                                                                <img src={project.imgUrl} style={{height:"225px"}}/>
                                                            }
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
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {HtmlProjects.map((project,index)=>{
                                        return(
                                            <Col key={index} sm={6} md={4}>
                                            <div style={{ cursor: 'pointer' }} className="proj-imgbx">
                                                <a href={`https://AhmedAlhawa.github.io/${project.description}/`} target="_blank">
                                                    {
                                                        <img src={project.imgUrl} style={{height:"225px"}}/>
                                                    }
                                                </a>
                                                <div className="proj-txtx">
                                                    <h4>{project.title}</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        )
                                        })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={imgshrp2} className="background-image-right" />
        </section>
    );

}