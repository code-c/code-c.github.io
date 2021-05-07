import React, {useState} from "react";
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { calendarFormat } from "moment";




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
        <div className='connect-section'>
            <div id='connect-form' class="connect-form">
               <h1 class="display text-center form-title">Contact Me:</h1>
                <Form 
                id = "connectForm"
                //ref={ form => this.messageForm = form } 
                onSubmit={sendEmail}
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
                            name="email"
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
                    <Button type='submit' value="Submit">Send</Button>
                </Form>
            </div>
            <Toast 
                onClose={() => setShow(false)} 
                show={show} 
                delay={6000} autohide
            >
                <Toast.Header>
                    <strong className="mr-auto">Submitted!</strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>Thank you for reaching out! I should get back to you soon</Toast.Body>
            </Toast>
        </div>
    );
  }

  export default Connect;
