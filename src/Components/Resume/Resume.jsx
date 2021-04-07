import React, { Component } from 'react';
import './Resume.css';
class Resume extends Component {
    state = {  }
    render() { 
        if(this.props.data){
            var{education, work } = this.props.data;
            console.log(education.school);

            var skills = this.props.data.skills.map(function(skills){
                var className = 'bar-expand '+skills.name.toLowerCase();
                return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
              })
        }
        return (
         <section id="resume">
            <div className="container text-center">
                <div className="row education">
                    <div className="col-md-4 col-12">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="col-md-8 col-12 mt-md-0 mt-3">
                        <h3>University of Central Missouri</h3>
                        <p className="info">Masters in Computer Science<span>&bull;</span><em className="date">January 2021</em></p>
                        <p>Graduated with Distinction</p>
                    </div>
                </div>
                <div className="row work">
                    <div className="col-md-4 col-12">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="col-md-8 col-12 mt-md-0 mt-3">
                        <h3>SaNa Software Services</h3>
                        <p className="info">Full Stack Developer<span>&bull;</span><em className="date">May 2018 - June 2019</em>
                        </p>
    
                    </div>
                </div>
                <div className="row skills">
                    <div className="col-md-4 col-12">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="col-md-8 col-12 nine columns main-col">

<p>
</p>

    <div className="bars">
       <ul className="skills">
          {skills}
        </ul>
    </div>
</div>
          
                </div>
    
            </div>
    
        </section>
          );
    }
}
 
export default Resume;