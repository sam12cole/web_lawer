// Animaciones de aparición con distintos movimientos

// Desde abajo hacia arriba
ScrollReveal().reveal('.scroll-abajo-arriba', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 100,
  reset: false
});

// Desde arriba hacia abajo
ScrollReveal().reveal('.scroll-arriba-abajo', {
  origin: 'top',
  distance: '40px',
  duration: 800,
  delay: 100,
  reset: false
});

// Desde la izquierda hacia la derecha
ScrollReveal().reveal('.scroll-izq-der', {
  origin: 'left',
  distance: '60px',
  duration: 900,
  delay: 150,
  reset: false
});

// Desde la derecha hacia la izquierda
ScrollReveal().reveal('.scroll-der-izq', {
  origin: 'right',
  distance: '60px',
  duration: 900,
  delay: 150,
  reset: false
});

// Escalado suave (como zoom in)
ScrollReveal().reveal('.scroll-zoom', {
  scale: 0.8,
  duration: 1000,
  delay: 200,
  reset: false
});
