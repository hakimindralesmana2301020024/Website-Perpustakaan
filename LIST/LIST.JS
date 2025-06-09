
    const visibleItems = 5;
    const itemWidth = 195; // Lebar item + margin

    function scrollCarousel(button, direction) {
      const container = button.closest('.carousel-container');
      const track = container.querySelector('.carousel-track');
      const currentTransform = getComputedStyle(track).transform;
      const matrixValues = currentTransform !== 'none' ? currentTransform.split(',') : null;
      const currentX = matrixValues ? parseFloat(matrixValues[4]) : 0;
      const shiftAmount = itemWidth * visibleItems * direction;

      track.style.transform = `translateX(${currentX - shiftAmount}px)`;
    }


    function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  }

  // Arahkan ke homepage.html saat form disubmit
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // mencegah form refresh
    // Validasi sederhana (opsional)
    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('#password').value;

    if (email && password) {
      window.location.href = 'homepage.html'; // arahkan ke homepage
    } else {
      alert('Mohon isi email dan kata sandi.');
    }
  });