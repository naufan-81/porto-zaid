document.addEventListener("DOMContentLoaded", () => {
  // --- 1. DATA PROJECT (Portofolio Anda) ---
  const portfolioData = [
    // PROYEK JAGOAN (Web App / Pizza)
    {
      title: "Pizza Delivery System",
      category: "Web App (Full Stack)",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/naufan-81/porto-zaid", // Link GitHub Anda
    },
    {
      title: "Inventory Dashboard",
      category: "Web App (System)",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },

    // PROYEK LANDING PAGE (Desain)
    {
      title: "Coffee Shop Promo",
      category: "Landing Page",
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Travel Agency Web",
      category: "Landing Page",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Fashion Store",
      category: "E-Commerce UI",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Gym Membership",
      category: "Landing Page",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  // --- 2. RENDER KE LAYAR ---
  const container = document.getElementById("portfolio-container");
  if (container) {
    container.innerHTML = "";
    portfolioData.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("portfolio-item");

      // Pembeda Warna: Web App (Merah), Landing Page (Kuning Emas)
      let categoryColor = project.category.includes("Web App")
        ? "#ff004f"
        : "#ffb700";

      card.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <div class="portfolio-info">
                    <span style="color: ${categoryColor}; font-size: 11px; font-weight:bold; letter-spacing:1px;">${project.category.toUpperCase()}</span>
                    <h3 style="margin-top:5px; font-size:1.2rem;">${project.title}</h3>
                    <a href="${project.link}" target="_blank" style="color: #fff; text-decoration: none; font-size: 13px; border: 1px solid #555; padding: 5px 12px; border-radius: 4px; margin-top:10px; display:inline-block; background: rgba(0,0,0,0.5);">View Code &rarr;</a>
                </div>
            `;
      container.appendChild(card);
    });
  }

  // --- 3. FITUR MENU HP ---
  const menuToggle = document.getElementById("mobile-menu");
  const sidebar = document.querySelector(".sidebar");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
