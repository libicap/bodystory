function setMainImg(thumb) {
    var mainImg = document.getElementById('mainProductImg');
    mainImg.src = thumb.src;
    mainImg.alt = thumb.alt;
}

function setCartColor(color) {
    var img = document.getElementById('cartMainImg');
    var title = document.getElementById('cartMainTitle');
    if (color === 'black') {
        img.src = 'img/square1.png';
        title.textContent = 'BodyStory TieFit Sports Tudung (Black)';
    } else if (color === 'beach') {
        img.src = 'img/square4.png';
        title.textContent = 'BodyStory TieFit Sports Tudung (Beach)';
    }
}

function openCart() {
    document.getElementById('cartPanel').classList.add('open');
    startCartCountdown();
}
function closeCart() {
    document.getElementById('cartPanel').classList.remove('open');
}
let cartCountdownInterval;
function startCartCountdown() {
    let duration = 6 * 60; // 6 minutes in seconds
    clearInterval(cartCountdownInterval);
    function updateTimer() {
        let min = Math.floor(duration / 60);
        let sec = duration % 60;
        document.getElementById('cartCountdown').textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        if (duration > 0) duration--;
        else clearInterval(cartCountdownInterval);
    }
    updateTimer();
    cartCountdownInterval = setInterval(updateTimer, 1000);
}
