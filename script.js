// Navbar toggle functionality
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

console.log("Menu Icon:", menuIcon); // Kontrol için
console.log("Navbar:", navbar); // Kontrol için

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    console.log("Menu icon clicked!"); // Kontrol için
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Sayfanın herhangi bir yerine tıklandığında menüyü kapat
  document.addEventListener("click", (e) => {
    if (
      !navbar.contains(e.target) &&
      !menuIcon.contains(e.target) &&
      navbar.classList.contains("active")
    ) {
      navbar.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    }
  });

  // Scroll etkisi için menüyü kapat
  window.onscroll = () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    }
  };
}

// Contact Form - Basit Versiyon
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const messageDiv = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector(".send");
      const originalText = submitBtn.textContent;

      // Butonu değiştir
      submitBtn.textContent = "Gönderiliyor...";
      submitBtn.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          // Başarılı
          showMessage(
            "✅ Mesajınız gönderildi! En kısa sürede dönüş yapacağım.",
            "success"
          );
          contactForm.reset();
        } else {
          // Hata
          showMessage("❌ Bir hata oluştu. Lütfen tekrar deneyin.", "error");
        }
      } catch (error) {
        showMessage("❌ İnternet bağlantını kontrol et.", "error");
      } finally {
        // Butonu eski haline getir
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function showMessage(text, type) {
    if (messageDiv) {
      messageDiv.textContent = text;
      messageDiv.style.display = "block";
      messageDiv.style.background = type === "success" ? "#d4edda" : "#f8d7da";
      messageDiv.style.color = type === "success" ? "#155724" : "#721c24";
      messageDiv.style.border =
        type === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb";

      // 5 saniye sonra mesajı gizle
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 5000);
    }
  }
});
