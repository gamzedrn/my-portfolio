// Navbar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    console.log('Menu Icon:', menuIcon);
    console.log('Navbar:', navbar);
    
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Menu icon clicked!');
            
            // Navbar'ı aç/kapa
            navbar.classList.toggle('active');
            
            // Menü ikonunu değiştir
            if (navbar.classList.contains('active')) {
                this.classList.add('bx-x');
                this.classList.remove('bx-menu-alt-right');
            } else {
                this.classList.remove('bx-x');
                this.classList.add('bx-menu-alt-right');
            }
        });
        
        // Sayfanın herhangi bir yerine tıklandığında menüyü kapat
        document.addEventListener('click', function(e) {
            if (navbar.classList.contains('active') && 
                !navbar.contains(e.target) && 
                e.target.id !== 'menu-icon') {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu-alt-right');
            }
        });
        
        // Ekran yeniden boyutlandırıldığında menüyü kapat
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu-alt-right');
            }
        });
        
        // Scroll etkisi için menüyü kapat
        window.addEventListener('scroll', function() {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu-alt-right');
            }
        });
    }
});

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Mobile menüyü kapat
                    const navbar = document.querySelector('.navbar');
                    const menuIcon = document.getElementById('menu-icon');
                    if (navbar && navbar.classList.contains('active')) {
                        navbar.classList.remove('active');
                        menuIcon.classList.remove('bx-x');
                        menuIcon.classList.add('bx-menu-alt-right');
                    }
                }
            }
        });
    });
});

// Contact Form - Basit Versiyon
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.send');
            const originalText = submitBtn.textContent;

            // Butonu değiştir
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        Accept: 'application/json',
                    },
                });

                if (response.ok) {
                    // Başarılı
                    showMessage(
                        '✅ Mesajınız gönderildi! En kısa sürede dönüş yapacağım.',
                        'success'
                    );
                    contactForm.reset();
                } else {
                    // Hata
                    showMessage('❌ Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
                }
            } catch (error) {
                showMessage('❌ İnternet bağlantını kontrol et.', 'error');
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
            messageDiv.style.display = 'block';
            messageDiv.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
            messageDiv.style.color = type === 'success' ? '#155724' : '#721c24';
            messageDiv.style.border =
                type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb';

            // 5 saniye sonra mesajı gizle
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
});
