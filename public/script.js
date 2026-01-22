document.addEventListener("DOMContentLoaded", () => {
  // --- 1. DATA PROJECT (SUDAH DISAMBUNGKAN KE LINK ASLI) ---
  const portfolioData = [
    // === WEB APPS (Sistem Fungsional) ===
    {
      title: "Pizza Delivery System",
      category: "Web App (Order System)",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      // Link ke Repo Utama (Portofolio ini)
      link: "https://github.com/naufan-81/porto-zaid",
      btnText: "View Code",
    },
    {
      title: "Inventory Dashboard",
      category: "Web App (Management)",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      // Link Inventory App
      link: "https://github.com/naufan-81/inventori.app",
      btnText: "View Code",
    },
    {
      title: "Crypto Trading App",
      category: "Web App (Fintech)",
      img: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
      // Link Crypto App
      link: "https://github.com/naufan-81/crypto-app",
      btnText: "View Code",
    },

    // === LANDING PAGES (Demo Live Website) ===
    {
      title: "Coffee Shop Promo",
      category: "Landing Page",
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
      link: " https://naufan-81.github.io/coffe-shop/",
      btnText: "View Demo",
      target: "_blank",
    },
    {
      title: "Travel Agency Web",
      category: "Landing Page",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      // Link Demo Travel
      link: "https://naufan-81.github.io/Travel-Agency/",
      btnText: "View Demo",
    },
    {
      title: "Fashion Store",
      category: "Landing Page",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      // Link Demo Fashion
      link: "https://naufan-81.github.io/Fashion-Store/",
      btnText: "View Demo",
    },
  ];

  // --- 2. RENDER (TAMPILKAN) KE HTML ---
  const container = document.getElementById("portfolio-container");
  if (container) {
    container.innerHTML = "";
    portfolioData.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("portfolio-item");

      // Logika Warna Label: Web App (Merah), Landing Page (Kuning Emas)
      let categoryColor = project.category.includes("Web App")
        ? "#ff004f"
        : "#ffb700";

      // Menggunakan project.link dan project.btnText yang baru
      card.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <div class="portfolio-info">
                    <span style="color: ${categoryColor}; font-size: 11px; font-weight:bold; letter-spacing:1px;">${project.category.toUpperCase()}</span>
                    <h3 style="margin-top:5px; font-size:1.2rem;">${project.title}</h3>
                    <a href="${project.link}" target="_blank" style="color: #fff; text-decoration: none; font-size: 13px; border: 1px solid #555; padding: 5px 12px; border-radius: 4px; margin-top:10px; display:inline-block; background: rgba(0,0,0,0.5);">
                        ${project.btnText} &rarr;
                    </a>
                </div>
            `;
      container.appendChild(card);
    });
  }

  // --- 3. FITUR MENU HP ---
  const menuToggle = document.getElementById("mobile-menu");
  const sidebar = document.querySelector(".sidebar");

  // Tutup menu kalau layar diklik di luar sidebar
  document.addEventListener("click", (e) => {
    if (
      menuToggle &&
      sidebar &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      sidebar.classList.remove("active");
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
