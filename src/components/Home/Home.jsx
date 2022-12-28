import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="grid md:grid-cols-2 grid-rows-1 gap-12 min-h-screen bg-cover w-auto lg:bg-[url('../../src/assets/home/background-home-desktop.jpg')] md:bg-[url('../../src/assets/home/background-home-tablet.jpg')] bg-[url('../../src/assets/home/background-home-mobile.jpg')]  md:bg-center bg-no-repeat pt-32 sm:px-20 px-5 bg-center">
      <div className="place-self-center md:max-w-[450px] w-auto">
        <h1 className="uppercase text-slate font-bold md:text-left text-center">
          So, you want to travel to
          <span
            className="lg:text-xlg md:text-lg text-md font-bellefair text-white font-normal block mx-auto"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Space
          </span>
        </h1>
        <p
          className="text-slate font-medium md:text-left text-center md:text-xxsm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="text-slate place-self-center max-[800px]:pb-[100px] animate__animated animate__pulse animate__infinite animate__slow">
        <button>
          <Link to="/destination" className="explore">
            Explore
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Home