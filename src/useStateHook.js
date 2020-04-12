import { useReducer } from "react";

const reducer = (prevState, currState) => ({ ...prevState, ...currState });

export default function useStateHook(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setState = updatedState => dispatch(updatedState);
  return [state, setState];
}
