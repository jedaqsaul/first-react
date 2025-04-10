import "./App.css";
import AddNumbers from "./components/add-numbers";

import Greetings, {
  AfternoonGreetings,
  EveningGreetings,
  MorningGreetings,
} from "./components/greetings";
import Login from "./components/login/login";

function App() {
  return (
    <>
      <h1 className="Greetings">Hello world!</h1>
      <Greetings />
      <MorningGreetings />
      <AfternoonGreetings />
      <EveningGreetings />
      <Login />
      <AddNumbers num1={10} num2={24} />
    </>
  );
}

export default App;
