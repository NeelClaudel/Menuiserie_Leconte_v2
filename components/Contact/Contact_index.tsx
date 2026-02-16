"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { contactData } from "./contactData";

type FormStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!res.ok) throw new Error();

      setFormStatus("success");
      setFormValues({ name: "", email: "", subject: "", phone: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  const inputClass =
    "w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white";

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <Image
            src="./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
          <Image
            src="./images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            fill
          />
        </div>

        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
          >
            <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              {contactData.formTitle}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder={contactData.fields.name}
                  required
                  className={`${inputClass} lg:w-1/2`}
                />
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder={contactData.fields.email}
                  required
                  className={`${inputClass} lg:w-1/2`}
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder={contactData.fields.subject}
                  required
                  className={`${inputClass} lg:w-1/2`}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder={contactData.fields.phone}
                  className={`${inputClass} lg:w-1/2`}
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder={contactData.fields.message}
                  required
                  rows={4}
                  className={inputClass}
                ></textarea>
              </div>

              {formStatus === "success" && (
                <p className="mb-4 text-meta">{contactData.statusMessages.success}</p>
              )}
              {formStatus === "error" && (
                <p className="mb-4 text-red-500">{contactData.statusMessages.error}</p>
              )}

              <div className="flex flex-wrap gap-4 xl:justify-between">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho disabled:opacity-50 dark:bg-btndark"
                >
                  {formStatus === "sending"
                    ? contactData.statusMessages.sending
                    : contactData.submitButton}
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 2, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
          >
            <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              {contactData.sidebarTitle}
            </h2>

            <div className="5 mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                {contactData.sidebar.zone.label}
              </h3>
              <p>{contactData.sidebar.zone.value}</p>
            </div>
            <div className="5 mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                {contactData.sidebar.email.label}
              </h3>
              <p>
                <a href={contactData.sidebar.email.href}>
                  {contactData.sidebar.email.value}
                </a>
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                {contactData.sidebar.phone.label}
              </h4>
              <p>
                <a href={contactData.sidebar.phone.href}>
                  {contactData.sidebar.phone.value}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <br></br>
    </section>
  );
};

export default Contact;