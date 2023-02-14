const currentOp = document.getElementById("currentOperation");
const currentResult = document.getElementById("currentResult");
const last = document.getElementById("lastOperation");
const lastResult = document.getElementById("lastResult");
const history = [];
const operators = ["+", "-", "/", "*"];
let opString = "";
let clicked = 0;
let result = "";

const createString = (val) => {
    switch (clicked) {
        case 1:
            opString = result;
            clicked = 0;
            break;
        case 0:
            opString = !opString && operators.includes(val) ? (displayError(1), opString) : operators.includes(val) && operators.includes(opString.slice(-1)) ? (displayError(2), opString) : val === "pow" && result ? Math.pow(result, 2) : opString.concat(val);
        default:
            break;
    }
    updateUi();
};

const deleteString = (val) => {
    opString = val ? "" : opString.slice(0, -1);
    updateUi();
};

const getResult = (val) => {
    result = eval(opString).toString();
    clicked = 1;
    history.push({
        operation: opString,
        result: result,
    });
    updateUi();
};

const displayError = (val) => {
    switch (val) {
        case 1:
            alert("Introduza um número");
            break;
        case 2:
            alert("Operador já definido");
        default:
            break;
    }
};

const updateUi = () => {
    currentOp.innerHTML = opString || "0";
    currentResult.innerHTML = result || "0";
    const lastOperation = history.slice(-1)[0];
    last.innerHTML = lastOperation?.operation || "Nothing to Show";
    lastResult.innerHTML = lastOperation?.result || "0";
};