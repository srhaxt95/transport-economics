document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = themeToggleBtn.querySelector(".icon");
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem("theme") || "light";
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

    // 2. Active Sidebar Link Highlighting
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

    // 3. Render Chart 1: Negative Externalities & Social Cost (กทม.)
    const ctx1 = document.getElementById('externalityChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['0', 'Q* (สังคมต้องการ)', 'Q0 (ดุลยภาพตลาดเสรี)', 'Q_Max'],
            datasets: [
                {
                    label: 'Marginal Social Cost (MSC) = Private + PM2.5/รถติด',
                    data: [20, 50, 80, 110],
                    borderColor: '#ef4444',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Marginal Private Cost (MPC) = ค่าน้ำมัน/ทางด่วน',
                    data: [20, 35, 50, 65],
                    borderColor: '#3b82f6',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Demand (MSB) = ความต้องการใช้รถ',
                    data: [90, 50, 20, 5],
                    borderColor: '#10b981',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'สภาวะรถติดและมลพิษในกรุงเทพฯ (Negative Externality Model)',
                    font: { family: 'Prompt', size: 14 }
                }
            },
            scales: {
                y: {
                    title: { display: true, text: 'ราคา / ต้นทุน (บาท)' }
                },
                x: {
                    title: { display: true, text: 'ปริมาณการใช้รถบนถนน (Q)' }
                }
            }
        }
    });

    // 4. Render Chart 2: Bid-Rent Theory & MRT Impact
    const ctx2 = document.getElementById('bidRentChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['CBD (สีลม/สาทร)', '5 กม.', '10 กม. (มีรถไฟฟ้า)', '15 กม.', '20 กม. (ชานเมือง)'],
            datasets: [
                {
                    label: 'ราคาที่ดินเดิม (ก่อนมีรถไฟฟ้า)',
                    data: [100, 60, 30, 15, 5],
                    borderColor: '#94a3b8',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.3
                },
                {
                    label: 'ราคาที่ดินใหม่ (หลังมีสถานีรถไฟฟ้า)',
                    data: [100, 65, 80, 25, 10],
                    borderColor: '#2563eb',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Bid-Rent Curve: ผลกระทบของรถไฟฟ้าต่อราคาที่ดินรอบสถานี',
                    font: { family: 'Prompt', size: 14 }
                }
            },
            scales: {
                y: {
                    title: { display: true, text: 'มูลค่า / ค่าเช่าที่ดิน (ดัชนีราคา)' }
                },
                x: {
                    title: { display: true, text: 'ระยะทางจากศูนย์กลางเมือง (CBD)' }
                }
            }
        }
    });
});
