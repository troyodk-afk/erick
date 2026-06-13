document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // 1. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        // Toggle mobile icon between menu and close
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close menu when clicking links on mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                mobileToggle.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    // 3. Experience Timeline Tab Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all buttons & panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Set active clicked button
            button.classList.add('active');
            
            // Get panel target and show it
            const company = button.getAttribute('data-company');
            const targetPanel = document.getElementById(`panel-${company}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 4. Skills Interactive Filtering
    const skillFilters = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    skillFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class
            skillFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const category = filter.getAttribute('data-filter');
            
            skillCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'block';
                    // Trigger reflow for animation
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = null;
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    // 6. Git-style Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect info
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const message = document.getElementById('form-msg').value;

            // Simple loading simulation
            formStatus.className = 'form-status';
            formStatus.innerHTML = '<span class="text-muted">troyo@meta-node-42:~$ git add message.txt && git commit -m "sending..."</span>';
            
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Committing... <i data-lucide="loader"></i>';
            lucide.createIcons();

            setTimeout(() => {
                formStatus.innerHTML = '<span class="text-muted">troyo@meta-node-42:~$ git push origin master</span><br><span style="color: #8b5cf6">Enumerating objects: 3, done.</span>';
                
                setTimeout(() => {
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '✔ Message pushed successfully!<br>Erick Troyo will receive your commit shortly.';
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Push Message <i data-lucide="upload-cloud"></i>';
                    lucide.createIcons();
                    
                    // Clear form
                    contactForm.reset();
                }, 1000);
            }, 1200);
        });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }, { passive: true });
});
