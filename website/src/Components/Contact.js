import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="overseas-education">
            <span className="section-title">Contact Us</span>
            <h2 style={{ marginBottom: '25px' }}>Contact Us</h2>
            <div className="contact-container">
            <div className="contact-info">
                <div className="contact-card" data-aos="fade-up">
                    <h2>Our Address</h2>
                    <h3>Kormanagala Office</h3>

                    <p>Divya Darshan, No. 110, 2nd Floor, 6th Block, Koramangala
                        Bangalore, Karnataka - 560095</p>
                </div>
                <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
                    <h3 style={{marginTop:'25px'}}>Phone</h3>
                    <p>+91 9900426501 / +91 8792743862</p>
                </div>
                <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
                    <h3 style={{marginTop:'25px'}}>Email Us</h3>
                    <p>info@hurrayedutech.com</p>
                </div>
            </div>
            <div className="contact-form" data-aos="fade-left">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-field">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="form-field">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="form-field">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="form-field">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15555.741062056679!2d77.62138180000001!3d12.91188215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710690499226!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
}

export default Contact;
