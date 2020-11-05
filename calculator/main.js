let bowCounter = 0;
let dotCheckWrite = false;
let zeroCheckWrite = false;
let dotArifmeticCheckWrite = false;
let buttonCheckDown = false;
let arrayOfBowPair = [[], [], 0];
let numberCheckForDot = false;
// Считование ввод с клавиатуры
document.addEventListener("keydown", (event) => {
  if (event.key.match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) {
    buttonCheckDown = true;
    checkSymbol(event.key);
  }
});
// Функция вывода результата в input
const resultOut = () => {
  checkBowQuantity();
  checkEndOfData();
  let errorMessage = "Не коректные даннные!!!";
  let outputData;
  try {
    setOutputData(parseFloat(calculate(getInputData()).toFixed(10)));
  } catch {
    outputData = getInputData();
    setOutputData(errorMessage);
    setTimeout(() => setOutputData(outputData), 1500);
  }
};
// Добавление символа в input
const writeSymbol = (symbol) => setOutputData(getInputData() + symbol);
// Удаление последнего символа в input
function deleteSymbol() {
  let cutSymbol;
  if (getInputData().length > 1) {
    cutSymbol = getInputData()[getInputData().length - 1];
    switch (cutSymbol) {
      case "(":
        bowCounter--;
        arrayOfBowPair[1].slice(0, -1);
        break;
      case ")":
        bowCounter++;
        arrayOfBowPair[2] -= 1;
        deleteBowPair();
        break;
      case ".":
        dotCheckWrite = false;
        break;
    }
    if (
      checkIsArifmeticSymbol(getInputData()[getInputData().length - 1]) &&
      dotArifmeticCheckWrite
    ) {
      dotCheckWrite = true;
      dotArifmeticCheckWrite = false;
    }
    if (
      getInputData()[getInputData().length - 1] == 0 &&
      checkIsArifmeticSymbol(getInputData()[getInputData().length - 2])
    ) {
      zeroCheckWrite = false;
    }
  }
  setOutputData(getInputData().slice(0, -1));
}
// Очистка input
function clearSymbols() {
  setOutputData("");
  bowCounter = 0;
  dotCheckWrite = false;
  zeroCheckWrite = false;
  arrayOfBowPair = [[], [], 0];
}
//Подсчет
function calculate(inData) {
  return eval(inData);
}
//Различные проверки такие как что точка должна...
function checkSymbol(Symbol) {
  Symbol = checkIputDataIsKey(Symbol);
  if (checkIsArifmeticSymbol(Symbol) && dotCheckWrite) {
    dotCheckWrite = false;
    dotArifmeticCheckWrite = true;
    numberCheckForDot = false;
  }
  switch (Symbol) {
    case "0":
      if (
        !zeroCheckWrite ||
        dotCheckWrite ||
        numberCheckForDot ||
        (checkIsArifmeticSymbol(getInputData()[getInputData().length - 1]) &&
          dotCheckWrite) ||
        (checkIsNumber(getInputData()[getInputData().length - 1]) &&
          getInputData()[getInputData().length - 1] != "0" &&
          getInputData()[getInputData().length - 1] !== ")")
      ) {
        writeSymbol(Symbol);
        zeroCheckWrite = true;
      }
      break;
    case "1":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "2":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "3":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "4":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "5":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "6":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "7":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "8":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "9":
      numberCheckForDot = true;
      writeSymbol(Symbol);
      break;
    case "(":
      if (
        !checkIsNumber(getInputData()[getInputData().length - 1]) &&
        getInputData()[getInputData().length - 1] !== ")"
      ) {
        bowCounter++;
        addBowToArray();
        writeSymbol(Symbol);
      }
      break;
    case ")":
      let inputData = getInputData();
      if (
        (bowCounter &&
          checkIsNumber(getInputData()[getInputData().length - 1])) ||
        (inputData[inputData.length - 1] == ")" && bowCounter)
      ) {
        writeSymbol(Symbol);
        saveBowPair();
        bowCounter--;
      }
      break;
    case ".":
      if (
        !dotCheckWrite &&
        checkIsNumber(getInputData()[getInputData().length - 1])
      ) {
        dotCheckWrite = true;
        writeSymbol(Symbol);
      }
      break;
    case "+":
      zeroCheckWrite = false;
      numberCheckForDot = false;
      if (
        checkIsNumber(getInputData()[getInputData().length - 1]) ||
        getInputData()[getInputData().length - 1] == ")"
      ) {
        writeSymbol(Symbol);
      }
      break;
    case "-":
      numberCheckForDot = false;
      if (
        checkIsNumber(getInputData()[getInputData().length - 1]) ||
        getInputData()[getInputData().length - 1] == ")"
      ) {
        writeSymbol(Symbol);
      }
      break;
    case "*":
      numberCheckForDot = false;
      if (
        checkIsNumber(getInputData()[getInputData().length - 1]) ||
        getInputData()[getInputData().length - 1] == ")"
      ) {
        writeSymbol(Symbol);
      }
      break;
    case "/":
      numberCheckForDot = false;
      if (
        checkIsNumber(getInputData()[getInputData().length - 1]) ||
        getInputData()[getInputData().length - 1] == ")"
      ) {
        writeSymbol(Symbol);
      }
      break;
    case "Enter":
      resultOut();
      break;
    case "Backspace":
      deleteSymbol();
      break;
    default:
      break;
  }
}
//
const getInputData = () => {
  return document.getElementsByClassName("textInOut")[0].value;
};
//
const setOutputData = (value) =>
  (document.getElementsByClassName("textInOut")[0].value = value);

// Проверка на число
function checkIsNumber(symbol) {
  switch (symbol) {
    case "0":
      return true;
      break;
    case "1":
      return true;
      break;
    case "2":
      return true;
      break;
    case "3":
      return true;
      break;
    case "4":
      return true;
      break;
    case "5":
      return true;
      break;
    case "6":
      return true;
      break;
    case "7":
      return true;
      break;
    case "8":
      return true;
      break;
    case "9":
      return true;
      break;
    default:
      return false;
      break;
  }
}
//Проверка на арифметический символ
function checkIsArifmeticSymbol(symbol) {
  switch (symbol) {
    case "+":
      return true;
      break;
    case "-":
      return true;
      break;
    case "*":
      return true;
      break;
    case "/":
      return true;
      break;
    default:
      return false;
      break;
  }
}
// Проверка ввода с клавиатуры или с мышки
function checkIputDataIsKey(Symbol) {
  if (!buttonCheckDown) {
    Symbol = Symbol.value;
    return Symbol;
  } else {
    buttonCheckDown = false;
    return Symbol;
  }
}
//Проверка совпадения количиства дужек
function checkBowQuantity() {
  if (bowCounter > 0) {
    deleteBow();
  }
}
//Удаление лишних дужек
function deleteBow() {
  let j = 0;
  let k = 0;
  let inputData = getInputData();
  while (bowCounter) {
    if (arrayOfBowPair[1][k] === 0) {
      inputData =
        inputData.slice(0, arrayOfBowPair[0][k] - j) +
        inputData.slice(arrayOfBowPair[0][k] + 1 - j);
      j++;
      bowCounter--;
    }
    k++;
  }
  setOutputData(inputData);
}
//Сохранение пар дужек
function saveBowPair() {
  arrayOfBowPair[1][arrayOfBowPair[0].length - 1 - arrayOfBowPair[2]] = 1;
  arrayOfBowPair[2] += 1;
}
//Сохранение позиции дужек
function addBowToArray() {
  arrayOfBowPair[0].push(getInputData().length);
  arrayOfBowPair[1].push(0);
  arrayOfBowPair[2] = 0;
}
//Удаление пар дужек
function deleteBowPair() {
  let i = arrayOfBowPair[1].length - 1;
  let bowPairIsDelete = false;
  while (!bowPairIsDelete) {
    if (arrayOfBowPair[1][i] === 1) {
      arrayOfBowPair[1][i] = 0;
      bowPairIsDelete = true;
    }
    i--;
  }
}
//Проверка на то что бы последний символ был цыфра
function checkEndOfData() {
  let inputData = getInputData();
  if (checkIsArifmeticSymbol(inputData[inputData.length - 1])) {
    inputData = inputData.slice(0, -1);
    setOutputData(inputData);
  }
} //Убирает фокус с кнопок
function changeFocus(button) {
  button.blur();
}
