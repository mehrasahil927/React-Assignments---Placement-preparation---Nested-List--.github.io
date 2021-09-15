import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function ListOfCities({ city, countC }) {
  let countT = 1;
  const [showTown, setShowTown] = useState(false);
  return (
    <>
      <p onClick={() => setShowTown(!showTown)} id={"city" + countC}>
        {city.name}
      </p>
      {showTown &&
        city.towns.map((town) => {
          return (
            <p id={"town" + countT++} key={countT}>
              {town.name}
            </p>
          );
        })}
    </>
  );
}

function ListOfStates({ state, countS }) {
  let countC = 1;
  const [showCity, setShowCity] = useState(false);
  return (
    <>
      <p onClick={() => setShowCity(!showCity)} id={"state" + countS}>
        {state.name}
      </p>
      {showCity &&
        state.cities.map((city) => {
          return <ListOfCities city={city} countC={countC++} key={countC} />;
        })}
    </>
  );
}

function App() {
  let countS = 1;
  return (
    <div id="main">
      {states.map((state) => {
        return <ListOfStates state={state} countS={countS++} key={countS} />;
      })}
    </div>
  );
}

export default App;
