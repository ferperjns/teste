        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu');
            const menuItems = document.querySelector('.menu-items');

            menuToggle.addEventListener('click', function () {
                menuItems.classList.toggle('active');
            });

            // Close menu on item click (for mobile)
            menuItems.addEventListener('click', function (event) {
                if (event.target.tagName === 'A') {
                    menuItems.classList.remove('active');
                }
            });

            // Close menu on window resize (for mobile)
            window.addEventListener('resize', function () {
                if (window.innerWidth > 768) {
                    menuItems.classList.remove('active');
                }
            });
        });