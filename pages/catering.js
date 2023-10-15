import React, { useEffect, useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Modal from "@/components/ShowList";
import SendMessage from "@/components/SendMessage";
import Calendar from "react-calendar";

const Catering = () => {
  const [numberPeople, setNumberP] = useState(2);
  const [showList, setShowList] = useState(false);
  const [food, setFood] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [date, setDate] = useState(new Date());

  const foodItems = [
    { id: 1, name: "Egusi" },
    { id: 2, name: "Gbegiri" },
    { id: 3, name: "Ofada Stew" },
    { id: 4, name: "Okra Ogbono" },
    { id: 5, name: "Nsala" },
    { id: 6, name: "Pepper Soup" },
    { id: 7, name: "Red Stew" },
    { id: 8, name: "Vegetable Stew" },
  ];

  const foodArr = [];
  const [showNav, setShowNav] = useState(false);
  const showOptions = () => {
    setShowList(!showList);
  };

  const setNumberPeople = (number) => {
    // setNumber(number);
    setNumberP(number);
  };

  useEffect(() => {
    console.log(showNav);
  });
  const showFoodList = (e) => {
    e.preventDefault();
    setShowNav(true);
  };

  const handleCheck = (value) => {
    const newArr = foodArr.push(value);
    setFoods(newArr);
  };

  useEffect(() => {
    console.log(checkedItems);
  });

  const handleCheckboxChange = (itemName) => {
    // Toggle the checked state of the item
    const updatedCheckedItems = checkedItems.includes(itemName)
      ? checkedItems.filter((name) => name !== itemName)
      : [...checkedItems, itemName];

    setCheckedItems(updatedCheckedItems);
  };

  const handleRemoveItem = (itemName) => {
    const updatedCheckedItems = checkedItems.filter(
      (name) => name !== itemName
    );
    setCheckedItems(updatedCheckedItems);
  };

  const showCalenda = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <HeroSection
        title="Catering"
        desc="Choose from a wide variety of delicious dishes in 4 sizes - half tray, full tray, small cooler, and larger cooler - to feed your guests at any event, big or small. We can also create custom menus and sizes to fit your specific needs."
      >
        <br></br>
        <div className="download-pdf-container">
          You can as well
          <a
            href="/catering.pdf"
            data-aos="fade-up"
            data-aos-duration="1000"
            download="catering"
          >
            Download Our Catering Menu
          </a>
        </div>
      </HeroSection>
      <div className="inquiry-form">
        <div className="inquiry-form__wrapper">
          <p className="inquiry-form-header">Fill an inquiry form!</p>
          <div className="form-container">
            <form action="">
              <input type="text" placeholder="Name" id="contact" />
              <input
                className="yellow-out"
                type="text"
                id="number"
                placeholder="Phone Number"
              />
              <div className="form-flex">
                <div>
                  <input type="email" placeholder="Email" id="email" />
                </div>

                <button className="date" onClick={showCalenda}>
                  <p>Date Order</p>
                  <i>
                    <i class="ri-calendar-2-fill"></i>
                  </i>
                </button>
              </div>
              <div className="form-flex">
                {/* <div>
                  <label htmlFor="numberPeople">Number of People</label>
                  <input
                    placeholder="eg. 2, 4"
                    type="number"
                    id="numberPeople"
                  />
                </div> */}
                <div className="m-container">
                  <div className="first-container" onClick={showOptions}>
                    <i class="ri-user-fill"></i>
                    <p>{numberPeople} People</p>
                    <i
                      class={`ri-arrow-down-s-line ${
                        showList && "rotateArrow"
                      }`}
                    ></i>

                    <div
                      className={`oth-list ${showList && "showListOptions"}`}
                    >
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
                  {/* <input
                    type="time"
                    className="date"
                    value={time}
                    placeholder="Time"
                    onChange={handleTime}
                  /> */}
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
                <div>
                  <label htmlFor="delivery">Delivery</label>
                  <select id="delivery">
                    <option value="option1">Yes</option>
                    <option value="option2">No</option>
                  </select>
                </div>
              </div>
              <button className="dishes" onClick={showFoodList}>
                Select Dishes
              </button>
              <div className="dishes-container">
                {checkedItems.map((items, index) => (
                  <div key={index}>
                    <p>{items}</p>
                    <div>
                      <i
                        onClick={() => handleRemoveItem(items)}
                        class="ri-close-line"
                      ></i>
                    </div>
                  </div>
                ))}
              </div>

              <textarea
                placeholder="Tell us something about your inquiry..."
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <div className="bg-lo">
                <SendMessage text="SEND A MESSAGE" />
                {/* <div className="loader-cta"></div> */}
              </div>
            </form>
          </div>
        </div>
      </div>

      {showNav && (
        <div className="modal-container">
          <i
            class="ri-close-line"
            onClick={() => {
              setShowNav(false);
            }}
          ></i>
          <div className="modal">
            {foodItems.map((item) => (
              <div className="item-container" key={item.id}>
                <h1>{item.name}</h1>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.name)}
                  onChange={() => handleCheckboxChange(item.name)}
                  // onChange={(e) => {
                  //   if (e.target.checked) {
                  //     handleCheck(item.name);
                  //   }
                  // }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Catering;
