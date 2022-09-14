import React, { useEffect } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useRef } from 'react';

function RowContainer({ flag, data, scrollValue }) {
  console.log(data);
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  });

  return (
    <div
      ref={rowContainer}
      className={` w-full my-12 flex items-center justify-center gap-3  p-4 rounded-lg scroll-smooth ${
        flag ? 'overflow-x-scroll scrollbar-none ' : 'overflow-hidden'
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="md:min-w-350 min-w-[300px] w-300  h-auto bg-gray-100 rounded-lg p-2 my-12 backdropbackdrop-blur-lg hover:drop-shadow-lg cursor-pointer bg-cardOverlay "
          >
            <div className="w-full flex  items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-3e699.appspot.com/o/Images%2F1663015197522-fi4.png?alt=media&token=4f62b477-54a2-4767-952a-f3a77c912dd5"
                alt="dummy image"
                className="w-40 -mt-2 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md "
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end ">
              <p className="text-textColor font-semibold text-base md:text-lg">Fried Fish</p>
              <p className=" mt-1 text-sm text-gray-500 "> 45 Calories </p>
              <div className=" flex items-center gap-8 ">
                <p className=" text-lg text-headingColor font-semibold ">
                  <span className="text-sm text-red-500">$</span>5.25
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default RowContainer;
