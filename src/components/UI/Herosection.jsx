import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Herosection() {
  return (
    <main className='herosection main'>
          <div className="container gridtwocols grid">
            <div className="herocontent">
              <h1 className='heading-xl'>
                Explore the World, One Country at a time.
              </h1>
              <p className='paragraph'>
                Discover the history, culture, and beeauty of every nation. sort, search, and filter through countries to find the details you need.
              </p>
              <button className='btn btn-darken btn-inline bg-white-box'>Start Exploring <FaLongArrowAltRight /></button>
            </div>
            <div className="heroimg">
              <img src="/images/world.jpg" alt="" className='bannerimg' />
            </div>
          </div>
        </main>
  )
}

export default Herosection