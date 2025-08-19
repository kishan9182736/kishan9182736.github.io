document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('show');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Terminal animation
    const terminalLines = [
        'git clone https://github.com/rajkironkishan/portfolio.git',
        'cd portfolio',
        'npm install',
        'npm start',
        'echo "Welcome to my portfolio!"'
    ];
    
    const terminalBody = document.querySelector('.terminal-body');
    let currentLine = 0;
    
    function typeTerminalLines() {
        if (currentLine < terminalLines.length) {
            const line = terminalLines[currentLine];
            const terminalLine = document.createElement('div');
            terminalLine.className = 'terminal-line';
            
            const promptSpan = document.createElement('span');
            promptSpan.className = 'prompt';
            promptSpan.textContent = '$';
            
            terminalLine.appendChild(promptSpan);
            terminalLine.appendChild(document.createTextNode(' ' + line));
            
            terminalBody.insertBefore(terminalLine, terminalBody.lastElementChild);
            
            currentLine++;
            setTimeout(typeTerminalLines, 1000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeTerminalLines, 2000);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});