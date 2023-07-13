const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color")


btn.addEventListener("click", function(){
    let hexadecimal = "#";
    for (let i = 0; i < 6; i++) {
        hexadecimal += hex[randomNumber()];
}
    color.innerHTML = hexadecimal;
    document.body.style.backgroundColor = hexadecimal;
    color.style.color = hexadecimal;
})


function randomNumber (){
    return Math.floor(Math.random()*hex.length);
}
