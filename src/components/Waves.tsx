import { Wave } from "../utils/waves";
import React, { FC } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  waves: Wave[];
  totalWaves: number | undefined;
}

const Waves: FC<Props> = ({ waves, totalWaves }) => {
  return (
    <div className="mt-20 mx-auto max-w-xl sm:mt-0">
      <div className="text-xl font-bold text-gray-900 text-center sm:my-5 ">Total messages: {totalWaves}</div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {waves.map((wave, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="mx-3 sm:mx-0 p-5 relative block border-black border-2 sm:p-8 mt-3">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div className="justify-between sm:flex">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{wave.message}</h3>
                    <p className="text-xs mt-1 sm:text-base sm:font-medium text-gray-600">From: {wave.address}</p>
                  </div>
                </div>
                <div className="mt-4 mb-2 sm:mb-0 sm:pr-8">
                  <p className="text-xs sm:text-sm text-gray-500">{wave.timestamp.toString()}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Waves;
