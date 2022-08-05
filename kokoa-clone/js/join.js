const createForm = document.querySelector(".createForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const passConfirmH3 = document.querySelector(".passConfirm");

const HIDDEN_CLASSNAME = "hidden";
let samePass = false;

const validatePassword = () => {
  samePass = false;
  // 비번다름
  if (password.value != confirmPassword.value) {
    //confirm_password.setCustomValidity("Passwords Don't Match");
    passConfirmH3.classList.remove(HIDDEN_CLASSNAME);
  } else {
    // 비번같음
    //confirm_password.setCustomValidity("");
    passConfirmH3.classList.add(HIDDEN_CLASSNAME);
    samePass = true;
  }
};

const makeAccount = (event) => {
  // 아이디 중복체크
  if (idNotInLocal(username.value)) {
    if (!samePass) {
      //비번다름
      event.preventDefault();
      confirmPassword.focus();
    } else {
      localStorage.setItem(username.value, password.value);
    }
  } else {
    event.preventDefault();
    alert("이미 존재하는 아이디입니다.");
    username.focus();
  }
};

const idNotInLocal = (id) => {
  if (localStorage.getItem(id) == null) {
    return true;
  } else return false;
};

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
createForm.addEventListener("submit", makeAccount);

// 눈알> 패스워드 보이게
