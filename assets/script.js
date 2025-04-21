


window.addEventListener("load", () => {
    try {
        const loading = document.getElementById("loading");
        if (loading) {
            loading.style.display = "none";
            console.log("Loading screen hidden");
        } else {
            console.error("Loading element not found");
        }
    } catch (e) {
        console.error("Error hiding loading screen:", e);
    }
});
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelector('.copy-button').addEventListener('click', function() {
    const email = document.querySelector('.contact-card p').textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

// Scroll Animation
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add("visible");
        }
    });
});
