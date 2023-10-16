import React, { useEffect, useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Modal from "@/components/ShowList";
import SendMessage from "@/components/SendMessage";
import Calendar from "react-calendar";
import toast, { Toaster } from "react-hot-toast";

const Catering = () => {
  const [numberPeople, setNumberP] = useState(2);
  const [showList, setShowList] = useState(false);
  const [showDList, setShowDList] = useState(false);
  const [food, setFood] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [date, setDate] = useState("");
  const [options, setOptions] = useState("Yes");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [openCalender, setOpenCalender] = useState(false);

  const foodItems = [
    { id: 1, name: "Egusi" },
    { id: 2, name: "Gbegiri" },
    { id: 3, name: "Ofada Stew" },
    { id: 4, name: "Okra Ogbono" },
    { id: 5, name: "Nsala" },
    { id: 6, name: "Pepper Soup" },
    { id: 7, name: "Red Stew" },
    { id: 8, name: "Ewa Riro" },
    { id: 9, name: "Plantains" },
    { id: 10, name: "Puff Puff" },
    { id: 11, name: "Yam Porridge" },
    // { id: 8, name: "Meat Pies, Suya, Moi Moi" },
  ];

  const foodArr = [];
  const [showNav, setShowNav] = useState(false);
  const showOptions = () => {
    setShowList(!showList);
  };

  const showDOptions = () => {
    setShowDList(!showDList);
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

    setOpenCalender(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const parseDate = date.toDateString();
      const data = {
        name,
        email,
        phone,
        parseDate,
        numberPeople,
        options,
        checkedItems,
        message,
      };

      const response = await fetch("api/inquiry", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 500) {
        // message.error("An error Occured");
        toast.error("An error Occured");
        // setIsLoading(false);
      } else {
        // setSuccess(true);
        toast.success("Message Sent Successfully");

        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Toaster />
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
              <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Name"
                id="contact"
              />
              <input
                className="yellow-out"
                type="text"
                id="number"
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhone}
              />
              <div className="form-flex">
                <div>
                  <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                </div>

                <button className="date" onClick={showCalenda}>
                  <p>{date ? date.toDateString() : "Date Order"}</p>
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
                </div>
                <div className="delivery" onClick={showDOptions}>
                  <i class="ri-user-fill"></i>
                  <p>{options}</p>
                  <i
                    class={`ri-arrow-down-s-line ${showDList && "rotateArrow"}`}
                  ></i>
                  <div
                    className={`delivery-list ${
                      showDList && "showDListOptions"
                    }`}
                  >
                    <ul>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setOptions("Yes");
                          }}
                        >
                          Yes
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setOptions("No");
                          }}
                        >
                          No
                        </button>
                      </li>
                    </ul>
                  </div>
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
                className="yellow-out"
                placeholder="Tell us something about your inquiry..."
                name=""
                id=""
                cols="30"
                rows="10"
                value={message}
                onChange={handleMessage}
              ></textarea>
              <div onClick={handleForm} className="bg-lo">
                <SendMessage text="SEND A MESSAGE" />
                {/* <div className="loader-cta"></div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {openCalender && (
        <div className="calender-container">
          <div className="calender-main">
            <div className="details">
              <h1>
                Date Order: <span>{String(date.toDateString())}</span>
              </h1>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenCalender(false);
                }}
              >
                Done
              </button>
            </div>
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
      )}
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
