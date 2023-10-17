import React from "react";
import { useState,useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import headerimg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";

    export const Banner=()=>{

    const toRotate=["Software Engineer","Front-end React Developer"]
        
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
   
    const [text,setText]=useState('');
    const[delta,setDelta]=useState(300-Math.random() * 100)
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])
    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length + 1)
        
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText===fullText) {
            setIsDeleting(true);
            setDelta(period)
        }else if (isDeleting&&updatedText==='')    {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return(
        <div>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-item-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagLine">welcome to my protofolio</span>

                            <h1>{'Hi I\'m Ahmad Abu Alhawa, '}<span className="wrap">{text}</span></h1>

                            <p className="hvr-pop" style={{marginBottom:'5px'}}>Highly driven software engineer seeking for a job 
                            in ReactJs development , with +2 years of experience in developing web .</p>
                            <p >  you can
                                Send me an email by clicking on the button "Let's Connect " or just call me on my phone Number :
                                <h4 style={{paddingTop:'12px'}}>+963954808167</h4>
                             </p>
                                 
                                 <button onClick={()=>console.log('connect')}>Let's Connect <ArrowRightCircle/></button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerimg} alt="Header omage "/>
                        </Col>
                    </Row>
                </Container>                
            </section>    
        </div>
    )
}