import { useState } from "react";

function useSwitch(initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
}

export default useSwitch;
