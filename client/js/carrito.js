//const { json } = require("express");

let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);
//console.log(load());
let compras = [];

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    let renglon = {
    "producto": producto,
    "precio": precio
    }
    compras.push(renglon);
    mostrarTablaCompras();
    }

    function sumar() {
        console.log("Funcion Sumar");
        let total = 0;
        for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
        }
        let max = compras[0].precio;
        for (let r of compras) {
        if(max < r.precio)
        max = r.precio;
        }
        document.querySelector("#total").innerHTML =
        "<p>Total: $" + total + "</p>"+
        "<p>Maximo: $" + max + "</p>"
        }

function mostrarTablaCompras() {
    html = "";
    for (let i = 0; i < compras.length; i++) {
        html += `
               <tr>
                   <td>${compras[i].producto_nombre}</td>
                   <td>${compras[i].precio}</td>
                   </tr>
           `;
    }
    document.querySelector("#tblCompras").innerHTML = html;
   }

   async function load() {
        let container = document.querySelector("#use-ajax");
        container.innerHTML = "<h1>Loading...</h1>";
             try {
                let response = await fetch('/productos');
                if (response.ok) {
                let t = await response.json();
                compras=t;
                mostrarTablaCompras();
                container.innerHTML = "";
                //console.log(json);
    }
            else
         container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
            catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
         };
    }
    load();
