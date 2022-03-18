const form = document.querySelector("#loginForm");
const id = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const logoff = document.querySelector("#logoff");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLogin(e) {
  e.preventDefault();

  console.log(id.value);
  form.classList.add(HIDDEN_CLASSNAME);

  paintGreetings(id.value);
  localStorage.setItem(USERNAME_KEY, id.value);
}

function paintGreetings(username) {
  greeting.innerText = `Hey ${username}, Hi`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoff.classList.remove(HIDDEN_CLASSNAME);
}

form.addEventListener("submit", handleLogin);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  form.classList.remove(HIDDEN_CLASSNAME);
  form.addEventListener("submit", handleLogin);
} else {
  paintGreetings(savedUsername);
}

logoff.addEventListener("click", () => {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
});
