function App() {
  const [calc, setCalc] = React.useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = value => {
    const operatorPattern = /[+\-*/]/;
    if (calc === "" && value === "0") {
      return;
    }
    if (value === ".") {
      const parts = calc.split(operatorPattern);
      if (parts[parts.length - 1].includes(".")) {
        return;
      }
    }
    if (value !== "-" && operatorPattern.test(value)) {
      const lastChar = calc[calc.length - 1] || "";
      const secondLastChar = calc[calc.length - 2] || "";
      if (operatorPattern.test(lastChar)) {
        if (lastChar === "-" && operatorPattern.test(secondLastChar)) {
          setCalc(calc.slice(0, -2) + value);
          return;
        }
        setCalc(calc.slice(0, -1) + value);
        return;
      }
    }

    setCalc(calc + value);
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearAll = () => {
    setCalc("");
  };

  return (
    React.createElement("div", { className: "App" },
    React.createElement("div", { className: "calculator" },
    React.createElement("div", { className: "display", id: "display" },
    calc || "0"),

    React.createElement("div", { className: "operators" },
    React.createElement("button", {
      id: "add",
      onClick: () => {
        updateCalc("+");
      } }, "+"),



    React.createElement("button", {
      id: "subtract",
      onClick: () => {
        updateCalc("-");
      } }, "-"),



    React.createElement("button", {
      id: "multiply",
      onClick: () => {
        updateCalc("*");
      } }, "*"),



    React.createElement("button", {
      id: "divide",
      onClick: () => {
        updateCalc("/");
      } }, "/"),



    React.createElement("button", { id: "del", onClick: deleteLast }, "DEL"),


    React.createElement("button", { id: "clear", onClick: clearAll }, "AC")),



    React.createElement("div", { className: "digits" },
    React.createElement("button", {
      id: "one",
      onClick: () => {
        updateCalc("1");
      } }, "1"),



    React.createElement("button", {
      id: "two",
      onClick: () => {
        updateCalc("2");
      } }, "2"),



    React.createElement("button", {
      id: "three",
      onClick: () => {
        updateCalc("3");
      } }, "3"),



    React.createElement("button", {
      id: "four",
      onClick: () => {
        updateCalc("4");
      } }, "4"),



    React.createElement("button", {
      id: "five",
      onClick: () => {
        updateCalc("5");
      } }, "5"),



    React.createElement("button", {
      id: "six",
      onClick: () => {
        updateCalc("6");
      } }, "6"),



    React.createElement("button", {
      id: "seven",
      onClick: () => {
        updateCalc("7");
      } }, "7"),



    React.createElement("button", {
      id: "eight",
      onClick: () => {
        updateCalc("8");
      } }, "8"),



    React.createElement("button", {
      id: "nine",
      onClick: () => {
        updateCalc("9");
      } }, "9"),



    React.createElement("button", {
      id: "zero",
      onClick: () => {
        updateCalc("0");
      } }, "0"),



    React.createElement("button", { id: "equals", onClick: calculate }, "="),


    React.createElement("button", {
      id: "decimal",
      onClick: () => {
        updateCalc(".");
      } }, ".")))));







}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));