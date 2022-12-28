import React,{useState} from "react";
import Data from '../../data.json'
const Crew = () => {
  const [crew_item, setCrew_Items] = useState(Data.crew[0])
  const filterItems = (detail) => {
    setCrew_Items(Data.crew.find((item) => item.name === detail))
  };
    return (
      <section className="min-h-[100vh] lg:px-20 px-5 lg:pt-40 pt-24 lg:bg-[url('../../../src/assets/crew/background-crew-desktop.jpg')] md:bg-[url('../../../src/assets/crew/background-crew-tablet.jpg')] bg-[url('../../../src/assets/crew/background-crew-mobile.jpg')] bg-cover bg-no-repeat">
        <h2
          className="uppercase font-barlow md:text-sm text-xxsm tracking-[.25em] md:text-left text-center"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <span className="text-slate md:pr-[28px] pr-[12px]">02</span>Meet your
          Crew
        </h2>
        <div
          className="
            border-r-blue grid lg:grid-cols-2 gris-cols-2 gap-5 w-full outline outline-offset-2 outline-1 mt-10"
        >
          <div className="md:order-none order-2 grid">
            <div className="self-center pb-10 outline outline-offset-2 outline-1 md:order-none order-2">
              <div className="text-slate uppercase md:text-sm text-xsm py-5 md:text-left text-center">
                {crew_item.role}
              </div>
              <div className="uppercase md:text-md text-sm md:text-left text-center">
                {crew_item.name}
              </div>
              <p className="text-slate max-w-[400px] md:text-left text-center">
                {crew_item.bio}
              </p>
            </div>
            <div className="flex max-w-[135px] md:mx-0 justify-between mx-auto outline outline-offset-2 outline-1 md:order-none order-1 w-full">
              {Data.crew.map((crew) => {
                return (
                  <div
                    key={crew.name}
                    className="h-[15px] w-[15px] rounded-full border-white bg-circle cursor-pointer"
                    onClick={() => {
                      filterItems(crew.name);
                    }}
                    style={{
                      // this it to give a border style for the active component by using inline react styles
                      background: crew_item.name == crew.name ? "white" : "",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="place-self-center outline outline-offset-2 outline-1 lg:max-w-[500px] max-w-[300px] md:order-none order-1 border-b-[1px] border-white">
            <img
              src={`../../../src/${crew_item.images.png}`}
              alt={""}
              data-aos="fade-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
    );  
}

export default Crew