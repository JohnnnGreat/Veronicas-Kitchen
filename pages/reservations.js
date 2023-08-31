import React from "react";
import HeroSection from "@/components/HeroSection";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { useState } from "react";
import SendMessage from "@/components/SendMessage";

function Reservations() {
  const [showList, setShowList] = useState(false);
  const [number, setNumber] = useState(2);
  const [time, setTime] = useState("5:30 PM");
  const [showTime, setShowTime] = useState(false);

  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPeople, setNumberP] = useState(2);
  const [timeS, setTimeS] = useState("");

  const showOptions = () => {
    setShowList(!showList);
  };

  const showTimeOptions = () => {
    setShowTime(!showTime);
  };

  const setNumberPeople = (number) => {
    setNumber(number);
    setNumberP(number);
  };

  const setTimeValue = (time) => {
    setTime(time);
  };

  const handleSubmit = async (e) => {
    alert("Clic");
    e.preventDefault();

    const data = {
      name,
      email,
      numberPeople,
      time,
    };

    const response = fetch("api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="inputOne"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="second-container">
                <div className="first-container" onClick={showOptions}>
                  <i class="ri-user-fill"></i>
                  <p>{number} People</p>
                  <i
                    class={`ri-arrow-down-s-line ${showList && "rotateArrow"}`}
                  ></i>

                  <div className={`oth-list ${showList && "showListOptions"}`}>
                    <ul>
                      <li>
                        <button
                          onClick={() => {
                            setNumberPeople(3);
                          }}
                        >
                          3 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setNumberPeople(4);
                          }}
                        >
                          4 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setNumberPeople(5);
                          }}
                        >
                          5 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setNumberPeople(6);
                          }}
                        >
                          6 People
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setNumberPeople(7);
                          }}
                        >
                          7 People
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="first-container" onClick={showTimeOptions}>
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
                      {/* <li>
                      <button
                        onClick={() => {
                          setNumberPeople(6);
                        }}
                      >
                        6 People
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setNumberPeople(7);
                        }}
                      >
                        7 People
                      </button>
                    </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="r-btn">
                <div onClick={handleSubmit}>
                  <SendMessage type="button" text="MAKE A RESERVATION" />
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
