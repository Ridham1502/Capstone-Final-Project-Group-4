import React, { useState } from 'react';
import axios from 'axios';
import './ContactUsPage.css';
import contactImage from '../Assets/contact.jpg'; 
import callImage from '../Assets/call.png';
import formImage from '../Assets/form.png';
import emailImage from '../Assets/emailchat.jpg';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contact: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5002/api/contact', formData);
            setResponseMessage(response.data.message);
            setFormData({
                name: '',
                email: '',
                message: '',
                contact: ''
            });
        } catch (error) {
            setResponseMessage('An error occurred while sending your message.');
        }
    };

    return (
        <div className="contact-us-page">
            <div className="contact-us-image-container">
                <img src={contactImage} alt="Contact Us" className="contact-us-image" />
            </div>
            <div className="contact-us-container">
                <h2>Get in touch with us!</h2>
                <p>We’re here to assist you with any inquiries, concerns, or support you may need. Please fill out the form below with your details and message, and our team will respond to you as quickly as possible. We look forward to connecting with you!</p>
                <p>Please ensure that all required fields are filled in accurately so that we can address your request effectively.</p>
                <p>Thank you for reaching out!</p>

                <div className="contact-options">
                    <div className="option">
                    <img src={callImage} alt="Call" className="call-image" />
                        <h3>Contact Us by Phone</h3>
                        <p>Canada Toll-Free: X-XXX-XXX-XXXX</p>
                        <p>International: X-XXX-XXX-XXXX</p>
                    </div>
                    <div className="option">
                    <img src={formImage} alt="form" className="form-image" />
                        <h3>Contact us by filling the form</h3>
                        <p>Just send us your questions or concerns by filling out the form below, and we will get back to you as soon as possible.</p>
                    </div>
                    <div className="option">
                    <img src={emailImage} alt="email" className="email-image" />
                        <h3>Email Support</h3>
                        <p>- Reach out to us via email at support@yourcompany.com, and our team will respond within 24 hours</p>
                    </div>
                </div>

                <form className="contact-us-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
            </div>
        </div>
    );
};

export default ContactUsPage;
