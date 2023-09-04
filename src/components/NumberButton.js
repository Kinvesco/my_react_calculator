import { ACTIONS } from "../App";

export default function NumberButton({ dispatch, number }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: number } })}
    >
      {number}
    </button>
  );
}