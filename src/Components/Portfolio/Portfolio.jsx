import React, { Component } from 'react';

class Portfolio extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="portfolio">
            <div className="container">
                <div className="d-flex flex-column ">
                    <h1 className="align-self-center">Check out some of my works.</h1>
                    <div id="portfolio-wrapper" className="d-flex flex-wrap align-items-center ">
                        <div className="columns portfolio-item mx-3">
                            <div className="item-wrap">
    
                                <a href="https://www.github.com/ruthvik47" alt="">
                                    <img alt="Android" src="Android.png" style="width:300px;height:150px;" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Emergency Application</h5>
                                            <p>Android application</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="fa fa-link"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="columns portfolio-item mx-3">
                            <div className="item-wrap">
    
                                <a href="https://www.github.com/ruthvik47" alt="">
                                    <img alt="Android" src="Flutter.png" style="width:300px;height:150px;" />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Flutter Application</h5>
                                            <p>NGO application</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="fa fa-link"></i></div>
                                </a>
                            </div>
                        </div>
    
                        <div className="align-self-center view align-self-md-center" >
                            <p>
                                <a href="#" className="button"><i className="fa fa-info"></i>View More
                                </a>
                            </p>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </section>
         );
    }
}
 
export default Portfolio;