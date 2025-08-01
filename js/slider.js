  <script>
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    let interval = setInterval(nextSlide, 5000);

    function nextSlide() {
      index = (index + 1) % dots.length;
      updateSlider();
    }

    function goToSlide(i) {
      index = i;
      updateSlider();
    }

    function updateSlider() {
      slider.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index));
      });
    });

    const container = document.querySelector('.slider-container');
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', () => {
      interval = setInterval(nextSlide, 5000);
    });
</script>