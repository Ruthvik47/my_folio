import React, { Component } from 'react';
import './Contact.css';



class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="contact" >

                <div className="container">
                    <i style={{ color: "white",fontSize: "52px",float: "left"}} className="fa fa-paper-plane"></i><br />

                    <div className="d-flex flex-column">
                    <form id="contactForm" name="contactForm">
					<fieldset>

                    <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input  type="text" defaultValue="" size="35" id="contactName" name="contactName" />
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input  type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" />
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea  cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button type='submit'  className="submit">Submit</button>
                   
                  </div>
					</fieldset>
				   </form>


                    </div>
                </div>
            </section>
         );
    }
}
 
export default Contact;