let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let tittle = document.getElementById("tittle");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  tittle.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

// signupBtn.onclick
signupBtn.addEventListener("click", Btndisabler);

function Btndisabler() {
  nameField.style.maxHeight = "60px";
  tittle.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
}
