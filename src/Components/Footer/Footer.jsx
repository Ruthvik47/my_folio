import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    state = {  }
    render() { 

        if(this.props.data){
            var networks = this.props.data.social.map((data)=>{
                return  <li key={data.name}><a href={data.url}><i className={data.className}></i></a></li>
            })
        }
        return ( 
            <footer id="footer">
                <div className="container">
                <ul className="social">
                     {networks}
                  </ul>

                  <ul className="copyright">
              <li>&copy; All credit goes to Ruthvik Reddy</li>
            
           </ul>

                </div>
            </footer>

         );
    }
}
 
export default Footer;