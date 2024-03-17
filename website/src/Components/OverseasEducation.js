import React, { useEffect } from 'react';
import country_image from '../../src/Assets/country_image.jpg';
import country_imagetwo from '../../src/Assets/country_imagetwo.jpg';
import country_three from '../../src/Assets/country_three.jpg';
import student from '../../src/Assets/student.webp';
import checkmark_image from '../../src/Assets/checkmark_image.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

function OverseasEducation() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="overseas-education">
            <span className="section-title">Overseas Education - Hurray Edutech</span>
            <h2 style={{ marginBottom: '25px' }}>OVERSEAS EDUCATION - HURRAY EDUTECH</h2>
            <div>
                <div className="country-cards">
                    <img src={country_image} alt="" data-aos="fade-right" />
                    <img src={country_imagetwo} alt="" data-aos="fade-right" />
                    <img src={country_three} alt="" data-aos="fade-right" />
                    <img src={country_imagetwo} alt="" data-aos="fade-right" />
                </div>
            </div>
            <div style={{marginTop:'40px'}} className="choose-us-wrapper">
                <div className="choose-us-image" data-aos="fade-right">
                    <img src={student} alt="" />
                </div>
                <div className="why-choose-us" data-aos="fade-left">
                    <h3>WHY CHOOSE US</h3>
                    <ul>
                        <li><img style={{maxWidth:'6%'}} src={checkmark_image} alt="" /> Best IELTS Classroom & Online Training</li>
                        <li style={{marginLeft:'-20px'}}><img style={{maxWidth:'6%'}} src={checkmark_image} alt="" /> Free Overseas Education Counseling</li>
                        <li style={{marginLeft:'-175px'}}><img style={{maxWidth:'5%'}} src={checkmark_image} alt="" /> Free Workshops</li>
                        <li style={{marginLeft:'5px'}}><img style={{maxWidth:'6%'}} src={checkmark_image} alt="" /> One-On-One Guidance for IELTS Training</li>
                        <li style={{marginLeft:'-55px'}}><img style={{maxWidth:'6%'}} src={checkmark_image} alt="" /> Certified & Experienced Trainers</li>
                        <li style={{marginLeft:'142px'}}><img style={{maxWidth:'6%'}} src={checkmark_image} alt="" /> Get 8.5 Band in First Attempt - Start Your IELTS Preparation</li>
                        <li style={{marginLeft:'-145px'}}><img style={{maxWidth:'6%'}} src={checkmark_image} alt="" /> 99% Success Rate</li>
                    </ul>
                </div>
            </div>
            <button style={{marginTop:'15px', marginLeft:'510px'}} className="review-button">Register Now</button>
        </section>
    );
}

export default OverseasEducation;
