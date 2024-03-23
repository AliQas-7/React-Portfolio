import React from 'react';
import './Style.css';

const ContactUs = () => {
    return (
        <>
        <div className='contact-me'>
            <h1 className='section-title'>Contact Me</h1>
            <p id='contact-text'>Feel free to get in touch with us using the contact form below. Whether you have questions, feedback, or just want to say hello, we'd love to hear from you. Please provide your name, email address, and a brief message, and we'll get back to you as soon as possible. Your input is important to us, and we appreciate your time in reaching out. Thank you for visiting our website!</p>
            <h1 className="social-media-title">Social Media Links</h1>
            <div className="social-media-links">
                <a href="https://web.facebook.com/ali.qas.733" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook" style={{color: "blue"}}></i>
                </a>
                <a href="https://twitter.com/AliQas_7" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter" style={{color: "blue"}}></i>
                </a>
                <a href="https://www.instagram.com/ali_qas_07/#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{color: "#ff0676"}}></i>
                </a>
                <a href="mailto:roman10132526@gmail.com">
                    <i className="far fa-envelope" style={{color: "light red"}}></i>
                </a>
            </div>
            </div>

            <h3 style={{textAlign: "center", marginTop: "2rem"}}>You can send your message through this form if you have any</h3>

            <div className="contact-container">
                <div className="contact-header">
                    <h2>Contact Us</h2>
                </div>
                <div className="contact-form">
                    <form action="submit_form.php" method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>

                </div>

            </div>

      
</>
    );
};

export default ContactUs;
