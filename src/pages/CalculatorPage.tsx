import Header from "../components/Header/Header";
import { useState } from "react";
import { evaluate } from "mathjs";
import "./CalculatorPage.css";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";

function CalculatorPage() {
  const [calc, setCalc] = useState<string>("0");
  const operation: string[] = ["+", "-", "*", "/", "."];
  const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const updateCalc = (value: string): void => {
    if (
      (value === "0" && calc === "0") ||
      (operation.includes(value) && calc === "0")
    ) {
      return;
    } else if (calc === "0" && numbers.includes(value)) {
      setCalc(String(evaluate(value)));
      return;
    }
    setCalc(calc + value);
    console.log("the placeholder value:", calc + value);
  };

  const calculate = (calculation: string): void => {
    console.log("the calculated value:", calculation);
    let expression = calculation;
    if (
      calculation.endsWith("+") ||
      calculation.endsWith("-") ||
      calculation.endsWith("*") ||
      calculation.endsWith("/")
    ) {
      expression = calculation.slice(0, -1);
      console.log("after slicing:", expression);
      const result: number = evaluate(expression);
      console.log("the result:", result);
      setCalc(String(result));
      return;
    }
    const result: number = evaluate(expression);
    setCalc(String(result));
  };

  const reset = () => {
    setCalc("0");
  };

  const remove = (calc: string): void => {
    if (calc.length > 1) {
      const hei = calc.slice(0, -1);
      setCalc(hei);
    } else {
      reset();
    }
  };
  return (
    <>
      <Header />
      <ProjectDescription
        description={
          "Beskrivelse: Dette er et prosjekt jeg lagde fra scratch ved å bare bruke dokumentasjon og google uten bruk av AI."
        }
        goal={
          "Mål: lage noe fra scratch og bli flinkere til å bruke dokumentasjon."
        }
        todo={"TODO: Fikse på designet og gjøre kalkulatoren responsiv."}
      />
      <div className="calculator-container">
        <h1 className="calculator-header">Calculator</h1>
        <div className="calculator-margin-wrapper">
          <div className="number-field">{calc}</div>
          <div className="calculator-grid">
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("7")}
            >
              7
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("8")}
            >
              8
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("9")}
            >
              9
            </button>
            <button
              type="button"
              className="button"
              onClick={() => remove(calc)}
            >
              DEL
            </button>
            <button type="button" className="button" onClick={() => reset()}>
              CE
            </button>

            <button
              type="button"
              className="button"
              onClick={() => updateCalc("4")}
            >
              4
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("5")}
            >
              5
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("6")}
            >
              6
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("-")}
            >
              -
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("*")}
            >
              *
            </button>

            <button
              type="button"
              className="button"
              onClick={() => updateCalc("1")}
            >
              1
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("2")}
            >
              2
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("3")}
            >
              3
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("/")}
            >
              /
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("+")}
            >
              +
            </button>

            <button
              type="button"
              className="button"
              onClick={() => updateCalc("0")}
            >
              0
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc(".")}
            >
              .
            </button>
            <button
              type="button"
              className="button"
              onClick={() => calculate(calc)}
            >
              =
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc("(")}
            >
              (
            </button>
            <button
              type="button"
              className="button"
              onClick={() => updateCalc(")")}
            >
              )
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CalculatorPage;
