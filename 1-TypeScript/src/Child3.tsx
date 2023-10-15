import React from "react";
import { StateContextType, useStateContext } from "./context/StateContext";

const Child3 = () => {
  const { count, color, setColor } = useStateContext() as StateContextType;
  console.log(color);

  return (
    <div className=" mt-10">
      <div
        className={`w-10 h-10 border mb-5`}
        style={{ backgroundColor: color }}
      ></div>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        className=" border p-2"
        placeholder="typing color name.."
      />
    </div>
  );
};

export default Child3;
