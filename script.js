// IRO - Issues Reporting Outlet
// Main JavaScript file

document.addEventListener("DOMContentLoaded", function () {

    // Display a welcome message in the browser console
    console.log("IRO website loaded successfully.");

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Report button
    const reportButton = document.querySelector(".button");

    if (reportButton) {
        reportButton.addEventListener("click", function () {
            console.log("User selected Report an Issue.");
        });
    }

});
