import React, { useState } from "react";
import './contact.css';

import { RiSmartphoneLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <>
      <div className="contact-box">
        <h1 className="title"><strong>Contact</strong></h1>

        <div className="contact-container">
          <div className="up-content">

            <div data-aos="flip-down" className="div-one">
              <div className="fou"><RiSmartphoneLine /></div>
              <div className="cont">
                <h4>Phone</h4>
                <p>91+ 93607 12225</p>
              </div>
            </div>

            <div data-aos="flip-down" className="div-two">
              <div className="fou fou-2"><HiOutlineMail /></div>
              <div className="cont">
                <h4>E-Mail</h4>
                <p>mohulnath005@gmail.com</p>
              </div>
            </div>

            <div data-aos="flip-down" className="div-one">
              <div className="fou fou-3"><MdOutlineLocationOn /></div>
              <div className="cont">
                <h4>Location</h4>
                <p>Velachery-Chennai</p>
              </div>
            </div>

          </div>

          {/* Bottom Form Section */}
          <div className="botton-content">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={errors.name ? errors.name : "Enter Your Name"}
                  type="text"
                  className={errors.name ? "input-error" : ""}
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={errors.email ? errors.email : "Enter Your Email Address"}
                  type="text"
                  className={errors.email ? "input-error" : ""}
                />
              </div>

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={errors.subject ? errors.subject : "Subject"}
                className={`ii ${errors.subject ? "input-error" : ""}`}
                type="text"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={errors.message ? errors.message : "Your Message Here"}
                className={errors.message ? "input-error" : ""}
              ></textarea>

              <button type="submit">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
