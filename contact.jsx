import React from "react";

export default function Contact() {
  return (
    <div className="page-content">
      <h1>Contact Us</h1>
      <p>Get in touch with us for your Bali travel inquiries.</p>
      <p>Email: info@akashtraveling.com</p>
      <p>Phone: +91 123 456 7890</p>
      <p>Address: Ram  nagar, India</p>
      <form>
        <label>Name: <input type="text" /></label><br />
        <label>Email: <input type="email" /></label><br />
        <label>Message: <textarea></textarea></label><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
