const errorEl = document.getElementById("errorr")
const buttonEl = document.getElementById("button")

buttonEl.addEventListener("click", () => {
    errorEl.innerHTML = "<div id='error'><p>Password Required</P></div>"
})