document.addEventListener("DOMContentLoaded", () => {
  // Toggle Menu Mobile
  const menuToggle = document.getElementById("mobile-menu");
  const sidebar = document.querySelector(".sidebar");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (sidebar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Fetch Portfolio Data
  fetch("/api/portfolio")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("portfolio-container");
      container.innerHTML = ""; // Bersihkan container

      data.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("portfolio-item");

        card.innerHTML = `
                    <img src="${project.img}" alt="${project.title}">
                    <div class="portfolio-info">
                        <span style="color: #ff004f; font-size: 11px; font-weight:bold; letter-spacing:1px;">${project.category.toUpperCase()}</span>
                        <h3 style="margin-top:5px; font-size:1.2rem;">${project.title}</h3>
                        <a href="#" style="color: #ccc; text-decoration: none; font-size: 13px;">View Code &rarr;</a>
                    </div>
                `;
        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Error fetching data:", err));

  // Form Submit
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          alert(result.message);
          form.reset();
        })
        .catch(() => alert("Gagal mengirim pesan."));
    });
  }
});
