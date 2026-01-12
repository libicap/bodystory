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

    // Shopify Buy Button swap logic
    var buySticky = document.querySelector('.cart-buy-sticky');
    if (!buySticky) return;
    var buyButtonDiv = buySticky.querySelector('#product-component-1759079085176, #product-component-1759089005839');
    if (color === 'beach') {
        // Remove current buy button and add new one for Beach
        if (buyButtonDiv) buyButtonDiv.remove();
        var newDiv = document.createElement('div');
        newDiv.id = 'product-component-1759089005839';
        buySticky.appendChild(newDiv);
        // Remove any previous injected script
        var prevScript = document.getElementById('shopify-buy-script-beach');
        if (prevScript) prevScript.remove();
        // Add new script for Beach
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'shopify-buy-script-beach';
        script.innerHTML = `/*<![CDATA[*/\n(function () {\n  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';\n  if (window.ShopifyBuy) {\n    if (window.ShopifyBuy.UI) {\n      ShopifyBuyInit();\n    } else {\n      loadScript();\n    }\n  } else {\n    loadScript();\n  }\n  function loadScript() {\n    var script = document.createElement('script');\n    script.async = true;\n    script.src = scriptURL;\n    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);\n    script.onload = ShopifyBuyInit;\n  }\n  function ShopifyBuyInit() {\n    var client = ShopifyBuy.buildClient({\n      domain: 'mrrpjk-zs.myshopify.com',\n      storefrontAccessToken: 'a1d38a2a7bba048d8df85bd5bcbc9fcf',\n    });\n    ShopifyBuy.UI.onReady(client).then(function (ui) {\n      ui.createComponent('product', {\n        id: '7786136600660',\n          variantId: '42533768429652',\n        node: document.getElementById('product-component-1759089005839'),\n        moneyFormat: 'RM%7B%7Bamount%7D%7D%20MYR',\n        options: {\n  "product": {\n    "styles": {\n      "product": {\n        "@media (min-width: 601px)": {\n          "max-width": "calc(25% - 20px)",\n          "margin-left": "20px",\n          "margin-bottom": "50px"\n        }\n      },\n      "button": {\n        "font-family": "Avant Garde, sans-serif",\n        ":hover": {\n          "background-color": "#000000"\n        },\n        "background-color": "#000000",\n        ":focus": {\n          "background-color": "#000000"\n        },\n        "border-radius": "18px",\n        "padding-left": "65px",\n        "padding-right": "65px"\n      }\n    },\n    "buttonDestination": "checkout",\n    "contents": {\n      "img": false,\n      "title": false,\n      "price": false,\n      "options": false\n    },\n    "text": {\n      "button": "Buy now"\n    }\n  },\n  "productSet": {\n    "styles": {\n      "products": {\n        "@media (min-width: 601px)": {\n          "margin-left": "-20px"\n        }\n      }\n    }\n  },\n  "modalProduct": {\n    "contents": {\n      "img": false,\n      "imgWithCarousel": true,\n      "button": false,\n      "buttonWithQuantity": true\n    },\n    "styles": {\n      "product": {\n        "@media (min-width: 601px)": {\n          "max-width": "100%",\n          "margin-left": "0px",\n          "margin-bottom": "0px"\n        }\n      },\n      "button": {\n        "font-family": "Avant Garde, sans-serif",\n        ":hover": {\n          "background-color": "#000000"\n        },\n        "background-color": "#000000",\n        ":focus": {\n          "background-color": "#000000"\n        },\n        "border-radius": "18px",\n        "padding-left": "65px",\n        "padding-right": "65px"\n      },\n      "title": {\n        "font-family": "Montserrat, sans-serif",\n        "font-size": "30px"\n      },\n      "price": {\n        "font-family": "PT Sans, sans-serif",\n        "font-weight": "bold"\n      },\n      "compareAt": {\n        "font-family": "PT Sans, sans-serif",\n        "font-weight": "bold"\n      },\n      "unitPrice": {\n        "font-family": "PT Sans, sans-serif",\n        "font-weight": "bold"\n      }\n    },\n    "googleFonts": [\n      "Montserrat",\n      "PT Sans"\n    ],\n    "text": {\n      "button": "Add to cart"\n    }\n  },\n  "option": {},\n  "cart": {\n    "styles": {\n      "button": {\n        "font-family": "Avant Garde, sans-serif",\n        ":hover": {\n          "background-color": "#000000"\n        },\n        "background-color": "#000000",\n        ":focus": {\n          "background-color": "#000000"\n        },\n        "border-radius": "18px"\n      }\n    },\n    "text": {\n      "total": "Subtotal",\n      "button": "Checkout"\n    },\n    "popup": false\n  },\n  "toggle": {\n    "styles": {\n      "toggle": {\n        "font-family": "Avant Garde, sans-serif",\n        "background-color": "#000000",\n        ":hover": {\n          "background-color": "#000000"\n        },\n        ":focus": {\n          "background-color": "#000000"\n        }\n      }\n    }\n  }\n},\n      });\n    });\n  }\n})();\n/*]]>*/`;
        buySticky.appendChild(script);
    } else if (color === 'black') {
        // Remove beach buy button if present and restore original
        var beachDiv = buySticky.querySelector('#product-component-1759089005839');
        if (beachDiv) beachDiv.remove();
        var prevScript = document.getElementById('shopify-buy-script-beach');
        if (prevScript) prevScript.remove();
        // If original button is missing, re-add it
        if (!buySticky.querySelector('#product-component-1759079085176')) {
            var origDiv = document.createElement('div');
            origDiv.id = 'product-component-1759079085176';
            buySticky.appendChild(origDiv);
            // Optionally, re-initialize the original buy button if needed
            if (window.ShopifyBuy && window.ShopifyBuy.UI && typeof ShopifyBuyInit === 'function') {
                ShopifyBuyInit();
            }
        }
    }
}

function openCart() {
    document.getElementById('cartPanel').classList.add('open');
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

// Cart overlay and panel functions
function openCart() {
    document.getElementById('cartPanel').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    // Push a state to history so back button closes the cart
    if (window.history && window.history.pushState) {
        window.history.pushState({cartOpen: true}, '', window.location.href);
    }
}

function closeCart() {
    document.getElementById('cartPanel').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
}

// Handle browser back button - close cart instead of navigating away
window.addEventListener('popstate', function(event) {
    var panel = document.getElementById('cartPanel');
    if (panel && panel.classList.contains('open')) {
        closeCart();
        // Prevent further back navigation by pushing forward again
        event.preventDefault();
    }
});

// Hide announcement bar on scroll down, show on scroll up
let lastScrollTop = 0;
const announcementBar = document.querySelector('.announcement-bar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        // Scrolling down
        announcementBar.classList.add('hidden');
    } else {
        // Scrolling up
        announcementBar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Color selection function
function selectColor(element, colorName) {
    // Remove selection from all color options
    const allColors = element.parentElement.querySelectorAll('div[onclick]');
    allColors.forEach(function(colorDiv) {
        colorDiv.style.background = 'transparent';
        colorDiv.style.border = 'none';
        const circle = colorDiv.querySelector('div');
        if (circle) {
            circle.style.borderColor = '#ddd';
            circle.style.borderWidth = '3px';
        }
    });
    
    // Add selection to clicked color
    element.style.background = 'transparent';
    element.style.border = '2px solid #163903';
    const circle = element.querySelector('div');
    if (circle) {
        const colorMap = {
            'Black': '#0A0A0A',
            'Light Gray': '#B8BABE',
            'Midnight Navy': '#1A222E',
            'Light Sand': '#DED0C1'
        };
        circle.style.borderColor = colorMap[colorName];
        circle.style.borderWidth = '3px';
    }
    
    // Update selected color name display
    const selectedColorSpan = document.getElementById('selectedColorName');
    if (selectedColorSpan) {
        selectedColorSpan.textContent = ' - ' + colorName;
    }
}
