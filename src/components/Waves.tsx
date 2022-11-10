import { Wave } from "../utils/waves";
import React, { FC } from "react";

interface Props {
  waves: Wave[];
}

const Waves: FC<Props> = ({ waves }) => {
  return (
    <>
      {waves.map((wave, index) => {
        return (
          <div key={index}>
            <div>Address: {wave.address}</div>
            <div>Time: {wave.timestamp.toString()}</div>
            <div>Message: {wave.message}</div>
          </div>
        );
      })}
    </>
  );
};

export default Waves;
