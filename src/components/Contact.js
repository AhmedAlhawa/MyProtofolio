import React, { useRef, useState } from "react"
import { Container,Row,Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';
export const Contact=()=>{

    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const[formDetails,setformDetails]=useState(formInitialDetails);
    const [buttonText,setButtonText]=useState('Send');
    const[status,setStatus]=useState({});

    const form = useRef();

    const onFormUpdate = (category,value)=>{
            setformDetails({
                ...formDetails,
                [category]:value
            })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
        'service_qqjh6pp', 
        'template_u0691st',
         form.current,
        'H2orf85X-3Q0KKhwB')
        // Clear the form data
  setformDetails(formInitialDetails);
                console.log("email sent")
        }
    return(
        <section className="contact" id="connect">
            <Container className="align-items-center">
                <Row>
                    <Col md={6}>
                        <img className="hvr-pop" src={contactImg}/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch
                        <h6 style={{lineHeight:'20px'}}>If you Wanna Send me an email just fill the fields and click on Send i will receive your email :</h6>
                        </h2>
                        <form ref={form}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} name="FirstName" placeholder="First Name"
                                     onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} name="LastName" placeholder="Last Name"
                                     onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} name="Email" placeholder="Email"
                                     onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} name="PhoneNumber" placeholder="Phone No."
                                     onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea rows={6} value={formDetails.message} name="Message" placeholder="Message"
                                     onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                                     <button type="submit" onClick={handleSubmit}><span>Send</span></button>
                                </Col>
                               
                                    <Col>
                                        <p className={status.success===false?"danger":"success"}>{status.message}</p>
                                    </Col>

                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}