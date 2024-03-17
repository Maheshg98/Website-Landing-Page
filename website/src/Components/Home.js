import React, { useEffect } from 'react';
import './styles.css';
import aboutusimage from '../../src/Assets/aboutusimage.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
    }, []);

    return (
        <section className="home" data-aos="fade-up">
            <div className="background-image"></div>
            <div className="content">
                <div className="text">
                    <span className='section-title'>About Us</span>
                    <h1 style={{ marginBottom: '15px' }}>About Us</h1>
                    <h4 style={{ marginBottom: '15px' }}>Hurray! — an expression symbolising triumph, joy and pleasure.</h4>
                    <p style={{textAlign:'left'}}>The HURRAY way of mentor-mentee connect is rooted in bringing ease and pleasure into learning a language in a time-bound model. After all, learning a language in the professional realm may not be as much fun as picking a language as a hobby, and can be filled with monotony, frustration and self-doubts! It is here that HURRAY is trying to make a difference. Each student/job seeker aspiring to study, work or settle abroad receives a personalised package based on their requirement/personal aptitude, which aids in decision-making and future plans. This commitment to individual-focused mentoring makes HURRAY one of the Best IELTS/PTE training centres in Bangalore.</p>
                </div>
                <div className="image-wrapper" data-aos="fade-left">
                    <img src={aboutusimage} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Home;
