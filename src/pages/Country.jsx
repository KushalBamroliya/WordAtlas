import React, { useEffect, useState, useTransition } from "react";
import { getcountrydata } from "../api/Postcountrydata";
import { Loader } from "../components/UI/Loader";
import Countrycard from "../components/UI/Countrycard";
import Searchfilter from "../components/UI/Searchfilter";

function Country() {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  useEffect(() => {
    startTransition(async () => {
      const res = await getcountrydata();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };
  const filteredCountries = countries.filter(searchCountry)

  return (
    <section className="countrysection">
      <Searchfilter
        search={search}
        setsearch={setSearch}
      />
      <ul className="fourcolsline">
        {filteredCountries.map((country, index) => (
          <Countrycard country={country} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default Country;
