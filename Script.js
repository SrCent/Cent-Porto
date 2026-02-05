// ========================================
// CYBERPUNK PORTFOLIO - JAVASCRIPT
// Interactive Animations & Effects
// ========================================

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initHUDStats();
    initSkillBars();
    initSystemTime();
    initScrollAnimations();
    initTypewriterEffect();
});

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== HUD STATS COUNTER ANIMATION ==========
function initHUDStats() {
    const statValues = document.querySelectorAll('.stat-value[data-value]');
    const statBars = document.querySelectorAll('.stat-bar-fill');
    
    // Animate counters
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-value'));
        animateCounter(stat, 0, target, 2000);
    });
    
    // Animate bars
    setTimeout(() => {
        statBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 500);
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========== SKILL BARS ANIMATION ==========
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level-bar');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                
                setTimeout(() => {
                    bar.style.width = level + '%';
                }, 200);
                
                observer.unobserve(bar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ========== SYSTEM TIME ==========
function initSystemTime() {
    const timeElement = document.getElementById('system-time');
    
    if (!timeElement) return;
    
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .skill-card, .stat-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ========== TYPEWRITER EFFECT ==========
function initTypewriterEffect() {
    const typewriterElement = document.querySelector('.typewriter');
    
    if (!typewriterElement) return;
    
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 500);
}

// ========== GLITCH EFFECT FOR TEXT ==========
// Add data-text attribute to elements with cyber-glitch class
document.addEventListener('DOMContentLoaded', () => {
    const glitchElements = document.querySelectorAll('.cyber-glitch');
    glitchElements.forEach(el => {
        if (!el.hasAttribute('data-text')) {
            el.setAttribute('data-text', el.textContent);
        }
    });
});

// ========== NAVBAR BACKGROUND ON SCROLL ==========
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.98)';
        nav.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.1)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========== CURSOR TRAIL EFFECT (OPTIONAL) ==========
// Uncomment if you want a neon cursor trail effect
/*
const cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);
    
    cursorTrail.push(trail);
    
    if (cursorTrail.length > trailLength) {
        const oldTrail = cursorTrail.shift();
        oldTrail.remove();
    }
    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => trail.remove(), 300);
    }, 100);
});
*/

// ========== KONAMI CODE EASTER EGG ==========
// Easter egg: Type the Konami code for a special effect
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateMatrixMode();
    }
});

function activateMatrixMode() {
    // Add extreme glitch effect
    document.body.style.animation = 'matrix-glitch 0.3s infinite';
    
    // Show console message
    console.log('%c SYSTEM_HACKED.EXE ', 'background: #00ff88; color: #0a0a0f; font-size: 20px; font-family: monospace; padding: 10px;');
    console.log('%c > ACCESS_GRANTED', 'color: #00ff88; font-size: 16px; font-family: monospace;');
    console.log('%c > WELCOME_TO_THE_MATRIX', 'color: #ff00ff; font-size: 16px; font-family: monospace;');
    
    // Remove effect after 3 seconds
    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}

// ========== GLITCH BUTTON EFFECT ==========
document.querySelectorAll('.cyber-glitch-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.animation = 'glitch-btn 0.3s ease-in-out';
    });
    
    btn.addEventListener('animationend', () => {
        btn.style.animation = '';
    });
});

// ========== PROJECT CARD CLICK HANDLERS ==========
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent default if you want to handle project details differently
        // e.preventDefault();
        // You can add modal logic here or redirect to project pages
    });
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy operations
const throttledScroll = throttle(() => {
    // Add any scroll-based logic here
}, 100);

window.addEventListener('scroll', throttledScroll);

// ========== ACCESSIBILITY ==========
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close any modals (if you add them later)
    if (e.key === 'Escape') {
        // Close modal logic
    }
    
    // Tab key navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ========== ANIMATION STYLES (Dynamic CSS injection) ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch-btn {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(2px, -2px); }
        60% { transform: translate(-2px, -2px); }
        80% { transform: translate(2px, 2px); }
    }
    
    @keyframes matrix-glitch {
        0%, 100% { 
            filter: hue-rotate(0deg); 
            transform: translate(0);
        }
        25% { 
            filter: hue-rotate(90deg); 
            transform: translate(-5px, 0);
        }
        50% { 
            filter: hue-rotate(180deg); 
            transform: translate(5px, 0);
        }
        75% { 
            filter: hue-rotate(270deg); 
            transform: translate(0, -5px);
        }
    }
    
    .cursor-trail {
        position: fixed;
        width: 5px;
        height: 5px;
        background: var(--accent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        box-shadow: 0 0 10px var(--accent);
        transition: opacity 0.3s ease-out;
    }
    
    .keyboard-nav *:focus {
        outline: 2px solid var(--accent) !important;
        outline-offset: 4px !important;
    }
`;
document.head.appendChild(style);

// ========== CONSOLE GREETING ==========
console.log('%c CENT.DEV PORTFOLIO ', 'background: #00ff88; color: #0a0a0f; font-size: 24px; font-family: "Orbitron", monospace; padding: 15px; font-weight: bold;');
console.log('%c > SYSTEM_INITIALIZED ', 'color: #00ff88; font-size: 14px; font-family: monospace; font-weight: bold;');
console.log('%c > Welcome to the Cyberpunk Portfolio ', 'color: #00d4ff; font-size: 12px; font-family: monospace;');
console.log('%c > Built with HTML, CSS, and Vanilla JavaScript ', 'color: #ff00ff; font-size: 12px; font-family: monospace;');
console.log('%c > Try the Konami Code for a surprise! ', 'color: #6b7280; font-size: 11px; font-family: monospace; font-style: italic;');
console.log('%c > ↑ ↑ ↓ ↓ ← → ← → B A ', 'color: #6b7280; font-size: 11px; font-family: monospace;');