import React from "react";

export default function Greetings() {
  return (
    <React.Fragment>
      <div className="container">
        <h2>Hello</h2>
      </div>
    </React.Fragment>
  );
}

function MorningGreetings() {
  const greeting = "Good Morning";
  return <h1>{greeting}</h1>;
}
function AfternoonGreetings() {
  return <h1>Good Afternoon</h1>;
}
function EveningGreetings() {
  return <h1>Good Evening</h1>;
}

export { MorningGreetings, AfternoonGreetings, EveningGreetings };
