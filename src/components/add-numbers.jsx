import React from "react";

export default function AddNumbers({ num1, num2 }) {
  function add() {
    console.log(num1 + num2);
  }
  return (
    <div>
      <button onClick={add}>Output the value of adding two numbers</button>
    </div>
  );
}
