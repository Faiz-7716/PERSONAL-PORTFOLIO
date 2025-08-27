document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Full Stack Web Developer", "Data Scientist", "Computer Science Student", "Freelancer", "AI Generalist"];
    const roleElement = document.getElementById("role");
    let roleIndex = 0;
    let letterIndex = 0;
    let typingInterval;

    function typeRole() {
        roleElement.style.opacity = 0;
        setTimeout(() => {
            roleElement.textContent = "";
            letterIndex = 0;
            roleElement.style.opacity = 1; // Make text visible again

            typingInterval = setInterval(() => {
                if (letterIndex < roles[roleIndex].length) {
                    roleElement.textContent += roles[roleIndex].charAt(letterIndex);
                    letterIndex++;
                }
                else {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        roleIndex = (roleIndex + 1) % roles.length;
                        typeRole();
                    }, 1000);
                }
            }, 150);
            roleElement.style.opacity = 1; // Ensure text is visible
        }, 500);
    }

    typeRole(); // Start the typing effect
});
//// Project Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.project-list li');
    const projects = document.querySelectorAll('.project-box');

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            projects.forEach((proj) => {
                if (filterValue === 'all' || proj.getAttribute('data-category') === filterValue) {
                    proj.style.display = 'block';
                } else {
                    proj.style.display = 'none';
                }

            });

        });
    });

});



// Swiper JS for Testimonials
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});



// --------------------------------Dark Light------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-light-btn");
    const htmlElement = document.documentElement;

    const currentMode = localStorage.getItem("mode");

    if (currentMode === "light") {
        htmlElement.classList.add("light-mode");
        toggleButton.innerHTML = "<i class='bi bi-brightness-high-fill'></i>";
    }

    toggleButton.addEventListener("click", () => {
        htmlElement.classList.toggle("light-mode");
        // update the button
        const isLightMode = htmlElement.classList.contains("light-mode");
        toggleButton.innerHTML = isLightMode ? "<i class='fa-regular fa-moon'></i>" : "<i class='bi bi-brightness-high-fill'></i>";

        // save mode in local storage
        localStorage.setItem("mode", isLightMode ? "light" : "dark");
    });
});



// Nav Auto Active
document.addEventListener("DOMContentLoaded", function () {
const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("ul li a");

function setActiveLink(){
    let currentSection = "";

    section.forEach((section)=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop - sectionHeight / 3){
            currentSection = section.getAttribute("id");
        }
    });
    navLinks.forEach((link)=>{
        link.classList.remove("active");
        if(link.getAttribute("href") ===    `#${currentSection}`){
            link.classList.add("active");
        }
    })
}
window.addEventListener("scroll", setActiveLink);
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});


































