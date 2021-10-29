document.addEventListener('DOMContentLoaded', () =>{
    let cantidad = localStorage.getItem('cantidadDeComputadores')

    valorTotal = cantidad * 820000;
    
    if (valorTotal>=1400000 && valorTotal<=3280000){
        document.getElementById("total").innerHTML = valorTotal;
        document.getElementById("descuento").innerHTML = valorTotal * 0.15;
        document.getElementById("valorNeto").innerHTML = valorTotal * 0.85;
        document.getElementById('mensaje').innerHTML = "Su descuento fue del 15%"
    }
    if (valorTotal>3280000 && valorTotal<=6560000){
        document.getElementById("total").innerHTML = valorTotal;
        document.getElementById("descuento").innerHTML = valorTotal * 0.25;
        document.getElementById("valorNeto").innerHTML = valorTotal * 0.75;
        document.getElementById('mensaje').innerHTML = "Su descuento fue del 25%"
    }
    if (valorTotal>6560000 && valorTotal<=9840000){
        document.getElementById("total").innerHTML = valorTotal;
        document.getElementById("descuento").innerHTML = valorTotal * 0.35;
        document.getElementById("valorNeto").innerHTML = valorTotal * 0.65;
        document.getElementById('mensaje').innerHTML = "Su descuento fue del 35%"
    }
    if(valorTotal>9840000){
        document.getElementById("total").innerHTML = valorTotal;
        document.getElementById("descuento").innerHTML = 0;
        document.getElementById("valorNeto").innerHTML = valorTotal;
        document.getElementById('mensaje').innerHTML = "Su producto no tiene descuento"
    }

})