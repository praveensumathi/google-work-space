"use client";

import React from "react";
import PhoneIcons from "./icons/PhoneIcons";

const ContactForm = () => {
  return (
    <div className="w-full p-6 md:p-8 bg-white border rounded-xl">
      <h1 className="text-center font-extrabold bg-primary-gradient bg-clip-text text-transparent text-2xl mb-2 md:mb-6 text-">
        Contact Us
        <PhoneIcons />
      </h1>
      <div id="contact-form">
        <form
          action={
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLScm6FMegopJWDIuiMg3bRSSR2iL7x1GYNpqOYGnxVb8NhgQmw/formResponse"
          }
          method="POST"
          target="blank"
          className="md:p-1 p-6"
          name="contact"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            form.submit();
            form.reset();
          }}
        >
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-1 text-md bg-title-gradient bg-clip-text text-transparent font-bold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="entry.1332091514"
              id="username-success"
              className="bg-white border border-primary text-primary placeholder-gray-500 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Enter your full name"
              autoComplete="off"
              required
              dir="auto"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-1 text-md bg-title-gradient bg-clip-text text-transparent font-bold"
            >
              E-mail
            </label>
            <input
              type="text"
              id="email-input"
              name="entry.381823084"
              className="bg-white border border-primary text-primary placeholder-gray-500 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Enter your email"
              autoComplete="off"
              required
              dir="auto"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-1 text-md bg-title-gradient bg-clip-text text-transparent font-bold"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-input"
              name="entry.591353628"
              className="bg-white border border-primary text-primary placeholder-gray-500 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Enter your Phone number"
              autoComplete="off"
              required
              dir="auto"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-1 text-md bg-title-gradient bg-clip-text text-transparent font-bold"
            >
              Organization
            </label>
            <input
              type="text"
              name="entry.1332091514"
              id="username-success"
              className="bg-white border border-primary text-primary placeholder-gray-500 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Enter your organization name"
              autoComplete="off"
              required
              dir="auto"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-1 text-md bg-title-gradient bg-clip-text text-transparent font-bold"
            >
              Number of Users
            </label>
            <input
              type="text"
              name="entry.1332091514"
              id="username-success"
              className="bg-white border border-primary text-primary placeholder-gray-500 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Enter your users count"
              autoComplete="off"
              required
              dir="auto"
            />
          </div>
          <button
            type="submit"
            className="text-white focus:ring-4 focus:outline-none rounded-lg text-md font-semibold w-full px-5 py-2.5 text-center mt-5 bg-primary-gradient"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
