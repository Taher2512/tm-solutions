"use client";
import React, { useState } from "react";
import HeaderText from "./HeaderText";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [description, setDescription] = useState();
  const [loader, setLoader] = useState(false);
  const sendData = async () => {
    if (!name || !email || !subject) {
      alert("All marked fields are required");
    } else {
      setLoader(true);
      fetch("https://tm-solutions-ten.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          description,
        }),
      }).then((res) => {
        console.log(res);
        setLoader(false);

        setName("");
        setEmail("");
        setDescription("");
        setSubject("");
        alert(
          "Message sent successfully we will get back to you soon,Thank You."
        );
      });
    }
  };
  return (
    <section id="contact" className="justify-center flex-col flex">
      <HeaderText text={"Contact Us"}></HeaderText>
      <div className="flex flex-col md:flex-row items-center align-middle justify-between px-5 mt-6">
        <div className="mx-6 md:mx-10 py-6">
          <h1 className="text-[#0066b2] text-4xl md:text-6xl text-bol font-extrabold leading-snug">
            Let's Chat.<br></br>Tell us about your{" "}
            <br className="hidden md:block" /> project.
          </h1>
          <h2 className="text-[#5e93bc] text-bol font-extrabold leading-snug my-3">
            Let's create something together🤘
          </h2>
          <div className="flex">
            <EmailIcon className="w-10 h-10 mx-4 text-[#002D62]" />
            <h3 className="text-[#0066b2] text-bol font-extrabold leading-snug">
              Mail us at <br></br> tmsolutions5372@gmail.com
            </h3>
          </div>
          <div className="flex my-6">
            <CallIcon className="w-10 h-10 mx-4 text-[#002D62]" />
            <h3 className="text-[#0066b2] text-bol font-extrabold leading-snug">
              Call us at <br></br>+91 8017592975 , +91 8274976907{" "}
            </h3>
          </div>
        </div>
        <div className="mx-2 md:mx-10 py-6">
          <h1 className="text-[#0066b2] text-4xl md:text-6xl text-bol font-extrabold leading-snug">
            Send us a message 🚀
          </h1>
          <div className="flex-col w-full">
            <div className="w-full">
              <TextField
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                margin="normal"
                fullWidth
                id="outlined-basic"
                label="Full name*"
                size="30"
                multiline
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                margin="normal"
                fullWidth
                id="outlined-basic"
                label="Email Address*"
                size="30"
                multiline
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                margin="normal"
                fullWidth
                id="outlined-basic"
                label="Subject*"
                size="30"
                multiline
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                margin="normal"
                fullWidth
                rows={6}
                id="outlined-basic"
                label="Tell us more about your project"
                size="30"
                multiline
                variant="outlined"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="contained"
              onClick={sendData}
              className="w-full md:w-1/2 my-3 h-10 md:h-12 bg-[#0066b2] border-[#0066b2] border-2 mx-4 rounded-md text-base font-semibold text-[#fff] transition-all"
              endIcon={!loader ? <SendIcon /> : ""}
            >
              {!loader ? "Send Message" : "Sending ..."}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
