import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Message() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    console.log("Message component mounted");

    return () => {
      console.log("Message component will unmount");
    };
  }, []);

  const validateForm = async (event) => {
    event.preventDefault();
    setErrorText("");

    if (!email.includes("@") || !email.includes(".")) {
      setErrorText("Invalid email");
      return;
    }

    if (message.length < 10) {
      setErrorText("Message must contain at least 10 characters!");
      return;
    }

    try {
      const apiUrl = "https://win23-assignment.azurewebsites.net/api/contactform";
      const data = {
        name,
        email,
        message,
      };

      const response = await axios.post(apiUrl, data);

      if (response.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setFormSuccess(true);
      } else {
        setErrorText("Failed to send message!");
      }
    } catch (error) {
      setErrorText("Failed to send message!");
    }
  };

  return (
    <>
      <div className="message">
        <div className="message_cotent">
          <div className="head_of_form">
            {formSuccess ? ( <><span style={{ color: "green" }}>Thanks, your message was sent successfully</span></> )
             
             : (<><span>Leave us a message</span> <span>for any information.</span></>)}
             
          </div>

          {!formSuccess && (
            <form className="form_contact" onSubmit={validateForm}>
              <input type="text"  placeholder="name*"  value={name}  onChange={(e) => setName(e.target.value)}  required/>
              <input type="email" placeholder="email*" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <textarea placeholder="your Message*" name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required/> 
              <p style={{ color: "red" }}>{errorText}</p>
              <button type="submit"> <span className="text_button"><span>Send Message</span> <i className="fa-solid fa-square-arrow-up-right" /> </span></button> 
            </form>
          )}
        </div>
      </div>
    </>
  );
}
