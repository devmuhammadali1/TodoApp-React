import { useState } from "react";
import { EmptyInputError } from "./InputError";

export const TodoSubmit = ({ addingTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  let handleSubmit = () => {
    if (!inputValue) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    addingTodo(inputValue);
    setInputValue("");
  };
  return (
    <>
    <section>
      <input
        required
        value={inputValue}
        type="text"
        placeholder="Enter Here"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>ADD</button>
      <EmptyInputError error={error} />
      </section>
    </>
  );
};
