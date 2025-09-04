window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logodiv");
    const announcement = document.querySelector(".announcementdiv");
    const announcementP = announcement.querySelector("p"); // Get the <p> inside

    let logoBottom = logo.getBoundingClientRect().bottom;

    if (logoBottom <= 0) {
        announcement.style.position = "fixed";
        announcement.style.top = "0";
        announcement.style.left = "0";
        announcement.style.width = "100%";
        announcement.style.zIndex = "1000";
        announcement.style.padding = "10px 10px"; // 🔹 Increase top padding when fixed
        announcementP.style.marginTop = "5px";  // 🔹 Add extra top margin for <p>
    } else {
        announcement.style.position = "relative";
        announcement.style.padding = "10px"; // Reset padding when scrolling back up
        announcementP.style.marginTop = "0"; // Reset <p> margin when normal
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const duoColorsBox = document.querySelector('.product-box:nth-child(2)');

    function handleScroll() {
        const rect = duoColorsBox.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if any part of the Duo Colors box is visible on the screen
        if (rect.top < windowHeight && rect.bottom > 0) {
            duoColorsBox.classList.add('zoomed');
        } else {
            duoColorsBox.classList.remove('zoomed');
        }
    }

    window.addEventListener('scroll', handleScroll);
    
});
    gtag('event', 'add_to_cart', {
      items: [{
        item_id: 'SKU_12345',
        item_name: 'hijabblack',
        currency: 'MYR',
        price: 79.00,
        quantity: 1
      }]
    });
