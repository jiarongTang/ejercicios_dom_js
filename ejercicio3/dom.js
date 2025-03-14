let body = document.querySelector("body");

//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul1 = document.createElement("ul");
let li;
for(let i = 0; i < countries.length; i++){
    li = document.createElement("li");
    li.innerText = countries[i];
    ul1.appendChild(li);
}
body.appendChild(ul1);

// 1.2
let eliminar = document.querySelector(".fn-remove-me");
eliminar.remove();

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const add = document.querySelector('[data-function="printHere"]');
ul1 = document.createElement("ul");
for(let i = 0; i< cars.length; i++){
    li = document.createElement("li");
    li.innerText = cars[i];
    ul1.appendChild(li);
}
add.appendChild(ul1);

//1.4
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let div;
let interior;
let element;

for(const element of countries1){
    div = document.createElement("div");
    div.className = "titulo_img";
    for(const key in element){
        if(key == 'title'){
            interior = document.createElement("h4");
            interior.innerText = element[key];
        }else{
            interior = document.createElement("img");
            interior.src = element[key];
            interior.alt = "Descripcion img";
        }
        div.append(interior);
    }
    body.appendChild(div);
}

//1.5
let button = document.createElement("button");
button.innerText = "Eliminar";
button.type ="button";
body.appendChild(button);
let boton = document.querySelector("button");

boton.onclick = function(){    
    let divs = document.getElementsByClassName("titulo_img");
    divs[divs.length -1].remove();
    if(divs.length == 0){
        boton.style.display = "none";
    }
}

//1.6

let button1;
let cuenta;
let div6 = document.querySelectorAll(".titulo_img");
for(let i = 0; i < div6.length; i ++){
    button1 = document.createElement("button");
    button1.innerText = "Eliminar Actual";
    button1.type ="button";
    button1.addEventListener('click', function(){
        div6[i].remove();
    })
    div6[i].appendChild(button1);
}