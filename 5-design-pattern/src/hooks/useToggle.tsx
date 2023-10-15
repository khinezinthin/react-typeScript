import React, { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [toggle, setToggle] = useState<boolean>(defaultValue);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return { toggle, changeToggle };
};

export default useToggle;
