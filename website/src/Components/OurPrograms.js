import React from 'react';
// import country_imagethree from '../../src/Assets/country_three.jpg';
import overseas from '../../src/Assets/overseas.webp';
import ielts from '../../src/Assets/ielts.webp';
import pte from '../../src/Assets/pte.webp';
import oet from '../../src/Assets/oet.webp';

function OurPrograms() {
    return (
        <section className="our-programs">
            <span className="section-title">Overseas Education - Hurray Edutech</span>
            <h2 style={{marginBottom:'10px'}}>OUR PROGRAMS</h2>
            <p style={{marginBottom:'40px'}}>The Courses that IELTS Coaching Offers</p>
            <div>
            <div className="ourprograms-cards">
                <div className="row">
                    </div>
                    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up">
                        <div className="icon-box">
                            <div className="icon"><img alt="ielts coachings" className="img-fluid" src={overseas} /></div>
                            <h4><a className="scrollto" href="#contact">OVERSEAS EDUCATION</a></h4>
                            <hr />
                            <a href="#" className="kmr">Register Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up">
                        <div className="icon-box">
                            <div className="icon"><img alt="ielts coachings" className="img-fluid" src={ielts} /></div>
                            <h4><a className="scrollto" href="#contact">IELTS Training</a></h4>
                            <hr />
                            <a style={{marginTop:'17px'}} href="#" className="kmr">Register Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up">
                        <div className="icon-box">
                            <div className="icon"><img alt="ielts coachings" className="img-fluid" src={pte} /></div>
                            <h4><a className="scrollto" href="#contact">PTE Training</a></h4>
                            <hr />
                            <a style={{marginTop:'17px'}} href="#" className="kmr">Register Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up">
                        <div className="icon-box">
                            <div className="icon"><img alt="ielts coachings" className="img-fluid" src={oet} /></div>
                            <h4><a className="scrollto" href="#contact">OET Training</a></h4>
                            <hr />
                            <a style={{marginTop:'40px'}} href="#" className="kmr">Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurPrograms;
