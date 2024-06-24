import { useState } from "react";
import UserInput from "./Components/UserInput";
import ResultTable from "./Components/ResultTable";

const initialInputData = {
  initialInvestment: undefined,
  annualInvestment: undefined,
  expectedReturn: undefined,
  duration: undefined,
};

function App() {
  const [inputData, setInputData] = useState(initialInputData);
  const inputIsValid = inputData.duration >= 1;

  function handleInputData(name, value) {
    setInputData((preInputData) => {
      return { ...preInputData, [name]: value };
    });
  }
  return (
    <>
      <header id="header">
        <img
          src="investment-calculator-logo.png"
          alt="Investment Caluclator Logo"
        />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput handleField={handleInputData} {...inputData} />
      {inputIsValid ? (
        <ResultTable {...inputData} />
      ) : (
        <p className="center">Please Enter Duration Greater Than 0.</p>
      )}
    </>
  );
}

export default App;
