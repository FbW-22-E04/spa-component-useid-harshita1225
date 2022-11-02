import "./App.css";
import InputForm from "./InputForm";

function App() {
  return (
    <div className="App">
      <InputForm label="First Name" type="text" />
      <InputForm label="Last Name" type="text" />
      <InputForm label="Email" type="email" />
    </div>
  );
}

export default App;
