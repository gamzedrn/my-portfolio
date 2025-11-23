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
    }
});

// Contact Form kodu aynı kalabilir...
