
import React, { useState } from "react";
import Data from '../../data.json'
const Destination = () => {
  const [item, setItems] = useState(Data.destinations[0])
  const filterItems = (detail) => {
    setItems(Data.destinations.find((item) => item.name === detail));
  }
  return (
    <section className="min-h-[100vh] px-5 lg:pt-40 py-24 lg:bg-[url('../../../src/assets/destination/background-destination-desktop.jpg')] md:bg-[url('../../../src/assets/destination/background-destination-tablet.jpg')] bg-[url('../../../src/assets/destination/background-destination-mobile.jpg')] bg-cover bg-no-repeat">
      <h2
        className="uppercase font-barlow md:text-sm text-xxsm tracking-[.25em] pb-[97px] md:text-left text-center px-20"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <span className="text-slate md:pr-[28px] pr-[12px]">01</span>Pick your
        destination
      </h2>
      <div
        className="
            border-r-blue grid lg:grid-cols-2 gris-cols-2 gap-x-10 w-full"
      >
        <div className="place-self-center pb-10">
          <img src={`../../../src/${item.images.png}`} alt={item.name} />
        </div>
        <div className="max-w-[450px] place-self-center">
          <ul className="flex max-w-[285px] justify-between px-3 mb-10 text-slate font-medium lg:mx-0 mx-auto py-4 h-24 gap-2">
            {Data.destinations.map((list) => {
              return (
                <li
                  className="pl-[-350px] text-center cursor-pointer"
                  onClick={() => {
                    filterItems(list.name);
                  }}
                  key={list.name}
                >
                  <a className="ml-[-20px] px-4 link:after:w-full hover:border-b-[4px] hover:border-circle" style={{
                    // this it to give a border style for the active component by using inline react styles
                    borderBottom:
                      item.name == list.name ? "4px solid white" : '',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {list.name}</a>
                </li>
              );
            })}
          </ul>
          <div
            className="uppercase lg:text-lg lg:text-left text-center md:text-md text-sm"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {item.name}
          </div>
          <div
            className="text-slate mb-14 lg:text-left text-center"
            data-aos="fade-up"
          >
            {item.description}
          </div>
          <div className="bg-slate w-full h-[1px] my-10"></div>
          <div className="uppercase flex sm:flex-row flex-col gap-5 sm:gap-0">
            <div className="flex-1 place-self-center md:place-self-left">
              <p className="text-slate">avg. distance</p>
              <p className="md:text-sm text-xsm mx-auto">{item.distance}</p>
            </div>
            <div className="flex-1 md:place-self-left place-self-center">
              <p className="text-slate ">est. travel time</p>
              <p className="md:text-sm text-xsm">{item.travel}</p>
            </div>
          </div>
          {/* outline outline-offset-2 outline-1 */}
        </div>
      </div>
    </section>
  );
}

export default Destination