import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SendMessage from "@/components/SendMessage";
import Subscribe from "@/components/subscribe";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Head from "next/head";

function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      messagev: "",
    },

    mode: "onChange",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setIsLoading] = useState(false);

  async function sendMessage(value) {
    setIsLoading(true);

    try {
      const response = await fetch("api/message", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 500) {
        toast.error("An error Occured");
        setIsLoading(false);
      } else {
        setSuccess(true);
        toast.success("Message Sent Successfully");

        setIsLoading(false);
      }
    } catch (error) {
      setSuccess(true);
      setIsLoading(false);
    }
  }
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Toaster />
      <HeroSection
        title="Contact Us"
        desc="Get in touch with us to elevate your dining experience. Contact our team for inquiries, special requests, or feedback. Reach out to us using the contact information provided below, and let us create memorable moments together."
      />

      <div className="contact">
        <div className="contact__wrapper">
          <div className="contact__wrapper__content">
            <div className="first__contact-details">
              <form
                onSubmit={handleSubmit(sendMessage)}
                className="contact-form"
                action=""
              >
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name can not be empty",
                    },
                  })}
                />
                {errors.name?.message && (
                  <p className="error-txt">{errors.name.message}</p>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: " Enter a valid email address",
                    },
                  })}
                />
                {errors.email?.message && (
                  <p className="error-txt">{errors.email.message}</p>
                )}
                <textarea
                  name="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  {...register("messagev", {
                    required: {
                      value: true,
                      message: " Enter a valid message",
                    },
                  })}
                ></textarea>
                {errors.messagev?.message && (
                  <p className="error-txt">{errors.messagev.message}</p>
                )}
                <div className="bg-lo">
                  <SendMessage text="SEND A MESSAGE" />
                  {loading && <div className="loader-cta"></div>}
                </div>
              </form>
            </div>
            <div className="second__contact-details">
              <h1 className="second-header">FOLLOW US</h1>
              <div className="social_media">
                <div>
                  <Link
                    href="  https://web.facebook.com/veronicas.kitchen.3?_rdc=1&_rdr"
                    target="_blank"
                  >
                    {" "}
                    <i class="ri-facebook-fill"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href="mailto:contact@veronicas-kitchen.com"
                    target="_blank"
                  >
                    {" "}
                    <i class="ri-mail-line"></i>
                  </Link>
                </div>
                <div>
                  <Link href="">
                    {" "}
                    <i class="ri-instagram-line"></i>
                  </Link>
                </div>
              </div>
              <div className="contact-phone">
                Phone No.: <span>+3106734890</span>{" "}
              </div>
              <div className="contact-email">
                Email Address: <span>theveronicaskitchen@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

export default Contact;
