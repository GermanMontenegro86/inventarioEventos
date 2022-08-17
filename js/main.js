let nombres = document.querySelectorAll(".nombres");


class Producto {
    constructor(nombre, precio, stock, vencimiento) {
        this.nombre = nombre;
        this.precio = +(precio);
        this.stock = +(stock);
        this.vencimiento = vencimiento;

    }

}


const productos = []
let nombre = "";
let precio = parseFloat("");
let stock = parseInt("");
let vencimiento = "";

const guardar = document.getElementById("Guardar");
guardar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;

    document.querySelector(".Producto").innerHTML += `<li>${nombre} </li>`;

    const precio = document.getElementById("precio").value;
    document.querySelector(".Precio").innerHTML += `<li>${precio} </li>`;

    const stock = document.getElementById("stock").value;
    document.querySelector(".Stock").innerHTML += `<li>${stock} </li>`;

    const vencimiento = document.getElementById("vto").value;
    document.querySelector(".Vencimiento").innerHTML += `<li>${vencimiento} </li>`;

    const nuevoProducto = new Producto(nombre, precio, stock, vencimiento);
    productos.push(nuevoProducto);

    console.log(productos);


});

const verProducto=document.getElementById("buscar");
verProducto.addEventListener("click",()=>{
    let buscarProducto=document.getElementById("pro").value;
    buscarProducto=productos.find((el)=>el.nombre == buscarProducto);
    console.log(buscarProducto);
})


// const buscarProducto = document.getElementById("Buscar");
// buscarProducto.addEventListener("click", () => {
//     buscarPorNombre=document.getElementById("nombre").value;
//     buscarPorNombre = productos.find((el) => el.nombre === buscarPorNombre);
//     console.log(buscarPorNombre);

// });


const cantidadStock = document.getElementById("cantidad");
cantidadStock.addEventListener("click", () => {
    let buscarStock = document.getElementById("numero").value;
    buscarStock = productos.filter((el) => el.stock >= buscarStock);
    console.log(buscarStock);

});


const ver = document.getElementById("imprimir");
ver.addEventListener("click", () => {
    productos.forEach(element => window.print(element));

});






// for (Producto of productos) {
//     Producto.mostrarProducto();
//     // Producto.mostrarPrecio();
//     // Producto.mostrarStock();
//     // Producto.mostrarVencimiento();

// }

// busacar los productos

// function buscarProducto() {

//     let buscarPorNombre = prompt("buscar nombre");
//     buscarPorNombre = productos.find((el) => el.nombre === buscarPorNombre);
//     console.log(buscarPorNombre);
// }

//   buscar el producto con mator stock

// function buscarStock() {

//     let buscarStock = +prompt("Escribir cantidad de stock");
// buscarStock = buscarStock = productos.filter((el) => el.stock > buscarStock);
// console.log(buscarStock);

// }

// //   imprimir todo los productos

// function ImprimirTodo() {
//     productos.forEach(element => console.log(element));
// }