// Menambahkan interaksi untuk menu hamburger
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Ambil elemen tombol
const scrollToTopButton = document.getElementById('scroll-to-top');

// Fungsi untuk menampilkan tombol saat scroll ke bawah
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.add('show'); // Tampilkan tombol
    } else {
        scrollToTopButton.classList.remove('show'); // Sembunyikan tombol
    }
};

// Fungsi untuk scroll ke atas ketika tombol diklik
scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

