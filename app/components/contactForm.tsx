import { Card } from "flowbite-react";
import React from "react";

const ContactForm = () => {
  return (
    <Card className="max-w-sm mx-auto">
      <form
        action={
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLScm6FMegopJWDIuiMg3bRSSR2iL7x1GYNpqOYGnxVb8NhgQmw/formResponse"
        }
        method="POST"
        target="blank"
      >
        <div className="mb-5">
          <label
            htmlFor="username-success"
            className="mb-2 text-sm font-medium text-primary"
          >
            Full Name
          </label>
          <input
            type="text"
            name="entry.1332091514"
            id="username-success"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Please enter your full name....."
            aria-labelledby="username-success-label"
            aria-describedby="username-success-desc"
            autoComplete="off"
            required
            dir="auto"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="username-success"
            className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            E-mail
          </label>
          <input
            type="text"
            id="email-input"
            name="entry.381823084"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Please enter your email...."
            aria-labelledby="i6 i9"
            aria-describedby="i7 i8"
            autoComplete="off"
            required
            dir="auto"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="username-success"
            className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-input"
            name="entry.591353628"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Please enter your Phone number....."
            aria-labelledby="i6 i9"
            aria-describedby="i7 i8"
            autoComplete="off"
            required
            dir="auto"
          />
        </div>
        <button
          type="submit"
          className="max-w-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </Card>
  );
};

export default ContactForm;
