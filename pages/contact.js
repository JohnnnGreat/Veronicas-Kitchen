import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SendMessage from "@/components/SendMessage";
import Subscribe from "@/components/subscribe";
import { useForm } from "react-hook-form";

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
      const { name, messagev, email } = value;

      const response = await fetch("api/message", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 500) {
        // message.error("An error Occured");

        setIsLoading(false);
      } else {
        setSuccess(true);
        // message.success("Message Sents Successfully");
        console.log(response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setSuccess(true);
      setIsLoading(false);
    }
  }
  return (
    <>
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
              <div className="social-media"></div>
              <div className="contact-phone">Phone No.: 000 000 0000</div>
              <div className="contact-email">Email Address: Fill</div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

export default Contact;
