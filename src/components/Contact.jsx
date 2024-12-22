import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { git, linkedin, envelope, resume } from "../assets";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6gg4iko",
        "template_2pqnfth",
        {
          from_name: form.name,
          to_name: "Vikram Kadarla",
          from_email: form.email,
          to_email: "Kadarlavikram032001@gmail.com",
          message: form.message,
        },
        "QpS_7k3JuOGdyaX3L"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className="flex flex-row">
          <div className=" inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vikramkadarla/",
                  "_blank"
                )
              }
              className="bg-violet-500 hover:bg-violet-700 w-20 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className=" inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFlbfKtvbzGFlvjmxBnsXZZLFjVxBpzCqjDPZqMwLBvKVBqXfHdjJfRxdwBRGNlnhgFFL",
                  "_blank"
                )
              }
              className="bg-violet-500 hover:bg-violet-700 w-20 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={envelope}
                alt="email"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className=" inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1kHa3widPSJW2A9hi6nCSWW80BmPueSSb/view?usp=sharing",
                  "_blank"
                )
              }
              className="bg-violet-500 hover:bg-violet-700 w-20 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={resume}
                alt="resume"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="x1:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas></EarthCanvas>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
