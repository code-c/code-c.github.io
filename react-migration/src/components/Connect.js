import React from "react";
import ReactDOM from 'react-dom';
import emailJS, {init} from 'emailjs-com';
init("user_xTGxpp4bUawlgttagFsxn");

class Connect extends React.Component {

    // constructor for form handling
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    sendEmail (event) {
    event.preventDefault();

    const {
        firstName, 
        lastName,
        email,
        message
        } = this.state;

    let templateParams = {
        from_name: firstName + lastName,
        to_name: 'Codie',
        message: message,
        from_email: email
    }
        
    emailJS.send('gmail', 'service_hkp5dml', 'web_reply', templateParams)
}
    
    handleChange(event) {    
        event.preventDefault();
        const target = event.target;
        const firstName = target.firstName;
        const lastName = target.lastName;
        const email = target.email;
        const message = target.message;
        const value = target.value;

        this.setState({
            [firstName]: value,
            [lastName]: value,
            [email]: value,
            [message]: value,
        });
        console.log(firstName)
    }


    render (){
        return (
            <div id='connect-section'>

                {/* <!-- Form section --> */}
                <div id='connect-form' class="connect-form">
                    <h1 class="display text-center form-title">Contact Me:</h1>
                    <form 
                        id={this.props.id}
                        name={this.props.name}
                        method={this.props.method}
                        action={this.props.action}
                        onSubmit = {this.sendEmail.bind(this)}
                    >
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    {/* <!-- first name --> */}
                                    <label for="form-name">First name *</label>
                                    <input 
                                        id='firstName' 
                                        name="firstName" 
                                        onChange={this.handleChange.bind(this)} 
                                        className="form-control" 
                                        placeholder="Please enter your first name" 
                                        required data-error="Firstname is required">
                                    </input>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    {/* <!-- last name --> */}
                                    <label for="form-lastname">Last name *</label>
                                    <input 
                                        id= 'lastName' 
                                        name="lastName" 
                                        onChange={this.handleChange.bind(this)} 
                                        className="form-control" 
                                        placeholder="last name" 
                                        required data-error="Firstname is required">
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    {/* <!-- email --> */}
                                    <label for="form_email">Email *</label>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        onChange={this.handleChange.bind(this)} 
                                        className="form-control" 
                                        placeholder="Please enter your email *" 
                                        required data-error="Valid email is required.">
                                    </input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    {/* <!-- message --> */}
                                    <label for="form_message">Message *</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        onChange={this.handleChange.bind(this)} 
                                        className="form-control" 
                                        placeholder="Message for me *" 
                                        rows="4" 
                                        required data-error="Please, leave us a message.">
                                    </textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- add new scales or additions to the form here --> */}
                        <div class="row">
                            <div className="col-md-12">
                                {/* <!-- submit form --> */}
                                <input type="submit" class="btn btn-success btn-send" value="Send message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}

export default Connect;