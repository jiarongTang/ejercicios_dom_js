//1.1
let btnToClick = document.getElementById("btnToClick");
btnToClick.addEventListener("click",() => {
    let valor = document.getElementsByClassName("click").value;
    console.log(valor);
})