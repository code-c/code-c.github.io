import React from "react";
import ReactDOM from 'react-dom';

class Connect extends React.Component {

    // constructor for form handling
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            // email: '',
            // subject: '',
            // message: '',
            // webScale: '',
            // photoScale: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {    
          this.setState({value: event.target.value});  
        }

      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        //event.preventDefault();
      }
    

    render() {
        return (
            <div id='connect-section'>
                <div id='banner-text' class="connect">
                    <div class="intro-text container">
                        <h1>
                        Maybe you like my photography, <br>
                        or you really dig this neat color scheme,</br>
                            or youre a hiring manager and like my work!
                        </h1>
                    </div>
                </div>

                {/* <!-- Form section --> 
                <div id='connect-form' class="connect-form">
                    <h1 class="display text-center form-title">Contact Me:</h1>
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <!-- first name --> 
                                    <label for="form-name">First name *</label>
                                    <input type="text" id='form-name' name='name' class="form-control" placeholder="Please enter your first name" required data-error="Firstname is required"></input>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    {/* <!-- last name -->
                                    <label for="form-lastname">Last name *</label>
                                    <input type="text" id='form-lastname' name='lastname' class="form-control" placeholder="last name" required data-error="Firstname is required"></input>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    {/* <!-- email --> 
                                    <label for="form_email">Email *</label>
                                    <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required data-error="Valid email is required."></input>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    {/* <!-- subject of the message -->
                                    <label for="form_subject">Subject *</label>
                                    <input id="form_subject" type="text" name="subject" class="form-control" placeholder="subject *" required data-error="Valid subject is required."></input>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    {/* <!-- message --> 
                                    <label for="form_message">Message *</label>
                                    <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required data-error="Please, leave us a message."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- quick note --> 
                        <div class="row">
                            <div class="col-md-12">
                                <h4>I would appreciate it if you filled out the little survey below as well, It lets me know how im doing!</h4>
                            </div>
                        </div>

                        {/* <!-- Survey Section of the form -->
                        <!-- webpage scale --> 
                        <div class="row">
                            <div class="col-md-12">
                                <h5> how does the webpage look on a scale from 1-5?</h5>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="webpageScale" id="inlineRadio1" value="meh"></input>
                                    <label class="form-check-label" for="inlineRadio1">meh</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="webpageScale" id="inlineRadio2" value="itsOkay"></input>
                                    <label class="form-check-label" for="inlineRadio2">its okay...</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="webpageScale" id="inlineRadio3" value="average"></input>
                                    <label class="form-check-label" for="inlineRadio3">average</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="webpageScale" id="inlineRadio4" value="itsCool"></input>
                                    <label class="form-check-label" for="inlineRadio3">its cool</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="webpageScale" id="inlineRadio5" value="looksGreat"></input>
                                    <label class="form-check-label" for="inlineRadio3">looks great!</label>
                                </div>
                            </div>
                        </div>
                        {/* <!-- photography scale -->
                        <div class="row">
                            <div class="col-md-12">
                                <h5> Hows my photography?</h5>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="photoScale" id="inlineRadio1" value="meh"></input>
                                    <label class="form-check-label" for="inlineRadio1">meh</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="photoScale" id="inlineRadio2" value="itsOkay"></input>
                                    <label class="form-check-label" for="inlineRadio2">its okay...</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="photoScale" id="inlineRadio3" value="average"></input>
                                    <label class="form-check-label" for="inlineRadio3">average</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="photoScale" id="inlineRadio4" value="itsCool"></input>
                                    <label class="form-check-label" for="inlineRadio3">its cool</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="photoScale" id="inlineRadio5" value="photoScale"></input>
                                    <label class="form-check-label" for="inlineRadio3">looks great!</label>
                                </div>
                            </div>
                        </div>

                        {/* <!-- add new scales or additions to the form here --> 
                        <div class="row">
                            <div class="col-md-12">
                                {/* <!-- submit form --> 
                                <input type="submit" class="btn btn-success btn-send" value="Send message"></input>
                            </div>
                        </div> 
                    </form>
                </div> */}
            </div> 
        )
    };
}

export default Connect;