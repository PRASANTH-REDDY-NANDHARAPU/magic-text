const prompt = document.getElementById("prompt");
const output = document.getElementById("output");

function capital() {
  if (prompt.value.length == 0) {
    output.innerHTML = "";
    output.innerHTML = "😡 plzz enter prompt 👃🥊";
    output.classList.add("capital");
    output.classList.add("error");
  } else {
    output.innerHTML = "";
    output.innerHTML = prompt.value;
    output.classList.remove("lower");
    output.classList.remove("first");
    output.classList.remove("bold");
    output.classList.remove("italic");
    output.classList.remove("underline");
    output.classList.remove("error");
    output.classList.add("capital");
  }
}
function lower() {
  if (prompt.value.length == 0) {
    output.innerHTML = "";
    output.innerHTML = "😡 plzz enter prompt 👃🥊";
    output.classList.add("capital");
    output.classList.add("error");
  } else {
    output.innerHTML = "";
    output.innerHTML = prompt.value;
    output.classList.remove("capital");
    output.classList.remove("first");
    output.classList.remove("bold");
    output.classList.remove("italic");
    output.classList.remove("underline");
    output.classList.remove("error");
    output.classList.add("lower");
  }
}
function first() {
  if (prompt.value.length == 0) {
    output.innerHTML = "";
    output.innerHTML = "😡 plzz enter prompt 👃🥊";
    output.classList.add("capital");
    output.classList.add("error");
  } else {
    output.innerHTML = "";
    output.innerHTML = prompt.value;
    output.classList.remove("lower");
    output.classList.remove("capital");
    output.classList.remove("bold");
    output.classList.remove("italic");
    output.classList.remove("underline");
    output.classList.remove("error");
    output.classList.add("first");
  }
}
function bold() {
  if (prompt.value.length == 0) {
    output.innerHTML = "";
    output.innerHTML = "😡 plzz enter prompt 👃🥊";
    output.classList.add("capital");
    output.classList.add("error");
  } else {
    output.innerHTML = "";
    output.innerHTML = prompt.value;
    output.classList.remove("lower");
    output.classList.remove("first");
    output.classList.remove("capital");
    output.classList.remove("italic");
    output.classList.remove("underline");
    output.classList.remove("error");
    output.classList.add("bold");
  }
}
function italic() {
  if (prompt.value.length == 0) {
    output.innerHTML = "";
    output.innerHTML = "😡 plzz enter prompt 👃🥊";
    output.classList.add("capital");
    output.classList.add("error");
  } else {
    output.innerHTML = "";
    output.innerHTML = prompt.value;
    output.classList.remove("lower");
    output.classList.remove("first");
    output.classList.remove("bold");
    output.classList.remove("capital");
    output.classList.remove("underline");
    output.classList.remove("error");
    output.classList.add("italic");
  }
}
function underline() {
  if (prompt.value.length == 0) {
    output.innerHTML = "";
    output.innerHTML = "😡 plzz enter prompt 👃🥊";
    output.classList.add("capital");
    output.classList.add("error");
  } else {
    output.innerHTML = "";
    output.innerHTML = prompt.value;
    output.classList.remove("lower");
    output.classList.remove("first");
    output.classList.remove("bold");
    output.classList.remove("italic");
    output.classList.remove("capital");
    output.classList.remove("error");
    output.classList.add("underline");
  }
}
