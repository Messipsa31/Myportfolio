const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, h1, .section-title').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

const glow = document.querySelector('.bg-glow');
window.addEventListener('mousemove', (e) => {
    // تحريك التوهج بناءً على إحداثيات الماوس
    const x = e.clientX;
    const y = e.clientY;
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, #1a103d 0%, #050505 100%)`;
});

const langBtn = document.getElementById('lang-switcher');

langBtn.addEventListener('click', () => {
    let currentFile = window.location.pathname.split("/").pop() || 'index.html';
    
    if (currentFile === 'index.html') {
        window.location.href = 'index-ar.html';
    } else if (currentFile === 'index-ar.html') {
        window.location.href = 'index-fr.html';
    } else {
        window.location.href = 'index.html';
    }
});