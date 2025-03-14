let body = document.querySelector("body");

//2.1
let div = document.createElement("div");
let textoDiv = document.createTextNode ("Hola a todos, soy el ejercicio 2.1");
div.appendChild(textoDiv);
body.appendChild(div);

//2.2
let div2 = document.createElement("div");
let p = document.createElement("p");
let textoP = document.createTextNode("El texto que tengo dentro de la p del ejercicio 2.2");
p.appendChild(textoP);
div2.appendChild(p);
body.appendChild(div2);

//2.3
let div3 = document.createElement("div");
for(let i = 0; i < 6; i++){
    let Pnuevo = document.createElement("p");
    let textoPnuevo = document.createTextNode(`El texto de la p ${i + 1}`);
    Pnuevo.appendChild(textoPnuevo);
    div3.appendChild(Pnuevo);
}
body.appendChild(div3);

//2.4
let texto = document.createTextNode("Soy dinamico!");
let p2 = document.createElement("p");
p2.appendChild(texto);
body.appendChild(p2);

//2.5
let h2 = document.querySelector("h2");
h2.innerText = "Wubba Lubba dub dub";

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement("ul");
for(let i = 0; i < apps.length; i++){
    let liNuevo = document.createElement("li");
    let textoLi = document.createTextNode(apps[i]);
    liNuevo.appendChild(textoLi);
    ul.appendChild(liNuevo);
}
body.appendChild(ul);

//2.7
let eliminar = document.querySelectorAll(".fn-remove-me");
for(let i = 0; i < eliminar.length; i++){
    eliminar[i].remove();
}

//2.8
let p8 = document.createElement("p");
p8.innerText = 'Voy en medio!';

let div8 = document.querySelectorAll("div");
console.log(p8);
for(let i = 0; i < div8.length; i++){
    if(div8[i].className == ""){
        div8[i].innerHTML = p8;
    }
}