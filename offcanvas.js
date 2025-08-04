document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 12; i++) {
    const abrirBtn = document.getElementById(`abrirOffCanvas${i}`);
    const offCanvas = document.getElementById(`offCanvas${i}`);
    const cerrarBtn = document.getElementById(`cerrarOffCanvas${i}`);
    const overlay = document.getElementById(`overlay${i}`);

    if (abrirBtn && offCanvas && cerrarBtn && overlay) {
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
    }
  }
});
