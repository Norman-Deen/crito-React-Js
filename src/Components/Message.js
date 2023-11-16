import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Message() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // useEffect to perform actions when the component mounts
  useEffect(() => {
    // You can place any code here that you want to run when the component mounts.
    // For example, you might want to fetch initial data or set up subscriptions.

    // In this case, I'm logging a message when the component mounts.
    console.log("Message component mounted");

    // Clean up function for when the component unmounts (if needed).
    return () => {
      console.log("Message component will unmount");
    };
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts.

  const validateForm = async (event) => {
    event.preventDefault();
    setErrorText(""); // Reset error message

    // Validate email
    if (!email.includes("@") || !email.includes(".")) {
      setErrorText("Invalid email");
      return;
    }

    // Validate message length
    if (message.length < 8) {
      setErrorText("Message must contain at least 8 characters!");
      return;
    }

    try {
      // API URL
      const apiUrl = "https://win23-assignment.azurewebsites.net/api/contactform";

      // Data to send to the API
      const data = {
        name,
        email,
        message,
      };

      // Send a POST request to the API using axios
      const response = await axios.post(apiUrl, data);

      if (response.status === 200) {
        // Clear the form and display the thank you message
        setName("");
        setEmail("");
        setMessage("");
        setFormSubmitted(true);
        setThankYouMessage("Thanks, your message was sent successfully. Status: " + response.status);
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
            <span>Leave us a message</span>
            <span>for any information.</span>
          </div>

          {formSubmitted ? (
            <p style={{ color: "green" }}>{thankYouMessage}</p>
          ) : (
            <form className="form_contact" onSubmit={validateForm}>
              <input
                type="text"
                placeholder="name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="your Message*"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <p style={{ color: "red" }}>{errorText}</p>
              <button type="submit">
                <span className="text_button">
                  <span>Send Message</span>
                  <i className="fa-solid fa-square-arrow-up-right" />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
