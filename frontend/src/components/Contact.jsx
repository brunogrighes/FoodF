/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <section className="contact">
      <div className="container">
       <div className="banner">
          <form onSubmit={handleSendMessage}>
            <h2>CONTATOS</h2>
            <div>
              <input 
              type="text"
              value={name} 
              placeholder="Seu Nome"
              onChange={(e) => setName(e.target.value)}
               />

              <input 
              type="email"
               value={email} 
               placeholder="Seu Email"
               onChange={(e) => setEmail(e.target.value)}
               />
              <input 
              type="number"
               value={phone} 
               placeholder="Seu Numero"
               onChange={(e) => setPhone(e.target.value)}
               />  
            </div>
            <textarea  
              rows={10}
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />

          <button className="btn" type="submit">
            Enviar Mensagem
          </button>

          </form>
      </div>
      </div>

    </section>
    );
  };
  
  export default Contact;