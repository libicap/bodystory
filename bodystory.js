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

