
alert("Salut Salut")

console.log(document)
const button = document.querySelector("#night");
const body = document.querySelector("body");
const div1 = document.getElementById("div1");


button.addEventListener("click", function() {
    if (body.classList.contains("green")) {
        body.classList.remove("green");
    }
    else {
        body.classList.add("green");
    }
    body.style.backgroundColor = "grey"

}
)

div1.textContent = "Salut Salut"
div1.innerHTML = "<i>Salut Salut</i>"