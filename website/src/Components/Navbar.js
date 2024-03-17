import CommentIcon from '@mui/icons-material/Comment';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useEffect } from 'react';
import './styles.css';
import background_image from '../../src/Assets/background_image.png';
import logo from '../../src/Assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const menuOption = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text: "About",
            icon: <InfoIcon />
        },
        {
            text: "Programs",
            icon: <CommentIcon />
        },
        {
            text: "Testimonials",
            icon: <PhoneIcon />
        },
        {
            text: "Contact",
            icon: <ShoppingCartIcon />
        },
    ];

    return (
        <>
            <nav className="fixed-navbar">
                <div className="hurray-logo-container">
                    <img src={logo} alt="HURRAY" />
                </div>
                <div className="navbar-container">
                    <div className='navbar-links-container'>
                        {menuOption.map((option, index) => (
                            <a href="" key={index}>{option.text}</a>
                        ))}
                    </div>
                </div>
            </nav>
            <div className="content-container">
                <div style={{marginTop:'-200px'}} className="form-container" data-aos="fade-down">
                    <h2>Get in touch with us</h2>
                    <form>
                        <div className="form-field">
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="form-field">
                            <input type="tel" placeholder="Phone Number" />
                        </div>
                        <div className="form-field">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-field">
                            <textarea placeholder="Your message"></textarea>
                        </div>
                        <div className="form-field">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="full-width-image">
                    <img src={background_image} alt="" style={{ height: '500px' }} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
