"use client";
import React from 'react'
import HeaderText from "./HeaderText";
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
export default function Contact() {
  return (
    <section className='justify-center flex-col flex'>
   <HeaderText text={"Contact Us"}></HeaderText>
   <div className='flex items-center align-middle justify-between px-5 '>
    <div className='mx-10 py-6'>
        <h1 className="text-[#0066b2] text-6xl text-bol font-extrabold leading-snug"> 
         Let's Chat.<br></br>Tell me about your <br></br>project.
        </h1>
        <h2 className="text-[#5e93bc] text-bol font-extrabold leading-snug my-3">Let's create something together🤘</h2>  
        <div className='flex'>
        <EmailIcon className='w-10 h-10 mx-4'/>
        <h3 className="text-[#0066b2] text-bol font-extrabold leading-snug">Mail us at <br></br> tmsolutions5372@gmail.com</h3>
        </div>
        </div>
        <div className='mx-10 py-6'>
        <h1 className="text-[#0066b2] text-6xl text-bol font-extrabold leading-snug"> 
         Send us a message 🚀
        </h1> 
        <div className='flex-col w-100'>
       <div><TextField margin='normal' fullWidth id="outlined-basic"  label="Full name*" size='30' multiline variant="outlined" /></div>
        <div><TextField margin='normal' fullWidth id="outlined-basic" label="Email Address*" size='30' multiline variant="outlined" /></div>
       <div><TextField margin='normal' fullWidth id="outlined-basic" label="Subject*" size='30' multiline variant="outlined" /></div>
       <div><TextField margin='normal' fullWidth rows={6} id="outlined-basic" label="Tell us more about your project" size='30' multiline variant="outlined" /></div>
        </div>
        <div className='flex justify-center'>
        <Button variant="contained" className="w-1/2 my-3  h-12 bg-[#0066b2] border-[#0066b2] border-2 mx-4 rounded-md text-base font-semibold text-[#fff] transition-all" endIcon={<SendIcon/>}>Send Message</Button>
        </div>
        </div>
   </div>
    </section>
  )
}
