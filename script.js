let vardas =document.getElementById("vardas");
vardas.addEventListener("click", function(){
    vardas.textContent = "Clicked";
})


let pavarde = document.getElementById("pavarde");
pavarde.addEventListener("click", function() {
    pavarde.textContent = "Clicked";
})

let mokykla = document.getElementById("mokykla");
mokykla.addEventListener("click",function(){
    mokykla.textContent = "Clicked";
})

let miestas = document.getElementById("miestas");
miestas.addEventListener("click", function(){
    miestas.textContent = "Clicked";
})

let form = document.querySelector("#registration");
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e.target.elements.vardas.value);
    console.log(e.target.elements.pavarde.value);
    console.log(e.target.elements.mykykla.value);
    console.log(e.target.elements.miestas.value);
})