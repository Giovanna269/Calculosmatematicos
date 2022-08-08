// cuadrado

let boton1 = document.getElementById("Btndareac"); 

boton1.addEventListener("click", areac);

function areac(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("basec").value);
    varnumero2 = Number(document.getElementById("alturac").value);

    varresultado = varnumero1 * varnumero2;

    let imprimir = document.getElementById("imprimirresultadoarea");

    imprimir.innerText = varresultado;

}

// rectangulo

let boton2 = document.getElementById("Btndarear"); 

boton2.addEventListener("click", arear);

function arear(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("baser").value);
    varnumero2 = Number(document.getElementById("alturar").value);

    varresultado = (varnumero1 * varnumero2)/2;

    let imprimir = document.getElementById("imprimirresultadoarear");

    imprimir.innerText = varresultado;

}

// descuento

const botonprecio = document.getElementById("Btndes").addEventListener("click", descuento);



function descuento(){

    const precioarticulo= Number (document.getElementById("precio").value);

    const divres = document.getElementById("ResDescuento");

   

    if (precioarticulo >1000){

        descuento = precioarticulo * .30;

        precio = precioarticulo -descuento;



        divres.innerText = precio;

    } else {

        descuento = precioarticulo * .10;

        precio = precioarticulo -descuento;



        divres.innerText = precio;

    }


}

// Numeros descendentes 

let botonas=document.getElementById("Botonnumeros");
botonas.addEventListener("click",descsenso);

function descsenso(){
    const imprimirnumeros = document.getElementById("resultadonum");
    imprimirnumeros.innerHTML = " ";

    for(let x=100; x>=0; x=x-1){

    const lista = document.createElement("li");
    lista.setAttribute("class", "list-group-item mt-1");
    lista.innerText = x;
    imprimirnumeros.appendChild(lista);
    }
}

// par o impar 
let botonpar=document.getElementById("Botonpar");
botonpar.addEventListener("click",par);

function par(){
    let num=Number(document.getElementById("numeros").value);
    if(num%2==0){
        let mostrar=document.getElementById("resultadopar");
       mostrar.innerText=("El número "+num+" es par");
        
    
    }else{
        let mostrar=document.getElementById("resultadopar");
       mostrar.innerText=("El número "+num+" es impar");
    }
}


