const scriptURL = "";
const form = document.forms["contact-us"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

const btn = document.getElementById("submitb");
function sub() {
  btn.innerHTML = "Submitted";
}
