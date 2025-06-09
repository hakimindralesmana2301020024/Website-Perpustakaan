function togglePassword() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Hindari reload

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simpan ke localStorage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  // Pindah ke halaman homepage
  window.location.href = "homepage.html";
});
