// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);

});

// WHATSAPP

function comprarProducto(producto){

  const numero = "573418023239";

  const mensaje =
  `Hola, quiero comprar el producto: ${producto}`;

  const url =
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");

}