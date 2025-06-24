import React from 'react'
import { NavLink } from 'react-router-dom';

function Countrycard({country}) {
    const {flags, name, population, capital} = country;
    // console.log(country)
  return (
    <li className='countrycard card'>
        <div className="countryimg containercard">
            <div className="imagecountry">
            <img src={flags.svg} alt={flags.alt} />
            </div>
            <div className="countryinfo">
                <p className='cardtitles'>{name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}</p>
                <p><span className='carddes'>Population : </span>{population}</p>
                <p><span className='carddes'>capital : </span>{capital[0]}</p>
                <NavLink to={`/country/${name.common}`}><button>Read more</button></NavLink>
            </div>
        </div>
    </li>
  )
}

export default Countrycard