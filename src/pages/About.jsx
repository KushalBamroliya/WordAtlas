import React from "react";
import conutry from "../api/contrydata.json";

function About() {
  return (
    <>
      <div className="sectionabout container">
        <h2 className="containertitle">
          Here are the Interesing Facts <br /> we are proud of you
        </h2>
        <div className="gradientcards">
          {conutry.map((item) => {
            const { id, countryName, capital, population, interestingFact } =
              item;
            return (
              <div className="card" key={id}>
                <div className="containercard bg-blue-box">
                  <p className="cardtitle">{countryName}</p>
                  <p>
                    <span className="carddec">Capital : </span>
                    {capital}
                  </p>
                  <p>
                    <span className="carddec">population : </span>
                    {population}
                  </p>
                  <p>
                    <span className="carddec">InterestingFact : </span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;
