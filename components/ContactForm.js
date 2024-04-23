import React, { useState } from 'react';

const ContactForm = () => {


  return (
    <form action="https://api.web3forms.com/submit" method="POST" className="mx-auto w-full pt-10 sm:w-3/4">
    <div className="flex flex-col md:flex-row">
    <input type="hidden" name="access_key" value="19437750-2f53-4baa-8728-40187b90c991"/>
      <input
        className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
        placeholder="Name"
        type="text"
        id="name"
        name="name"
      />
      <input
        className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
        placeholder="Email"
        type="text"
        id="email"
        name="email"
      />
    </div>
    <textarea
      className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
      placeholder="Message"
      id="message"
      name="message"
      cols="30"
      rows="10"
    ></textarea>
    <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
  </form>
  
  );
};

export default ContactForm;
