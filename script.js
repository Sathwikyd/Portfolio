// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// Observe skill cards for staggered animation
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.8s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Observe project cards for staggered animation
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.8s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Hover effect for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(1.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(0)';
    });
});

let modeBtn=document.querySelector("#mode");
let currentMode="light";
let body=document.querySelector("body");
let mode=()=>
    {
        if(currentMode==="light")
        {
            currentMode="dark";
            body.classList.add("dark");
            body.classList.remove("light");
            
        }
        else
        {
            currentMode="light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
        console.log(currentMode);
    }
modeBtn.addEventListener("click",mode);
