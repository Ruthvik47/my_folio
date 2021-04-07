import React, { Component } from 'react';
import './About.css';
import profilePic from './profile-pic.jpeg';
import My_Resume from '../../My_Resume.pdf';

class About extends Component {
    state = {  }
    render() {  
        if(this.props.data){
            var {name:myname, occupation, fullname, address, phone, email } = this.props.data;
            
        }

        return ( 
        <section id="about">
            <div className="container row mx-5">
                <div className="col-md-6 col-12">
                    <img className="profile-pic" src={profilePic} alt="Tim Baker Profile Pic" />

                </div>
            <div className="col-md-6 col-12 " id="info">
                <h2>About Me</h2>
                <p>I'm {myname}, I'm a {occupation}r. Currently Open to work</p>
                <div className="d-flex flex-lg-row flex-md-column flex-column mt-md-0 mt-2 flex-" >
                        <div>
                            <h2>Contact Details</h2>
                            <p>
                                <span>{fullname}</span><br />
                                {/* <span>{address['street']}</span><br />
                                <span>{address.city}, {address.state}</span> */}
                                <span>{phone}</span><br />
                                <span>{email}</span> 
                            </p>
                        </div>

                        <div className="columns download">
                            <p>
                                <a href={My_Resume} className="button"><i className="fa fa-download"></i>Download
                                    Resume</a>
                            </p>
                        </div>


                    </div>
            </div>
            

            </div>
        </section>
         );
    }
}
 
export default About;