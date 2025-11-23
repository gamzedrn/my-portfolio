// script.js - TAM ÇALIŞAN VERSİYON
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portföy sitesi yüklendi!');
    
    // Navbar toggle functionality
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    console.log("Menu Icon:", menuIcon);
    console.log("Navbar:", navbar);

    if (menuIcon && navbar) {
        menuIcon.onclick = (e) => {
            e.stopPropagation();
            console.log("Menu icon clicked!");
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };

        // Sayfanın herhangi bir yerine tıklandığında menüyü kapat
        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target) && 
                !menuIcon.contains(e.target) && 
                navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                menuIcon.classList.remove("bx-x");
            }
        });

        // Scroll etkisi için menüyü kapat
        window.addEventListener('scroll', () => {
            if (navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                menuIcon.classList.remove("bx-x");
            }
        });
    }

    // Contact Form
    const contactForm = document.getElementById("contact-form");
    const messageDiv = document.getElementById("form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", async function(e) {
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
                        "Accept": "application/json"
                    }
                });

                if (response.ok) {
                    showMessage("✅ Mesajınız gönderildi! En kısa sürede dönüş yapacağım.", "success");
                    contactForm.reset();
                } else {
                    showMessage("❌ Bir hata oluştu. Lütfen tekrar deneyin.", "error");
                }
            } catch (error) {
                showMessage("❌ İnternet bağlantınızı kontrol edin.", "error");
            } finally {
                // Butonu eski haline getir
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });

        function showMessage(text, type) {
            if (messageDiv) {
                messageDiv.textContent = text;
                messageDiv.style.display = "block";
                messageDiv.style.background = type === "success" ? "#d4edda" : "#f8d7da";
                messageDiv.style.color = type === "success" ? "#155724" : "#721c24";
                messageDiv.style.border = type === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb";
                messageDiv.style.padding = "10px";
                messageDiv.style.borderRadius = "5px";
                messageDiv.style.marginTop = "10px";

                // 5 saniye sonra mesajı gizle
                setTimeout(() => {
                    messageDiv.style.display = "none";
                }, 5000);
            }
        }
    }

    // Smooth scroll için
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
