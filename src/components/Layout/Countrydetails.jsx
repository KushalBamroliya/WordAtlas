import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getcountryinddata } from "../../api/Postcountrydata";
import { Loader } from "../UI/Loader";

function Countrydetails() {
  const params = useParams();
  console.log(params);

  const [country, setcountry] = useState();
  const [ispending, starttransition] = useTransition();
  useEffect(() => {
    starttransition(async () => {
      const res = await getcountryinddata(params.id);
      // console.log(res.data);
      if (res.status === 200) {
        setcountry(res.data[0]);
      }
    });
  }, []);

  if (ispending) return <Loader />;
  return (
    <>
      <div className="fullwidthcard">
        {country && (
          <div className="innercontext">
            <img src={country.flags.svg} alt="" className="flag" />
            <div className="countrycontent">
              <p className="officialmsg">
                {country?.name?.nativeName?.eng?.official || ""}
              </p>
            </div>
            <div className="infocontainer">
              <p>
                <span className="carddec">Native Name : </span>
                {country?.name?.nativeName?.eng?.common || "'Empty'"}
              </p>
              <p>
                <span className="carddec">Population : </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="carddec">Region : </span>
                {country.region}
              </p>
              <p>
                <span className="carddec">Subregion : </span>
                {country.subregion}
              </p>
              <p>
                <span className="carddec">Capital : </span>
                {country.capital[0]}
              </p>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Countrydetails;
