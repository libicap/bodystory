// Logic for cart-offer color dropdown
document.addEventListener('DOMContentLoaded', function() {
    var secondaryColorSelect = document.getElementById('cartSecondaryColorSelect');
    if (secondaryColorSelect) {
        secondaryColorSelect.addEventListener('change', function() {
            var color = this.value;
            var secondaryImg = document.getElementById('cartSecondaryImg');
            var secondaryTitle = document.getElementById('cartSecondaryTitle');
            if (color === 'black') {
                if (secondaryImg) secondaryImg.src = 'img/square1.png';
                if (secondaryTitle) secondaryTitle.innerHTML = 'BodyStory TieFit Sports Tudung (Black) <span class="cart-old" style="text-decoration:line-through; color:#888; font-size:0.98em; margin-left:8px;">RM120</span> <span class="cart-new" style="margin-left:6px;">RM60</span>';
            } else if (color === 'beach') {
                if (secondaryImg) secondaryImg.src = 'img/square4.png';
                if (secondaryTitle) secondaryTitle.innerHTML = 'BodyStory TieFit Sports Tudung (Beach) <span class="cart-old" style="text-decoration:line-through; color:#888; font-size:0.98em; margin-left:8px;">RM120</span> <span class="cart-new" style="margin-left:6px;">RM60</span>';
            }
        });
    }
});
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

    // Cart offer logic (cart-offer, cart-secondary)
    var secondaryImg = document.getElementById('cartSecondaryImg');
    var secondaryTitle = document.getElementById('cartSecondaryTitle');
    if (color === 'black') {
        if (secondaryImg) secondaryImg.src = 'img/square4.png';
        if (secondaryTitle) secondaryTitle.innerHTML = 'BodyStory TieFit Sports Tudung (Beach) <span class="cart-old" style="text-decoration:line-through; color:#888; font-size:0.98em; margin-left:8px;">RM120</span> <span class="cart-new" style="margin-left:6px;">RM60</span>';
    } else if (color === 'beach') {
        if (secondaryImg) secondaryImg.src = 'img/square1.png';
        if (secondaryTitle) secondaryTitle.innerHTML = 'BodyStory TieFit Sports Tudung (Black) <span class="cart-old" style="text-decoration:line-through; color:#888; font-size:0.98em; margin-left:8px;">RM120</span> <span class="cart-new" style="margin-left:6px;">RM60</span>';
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
