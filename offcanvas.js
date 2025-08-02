const abrirBtn = document.getElementById('abrirOffCanvas');
const offCanvas = document.getElementById('offCanvas');
const cerrarBtn = document.getElementById('cerrarOffCanvas');
const overlay = document.getElementById('overlay');

abrirBtn.addEventListener('click', (e) => {
  e.preventDefault();
  offCanvas.classList.add('show');
  overlay.classList.add('show');
});

cerrarBtn.addEventListener('click', () => {
  offCanvas.classList.remove('show');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  offCanvas.classList.remove('show');
  overlay.classList.remove('show');
});
