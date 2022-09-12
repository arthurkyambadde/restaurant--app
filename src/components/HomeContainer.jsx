import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';

function HomeContainer() {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen ">
      <div className="py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6 ">
        <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full ">
          <p className="text-base text-orange-500 font-semibold">Fast Delivery</p>
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl ">
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery bike" />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{' '}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem] ">Your Neighbourhood </span>
        </p>
        <p className=" text-base text-textColor text-center md:text-left md:w-[80%] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque harum non laborum, fugiat
          esse doloremque consequuntur eius beatae quibusdam distinctio ad corporis commodi suscipit
          tempora.
        </p>
        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 "
        >
          Place Order
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <div className="w-full flex items-center justify-center relative">
          <img
            src={HeroBg}
            className="ml-auto h-420 w-full lg:w-auto lg:h-650"
            alt="hero background"
          />
          <div className=" w-full h-full absolute flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap ">
            {heroData &&
              heroData.map((item) => (
                <div
                  key={item.id}
                  className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex  flex-col items-center justify-center drop-shadow-lg "
                >
                  <img
                    src={item.imageScr}
                    className="lg:w-40 w-20 lg:-mt-20 -mt-10"
                    alt="Icecream image"
                  />
                  <p className=" lg:text-lg text-base lg:mt-4 mt-2 font-semibold text-textColor ">
                    {item.name}
                  </p>
                  <p className="lg:text-sm text-[12px] text-lighttextGray font-semibold lg:my-3 my-1 ">
                    {item.decp}
                  </p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span>
                    {item.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
