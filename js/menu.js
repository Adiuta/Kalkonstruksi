// Toggle class active
const navbarnav = document.querySelector(".navbar-nav");

// Ketika side di klik
document.querySelector("#sidebar").onclick = () => {
  navbarnav.classList.toggle("active");
};

//klik diluar sidebar untuk keluar
const sidebar = document.querySelector("#sidebar");

document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// Ambil elemen tombol Dark Mode pada footer
const darkModeToggle = document.querySelector('.dark-light');

// Fungsi untuk mengaktifkan tema gelap
function enableDarkMode() {
  document.body.classList.add('darkmode');
  // Ganti ikon pada footer menjadi ikon "moon"
  darkModeToggle.querySelector('.icon-sun').style.display = 'none';
  darkModeToggle.querySelector('.icon-moon').style.display = 'block';
  // Simpan preferensi pengguna di localStorage
  localStorage.setItem('darkMode', 'enabled');
}

// Fungsi untuk menonaktifkan tema gelap
function disableDarkMode() {
  document.body.classList.remove('darkmode');
  // Ganti ikon pada footer menjadi ikon "sun"
  darkModeToggle.querySelector('.icon-moon').style.display = 'none';
  darkModeToggle.querySelector('.icon-sun').style.display = 'block';
  // Simpan preferensi pengguna di localStorage
  localStorage.setItem('darkMode', 'disabled');
}

// Fungsi untuk mengubah tema saat tombol pada footer ditekan
function toggleDarkModeHandler() {
  if (document.body.classList.contains('darkmode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Tambahkan event listener untuk tombol Dark Mode pada footer
darkModeToggle.addEventListener('click', toggleDarkModeHandler);

// Periksa preferensi pengguna saat halaman dimuat
const userDarkModePreference = localStorage.getItem('darkMode');

if (userDarkModePreference === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}
