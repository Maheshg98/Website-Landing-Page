import React from 'react';
import googlerview from '../../src/Assets/googlerview.png'

function Testimonials() {
    return (
        <section className="testimonials">
            <h2 style={{ marginBottom: '15px' }}>Testimonials</h2>
            <p style={{ marginBottom: '30px' }}>WHAT OUR STUDENTS SAY ABOUT IELTS Coaching</p>
            <h3 style={{ marginBottom: '40px' }}>What our customers say</h3>
            <div className="testimonial-card">
                {/* Testimonial content goes here */}
            </div>
            <div style={{padding:'15px'}} className="google-rating">
               <img src={googlerview} alt="" />
                <button className="review-button">Write a Review</button>
            </div>
        </section>
    );
}
export default Testimonials;
