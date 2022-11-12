import { Wave } from "../utils/waves";
import React, { FC } from "react";

interface Props {
  waves: Wave[];
  totalWaves: number | undefined;
}

const Waves: FC<Props> = ({ waves, totalWaves }) => {
  return (
    <div className="mt-20 mx-auto max-w-xl sm:mt-0">
      <div className="text-xl font-bold text-gray-900 text-center sm:my-5 ">Total messages: {totalWaves}</div>
      <div className="h-44 sm:h-40 md:h-72 overflow-auto w-auto scrollbar-thin">
        {waves.map((wave, index) => {
          return (
            <div key={index} className="mx-2 p-5 relative block border-black border-2 sm:p-8 mt-3">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{wave.message}</h3>

                  <p className="text-xs mt-1 sm:text-xs sm:font-medium text-gray-600">From: {wave.address}</p>
                </div>
              </div>

              <div className="mt-4 sm:pr-8">
                <p className="text-xs sm:text-sm text-gray-500">{wave.timestamp.toString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Waves;
