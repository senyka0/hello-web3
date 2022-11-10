import React from "react";

interface Props {
  message: string;
}

const Alert = ({ message }: Props) => {
  return (
    <div role="alert" className="rounded border-l-4 border-red-500 bg-red-100 p-4 w-56 absolute top-5 right-3">
      <strong className="block font-medium text-red-700">{message}</strong>
    </div>
  );
};

export default Alert;
