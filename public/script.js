document.addEventListener("DOMContentLoaded", () => {
  // --- DATA PROYEK (Langsung disini biar gak perlu server) ---
  const portfolioData = [
    {
      title: "SaaS Dashboard",
      category: "Full Stack",
      img: "https://via.placeholder.com/600x400/111/e11d48?text=Dashboard",
    },
    {
      title: "E-Commerce API",
      category: "Backend",
      img: "https://via.placeholder.com/600x400/111/e11d48?text=API+Service",
    },
    {
      title: "Crypto Mobile App",
      category: "React Native",
      img: "https://via.placeholder.com/600x400/111/e11d48?text=Crypto+App",
    },
    {
      title: "Company Profile",
      category: "Frontend",
      img: "https://via.placeholder.com/600x400/111/e11d48?text=Landing+Page",
    },
    {
      title: "AI Image Tool",
      category: "Python / AI",
      img: "https://via.placeholder.com/600x400/111/e11d48?text=AI+Generator",
    },
    {
      title: "Inventory System",
      category: "Web App",
      img: "https://via.placeholder.com/600x400/111/e11d48?text=Inventory",
    },
  ];

  // --- TAMPILKAN KE LAYAR ---
  const container = document.getElementById("portfolio-container");
  if (container) {
    container.innerHTML = "";
    portfolioData.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("portfolio-item");
      card.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <div class="portfolio-info">
                    <span style="color: #ff004f; font-size: 11px; font-weight:bold;">${project.category.toUpperCase()}</span>
                    <h3 style="margin-top:5px; font-size:1.2rem;">${project.title}</h3>
                    <a href="#" style="color: #ccc; font-size: 13px;">View Code &rarr;</a>
                </div>
            `;
      container.appendChild(card);
    });
  }

  // --- TOMBOL MENU HP ---
  const menuToggle = document.getElementById("mobile-menu");
  const sidebar = document.querySelector(".sidebar");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // --- FORM KONTAK (Versi Tanpa Server) ---
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pesan Terkirim! (Ini adalah demo portofolio)");
      form.reset();
    });
  }
});
