import React from "react";

function Contact() {
    const handlesubmit = (e) => {
      e.preventDefault();
      // const formdata = new FormData(e.target)
      // console.log(e.entries())
      const data = Object.fromEntries(e.entries())
      console.log(data)
  }

  return (
    <div className="layoutcontact">
      <div className="contactusinner">
      <h1 className="headingcontact">Contact Us</h1>
        <div className="inputvalue">  
          <form action={handlesubmit}>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              name="name"
              className="formcontrol"
            /> <br /> <br />
            <input
              type="text"
              placeholder="Enter Your Email"
              required
              name="email"
              className="formcontrol"
            /><br /> <br />
            <textarea
              type="text"
              placeholder="Enter Your Message"
              rows="10"
              name="textarea"
              className="formcontrol"
            /><br />
            <button type="submit" value="sendvalue">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
