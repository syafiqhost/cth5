// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Slideshow Logic
let slideIndex = 0;
let slides = document.querySelectorAll(".custom-slide");
let dots = document.querySelectorAll(".custom-dot");

// Menampilkan slide berdasarkan index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none'; // Sembunyikan semua slide
        dots[i].classList.remove('active'); // Hapus class 'active' dari semua dots
    });

    // Menampilkan slide aktif
    slides[index].style.display = 'block';
    dots[index].classList.add('active'); // Tandai dot yang aktif
}

// Fungsi untuk slide berikutnya
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Fungsi untuk melompat ke slide tertentu
function currentSlide(index) {
    slideIndex = index - 1; // Karena index dimulai dari 0
    showSlide(slideIndex);
}

// Inisialisasi slideshow dengan interval 3 detik
function initSlideshow() {
    showSlide(slideIndex);
    setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
}

// Menambahkan event listener untuk dots navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => currentSlide(i + 1)); // Menyinkronkan klik pada dot dengan slide
});

// Menjalankan inisialisasi slideshow
document.addEventListener("DOMContentLoaded", initSlideshow);

// Tab Toggle Logic
function toggleTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
        t.classList.remove('active');
    });

    document.querySelector(`.tab[data-tab="${tab}"]`).classList.add('active');
}

// Search Functionality
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.house-card');

    let found = false;

    cards.forEach(card => {
        const title = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : "";

        card.classList.remove('highlight');

        if (title.includes(searchValue)) {
            card.classList.add('highlight');
            found = true;
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center'
            });
        }
    });

    if (!found) {
        alert('Tidak ada hasil yang ditemukan!');
    }
});

// Back to Top Button Logic
const backToTopButton = document.getElementById('back-to-top');

// Tampilkan tombol saat user scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Tampilkan jika sudah scroll 300px ke bawah
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Tambahkan event listener untuk klik tombol
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Scroll ke paling atas
        behavior: 'smooth' // Efek scroll smooth
    });
});