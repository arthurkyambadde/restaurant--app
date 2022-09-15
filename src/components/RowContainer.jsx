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
        flag ? 'overflow-x-scroll scrollbar-none ' : 'overflow-hidden flex-wrap'
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 h-[175px] min-w-[300px] md:w-340 md:min-w-[340px] bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-center "
          >
            <div className="w-full flex  items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={item?.imageUrl}
                alt="dummy image"
                className="w-20 -mt-8 drop-shadow-2xl "
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md "
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end ">
              <p className="text-textColor font-semibold text-base md:text-lg w-[50%]">
                {item?.title}
              </p>
              <p className=" mt-1 text-sm text-gray-500 "> {item?.calories} Calories</p>
              <div className=" flex items-center gap-8 ">
                <p className=" text-lg text-headingColor font-semibold ">
                  <span className="text-sm text-red-500">$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default RowContainer;
