// Tangkap tombol
const backToTopBtn = document.getElementById("backToTop");

// Tampilkan tombol jika user scroll ke bawah 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Ketika tombol diklik, scroll ke atas dengan animasi halus
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== Smooth Scroll untuk navigasi =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

