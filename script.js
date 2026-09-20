document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle (Dark/Light Mode)
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = themeToggleBtn.querySelector(".icon");
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem("theme") || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        themeIcon.textContent = theme === "light" ? "🌙" : "☀️";
    }

    // 2. Active Sidebar Link Highlighting on Scroll
    const sections = document.querySelectorAll(".doc-section");
    const navLinks = document.querySelectorAll(".toc-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});
