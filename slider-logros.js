const contenedor = document.getElementById('logrosContenedor');
const tarjetas = contenedor.children;
let index = 0;
const total = tarjetas.length;
const mostrar = 2;

function moverSlider() {
  index += mostrar;
  if (index >= total) {
    index = 0;
  }

  const tarjetaAncho = tarjetas[0].offsetWidth + 16; // 16px = gap
  const desplazamiento = index * tarjetaAncho;

  contenedor.style.transform = `translateX(-${desplazamiento}px)`;
}

setInterval(moverSlider, 3000);
