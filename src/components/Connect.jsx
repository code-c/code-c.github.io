import React, {useState} from "react";
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
// import { calendarFormat } from "moment";
import "./../styles/connect.css";

// image imports 
import linkedIn from "../staticImages/linkedin.webp";


function Connect() {
    const [form, setForm] = useState(0);
    const [errors, setErrors] = useState(0);
    const [show, setShow] = useState(false);

    // grab the form data
    const setFeild = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, if not we remove them
        if ( !!errors[field] ) setErrors({
        ...errors,
        [field]: null
        })
    }

    const checkEmail = (email) => {
        var emailRegex = /\S+@\S+\.\S+/;

        return emailRegex.test(email);
    }

    const findFormErrors = () => {
        const {name, email, message} = form
        const newErrors = {}

        //name errors/restricting length
        if (!name || name==='') newErrors.name = 'you must provide a name...'
        else if (name.length > 40) newErrors.name = 'name is too long!'
        
        //email errors 
        if (!email || email==='') newErrors.email = 'you must provide an email!'
        if (!checkEmail(email)) newErrors.email = 'enter correct format "you@example.com"'

        //message section
        if (!message || message==='') newErrors.message = 'you should write something!'
        else if (message.length > 300) newErrors.message = 'you have reached character limit'
        return newErrors
    }
    
    function sendEmail(e) {
      e.preventDefault();
        
      //get any errors
      const newErrors = findFormErrors();

      //check if we got some errors
      if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        setErrors(newErrors)
      } else {
          //clear form
            document.getElementById('connectForm').reset();

          //send email to me using emailjs
        emailjs.send('service_9l2xd69', 'web_reply', form, 'user_xTGxpp4bUawlgttagFsxn')
            .then((result) => {
                console.log(result.text);
                //show popup
                setShow(true);
            }, (error) => {
                console.log(error.text);
            });
        }
    }
  
    return (
        <div className='connect'>
            <h1 className="connect-title">Connect With Me</h1>
            <div className='connect-body'>
                <Form 
                id = "connectForm"
                //ref={ form => this.messageForm = form } 
                onSubmit={sendEmail}
                className = "connect-form"
                >
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="John Seed"
                            name="name"
                            onChange={e => setFeild('name', e.target.value)}
                            isInvalid = {!!errors.name}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="johnseed@example.com"
                            name="name"
                            onChange={e => setFeild('email', e.target.value)}
                            isInvalid = {!!errors.email}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as='textarea' 
                            placeholder="your message here..."
                            name="message"
                            onChange={e => setFeild('message', e.target.value)}
                            isInvalid = {!!errors.message}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="connect-form-button">
                        <Button type='submit' value="Submit">Send</Button>
                    </div>
                </Form>
                <div className='connect-text'> 
                    <p>
                        You can connect with me via the form <br></br> 
                        and I will email you back shortly or <br></br>
                        you can reach out via one of the channels below! <br></br> 
                        I look forward to hearing from you!
                    </p>
                    <div className='profiles'>
                        <a href="https://www.linkedin.com/in/codie-cottrell/" target="blank">
                        <img className="hvr-grow" src={linkedIn} alt="linkedIn"></img>
                        </a>
                    </div>
                </div>
                <Toast 
                onClose={() => setShow(false)} 
                show={show} 
                delay={6000} autohide
                className="submit-message"
            >
                <Toast.Header>
                    <strong className="mr-auto">Email Sent!</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>Thank you for reaching out! I should get back to you soon</Toast.Body>
            </Toast>
            </div>
        </div>
    );
  }

  export default Connect;
