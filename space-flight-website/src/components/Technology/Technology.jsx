import React,{useState} from 'react';
import Data from "../../data.json";
const Technology = () => {
  const [item, setItems] = useState(Data.technology[0]);
  const filterItems = (detail) => {
    setItems(Data.technology.find((item) => item.id === detail));
  };
  return (
    <section className="h-auto px-5 lg:pt-40 py-20 lg:bg-[url('../../../src/assets/technology/background-technology-desktop.jpg')] md:bg-[url('../../../src/assets/technology/background-technology-tablet.jpg')] bg-[url('../../../stechnology/background-technology-mobile.jpg')] bg-cover bg-no-repeat">
      <h2
        className="uppercase font-barlow md:text-sm text-xxsm tracking-[.25em] pb-[97px] md:text-left text-center px-20"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <span className="text-slate md:pr-[28px] pr-[12px]">03</span>Space
        Launch 101
      </h2>
      <div className="grid md:grid-cols-2 grid-rows-2 gap-5 w-full outline outline-offset-2 outline-1">
        <div className="outline outline-offset-2 outline-1 md:order-none order-2 flex gap-50 items-center md:flex-row flex-col w-full">
          <div className="flex md:flex-col flex-row outline outline-offset-2 outline-1 w-full justify-evenly h-full items-center">
            {Data.technology.map((list) => {
              return (
                <div
                  className="md:h-[80px] md:w-[80px] h-[40px] w-[40px] border-blue border-[1px] rounded-full flex justify-center items-center cursor-pointer hover:bg-circle "
                  onClick={() => {
                    filterItems(list.id);
                  }}
                  key={list.id}
                  style={{
                    // this it to give a border style for the active component by using inline react styles
                    backgroundColor: item.name == list.name ? "white" : "",
                    color: item.name == list.name ? "hsl(230deg,35%, 7%)" : "",
                  }}
                >
                  {list.id}
                </div>
              );
            })}
          </div>
          <div className="outline outline-offset-2 outline-1 w-full">
            <div className="text-slate text-xxsm md:text-left text-center">
              THE TERMINOLOGY…
            </div>
            <div className="sm:text-md md:text-left text-center text-xsm uppercase">
              {item.name}
            </div>
            <p
              className="md:max-w-[600px] text-slate md:text-left text-center"
              data-aos="fade-left"
            >
              {item.description}
            </p>
          </div>
        </div>
        <div
          className="outline outline-offset-2 outline-1 justify-self-center md:order-none order-1 flex items-center "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={`../../../src/${item.images.portrait}`}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Technology