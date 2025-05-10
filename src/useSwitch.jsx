import { useState } from "react";

function useSwitch(initialState = false) {
  const [state, setState] = useState(initialState);

  function toggle() {
    setState((prevState) => !prevState);
  }

  return [state, toggle];
}

export default useSwitch;
