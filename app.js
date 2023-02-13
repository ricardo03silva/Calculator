const lastOp = [{ operation: "default", result: "default" }];
let opString = "";
const operators = ["+", "-", "/", "*", "(", ")"];
let clicked = 0;
let result = "";

const createString = (val) => {
    //  clicked ? (result, clicked=0)
    // (result, clicked = 0, console.log(":"+opString), createString(val))
    switch (clicked) {
        case 1:
            opString = result;
            clicked = 0;
            console.log(": "+clicked);
            console.log(": "+opString);
            break;
        case 0:
            opString = !opString && operators.includes(val) ? (displayError(1), opString) : opString.charAt(-1) === val ? (displayError(2), opString) : opString.concat(val);
        default:
            break;
    }
    console.log(opString);
};

const deleteString = (val) => {
    console.log(val);
};

const getResult = (val) => {
    result = eval(opString);
    clicked = 1;
    console.log(result);
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
