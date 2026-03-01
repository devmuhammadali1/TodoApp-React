import { useState,useEffect, useRef } from "react";
import { EmptyInputError } from "./InputError";

export const TodoSubmit = ({ addingTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef=useRef()
  useEffect(()=>{inputRef.current.focus()},[])
  let handleSubmit = () => {
    if (inputValue.trim()==="") {
      setInputValue('')
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
        ref={inputRef}
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
