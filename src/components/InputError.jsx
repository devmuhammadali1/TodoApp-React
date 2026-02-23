// import { useState } from "react"

export const EmptyInputError = ({ error }) => {
  return (
    <>
      <div style={{ height: "0px" }}>
        {error && (
          <p style={{ color: "red", marginTop: "3px", marginLeft: "40px" }}>
            Field is Empty!
          </p>
        )}
      </div>
    </>
  );
};
