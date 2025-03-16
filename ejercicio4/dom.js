//1.1
const btnToClick = document.getElementById("btnToClick");
const click = document.querySelector('.click');
btnToClick.addEventListener('click',function (){
    let valor = click.value;
    console.log(valor);
})

//1.2
const focus = document.querySelector('.focus');
focus.addEventListener('focus', ()=>{
    console.log(focus.value);
})

//1.3
const input = document.querySelector('.value');
input.addEventListener('input',()=>{
    console.log(input.value);
})