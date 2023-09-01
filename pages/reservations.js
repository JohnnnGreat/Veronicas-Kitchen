import React from "react";
import HeroSection from "@/components/HeroSection";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { useState } from "react";
import SendMessage from "@/components/SendMessage";
import { message } from "antd";

function Reservations() {
  const [showList, setShowList] = useState(false);

  // Data
  // const [number, setNumber] = useState(2);

  const [showTime, setShowTime] = useState(false);

  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPeople, setNumberP] = useState(2);
  const [time, setTime] = useState("5:30 PM");
  const [date, setDate] = useState(null);
  const [timeS, setTimeS] = useState("");

  // Message State
  const [success, setIsSuccess] = useState(false);

  const showOptions = () => {
    setShowList(!showList);
  };

  const showTimeOptions = () => {
    setShowTime(!showTime);
  };

  const setNumberPeople = (number) => {
    // setNumber(number);
    setNumberP(number);
  };

  // const setTimeValue = (time) => {
  //   setTime(time);
  // };

  const handleDate = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    setIsSuccess(true);
    e.preventDefault();

    const data = {
      name,
      email,
      numberPeople,
      time,
      date,
    };

    console.log(data);

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setIsSuccess(false);
        if (response.ok == false) message.error("An Error Occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <HeroSection
        title="Secure Your Table With Ease - Fill in the Reservation Form Below"
        desc="Book your table in just a few clicks. Secure your spot at our restaurant with our convenient reservation form below. Experience unforgettable dining made easy."
      />

      <div className="reservation-form">
        <div className="reservation-form__wrapper">
          <div className="form-container">
            <form action="">
              <input
                type="text"
                className="inputOne"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="inputOne"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="date" value={date} onChange={handleDate} />

              <div className="second-container">
                <div className="first-container" onClick={showOptions}>
                  <i class="ri-user-fill"></i>
                  <p>{numberPeople} People</p>
                  <i
                    class={`ri-arrow-down-s-line ${showList && "rotateArrow"}`}
                  ></i>

                  <div className={`oth-list ${showList && "showListOptions"}`}>
                    <ul>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setNumberPeople(3);
                          }}
                        >
                          3 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setNumberPeople(4);
                          }}
                        >
                          4 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setNumberPeople(5);
                          }}
                        >
                          5 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setNumberPeople(6);
                          }}
                        >
                          6 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setNumberPeople(7);
                          }}
                        >
                          7 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setNumberPeople(7);
                          }}
                        >
                          Custom
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <input
                  type="time"
                  className="date"
                  value={time}
                  onChange={handleTime}
                />
                {/* <div className="first-container" onClick={showTimeOptions}>
                  <i class="ri-time-fill"></i>
                  <p>{time}</p>
                  <i
                    class={`ri-arrow-down-s-line ${showTime && "rotateArrow"}`}
                  ></i>

                  <div className={`oth-list ${showTime && "showListOptions"}`}>
                    <ul>
                      <li>
                        <button
                          onClick={() => {
                            setTime("5:30 PM");
                          }}
                        >
                          5:30 PM
                        </button>
                      </li>
                      <li>
                        <button
                          value="6:30"
                          onClick={() => {
                            setTime("6:30 PM");
                          }}
                        >
                          6:30 PM
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setTime("7:30 PM");
                          }}
                        >
                          7:30 PM
                        </button>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="r-btn">
                <div onClick={handleSubmit}>
                  <SendMessage
                    success={success}
                    type="button"
                    text="MAKE A RESERVATION"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;
