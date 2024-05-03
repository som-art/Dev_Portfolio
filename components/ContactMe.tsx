import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const mailtoLink = `mailto:dassomosree59@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. My email is ${formData.email}. ${formData.message}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-14 md:top-16 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-3 md:space-y-4 mt-10">
        <h4 className="text-sm md:text-lg lg:text-xl font-medium text-center tracking-wide">
          Interested to Work Together?{" "}
          <span className="inline relative">
            Lets Connect!
            <motion.span
              initial={{
                opacity: 0,
                width: 0,
                borderBottomColor: "rgb(168 85 247)",
              }}
              whileInView={{
                opacity: 1,
                width: "100%",
                borderBottomColor: "rgb(107 33 168)",
              }}
              transition={{ duration: 2.2 }}
              viewport={{ once: true }}
              className="absolute left-0 bottom-[-3px] border-b-2"
            ></motion.span>
          </span>
        </h4>

        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-purple-500 h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg lg:text-xl">+91 7044645520</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-purple-500 h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg lg:text-xl">
              dassomosree59@gmail.com
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full md:w-auto"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-purple-600 py-3 md:py-3 px-10 rounded-lg text-white font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
