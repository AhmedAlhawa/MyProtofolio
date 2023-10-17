import React from "react"
import { Container,Row,Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footeer=()=>{
    return(
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <h1 style={{paddingTop:'40px'}}>Front-React-Developer</h1>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/ahmad-abo-alhua-559424215" target="_blank"><img src={navIcon1} /></a>
                        <a href="https://www.facebook.com/profile.php?id=100011342491635" target="_blank"><img src={navIcon2} /></a>
                        <a href="https://www.instagram.com/ahmad_abu_alhawa22/?hl=en" target="_blank"><img src={navIcon3} /></a>
                    </div>
                        <p>Copy Right 2022, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
       
    </footer>

    );
}