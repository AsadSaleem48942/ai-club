import React from "react";
import img from "../../../imgs/contact-us.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="container pt-5">
      <h1 className="jumbotron text-center">Contact Us</h1>
      <div className="row">
        <div className="col">
          <img src={img} alt="contact us" className="img-thumbnail" />
        </div>
        <div className="col-8">
          <form>
            <div className="form-group font-weight-bold">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="name"
              />
            </div>

            <div className="form-group font-weight-bold">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email.."
                id="email"
              />
            </div>

            <div className="form-group font-weight-bold">
              <label for="message">Mesasge</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your message..."
                id="message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
