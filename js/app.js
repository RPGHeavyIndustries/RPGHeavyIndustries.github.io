//text entry stuff
//buttons
const inputBtn1 = document.getElementById("input-plate1");
const inputBtn2 = document.getElementById("input-plate2");
const inputBtn3 = document.getElementById("input-plate3");
const inputBtn4 = document.getElementById("input-plate4");
const inputBtn5 = document.getElementById("input-plate5");
const inputBtn6 = document.getElementById("input-plate6");
const inputBtn7 = document.getElementById("input-plate7");
const inputBtn8 = document.getElementById("input-plate8");
const inputBtn9 = document.getElementById("input-plate9");
const inputBtn10 = document.getElementById("input-plate10");

//reference for internal variables
const inputEl1 = document.getElementById("plate1");
const inputEl2 = document.getElementById("plate2");
const inputEl3 = document.getElementById("plate3");
const inputEl4 = document.getElementById("plate4");
const inputEl5 = document.getElementById("plate5");
const inputEl6 = document.getElementById("plate6");
const inputEl7 = document.getElementById("plate7");
const inputEl8 = document.getElementById("plate8");
const inputEl9 = document.getElementById("plate9");
const inputEl10 = document.getElementById("plate10");

const inputBtn2 = document.getElementById("input-btn2");


function getInputVal1() {
  console.log(inputEl1.value);
  return
}
function getInputVal2() {
    console.log(inputEl2.value);
    return
  }
  function getInputVal3() {
    console.log(inputEl3.value);
    return
  }
  function getInputVal4() {
    console.log(inputEl4.value);
    return
  }
  function getInputVal5() {
    console.log(inputEl5.value);
    return
  }
  function getInputVal6() {
    console.log(inputEl6.value);
    return
  }
  function getInputVal7() {
    console.log(inputEl7.value);
    return
  }
  function getInputVal8() {
    console.log(inputEl8.value);
    return
  }
  function getInputVal9() {
    console.log(inputEl9.value);
    return
  }
  function getInputVal10() {
    console.log(inputEl10.value);
    return
  }

inputBtn1.addEventListener("click", getInputVal1);
inputBtn2.addEventListener("click", getInputVal2);
inputBtn3.addEventListener("click", getInputVal3);
inputBtn4.addEventListener("click", getInputVal4);
inputBtn5.addEventListener("click", getInputVal5);
inputBtn6.addEventListener("click", getInputVal6);
inputBtn7.addEventListener("click", getInputVal7);
inputBtn8.addEventListener("click", getInputVal8);
inputBtn9.addEventListener("click", getInputVal9);
inputBtn10.addEventListener("click", getInputVal10);

function writeoutput() {
  document.write(inputEl.value);
}

inputBtn2.addEventListener("click", writeoutput);
//