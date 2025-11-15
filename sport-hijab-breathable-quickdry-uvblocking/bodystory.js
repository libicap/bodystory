document.addEventListener('DOMContentLoaded', function() {
  var ctaBtn = document.querySelector('.banner-cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function(e) {
      var target = document.querySelector('.minishopping-text');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // ANNOUNCEMENT BAR LOGIC
  const logo = document.querySelector(".logodiv");
  const announcement = document.querySelector(".announcementdiv");
  const announcementP = announcement ? announcement.querySelector("p") : null;

  if (logo && announcement && announcementP) {
    window.addEventListener("scroll", function () {
      const logoRect = logo.getBoundingClientRect();
      const logoBottom = logoRect.bottom;
      const logoTop = logoRect.top;

      // Logic for position
      if (logoBottom <= 0) {
        announcement.style.position = "fixed";
        announcement.style.top = "0";
        announcement.style.left = "0";
        announcement.style.width = "100%";
        announcement.style.zIndex = "1000";
        announcement.style.padding = "10px 10px";
        announcementP.style.marginTop = "5px";
      } else {
        announcement.style.position = "relative";
        announcement.style.padding = "10px";
        announcementP.style.marginTop = "0";
      }

      // Logic for color
      if (logoTop >= 0 && logoBottom <= window.innerHeight) {
        announcement.style.backgroundColor = "#fff";
        announcementP.style.color = "#000";
      } else {
        announcement.style.backgroundColor = "#163903";
        announcementP.style.color = "#fff";
      }
    });
  }

  // PRODUCT IMAGE ROTATION LOGIC
  const productTextboxes = document.querySelectorAll(".producttextbox");
  const productImage = document.querySelector(".productimg");

  if (productImage && productTextboxes.length > 0) {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const imagePairs = [
      { textbox: productTextboxes[0], image: "img/showholes.jpg" },
      { textbox: productTextboxes[1], image: "img/showlogo.png" },
      { textbox: productTextboxes[2], image: "img/blackegg.png" },
      { textbox: productTextboxes[3], image: "img/leg.png" },
      { textbox: productTextboxes[4], image: "img/duocolors.jpg" },
    ];

    let currentIndex = 0;
    let intervalId;

    function updateImage(index) {
      if (index < 0 || index >= imagePairs.length) return;
      const { image, textbox } = imagePairs[index];

      productImage.classList.add("fade-out");

      setTimeout(() => {
        productImage.setAttribute("src", image);
        productImage.classList.remove("fade-out");
        productImage.classList.add("fade-in");

        setTimeout(() => {
          productImage.classList.remove("fade-in");
        }, 500);
      }, 500);

      if (isMobile) {
        productTextboxes.forEach((tb, i) => {
          tb.style.display = i === index ? "block" : "none";
        });
      } else {
        productTextboxes.forEach((tb) => {
          tb.classList.remove("highlight");
        });
        if (textbox) {
          textbox.classList.add("highlight");
        }
      }
    }

    function startImageRotation() {
      const interval = isMobile ? 5000 : 3000;

      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % imagePairs.length;
        updateImage(currentIndex);
      }, interval);
    }

    if (isMobile) {
      productImage.addEventListener("click", function () {
        clearInterval(intervalId);
        currentIndex = (currentIndex + 1) % imagePairs.length;
        updateImage(currentIndex);
        startImageRotation();
      });
    }

    updateImage(currentIndex);
    startImageRotation();
  }

  // SHOPIFY BUY BUTTON LOGIC
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "mrrpjk-zs.myshopify.com",
      storefrontAccessToken: "a1d38a2a7bba048d8df85bd5bcbc9fcf",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "7595444994132",
        variantId: "41812315111508",
        node: document.getElementById("product-component-1756762545468"),
        moneyFormat: "RM%7B%7Bamount%7D%7D%20MYR",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Open Sans, sans-serif",
                ":hover": { "background-color": "#000000" },
                "background-color": "#000000",
                ":focus": { "background-color": "#000000" },
                "border-radius": "18px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
              options: false,
            },
            text: { button: "Black" },
            googleFonts: ["Open Sans"],
            variantId: "41812315111508",
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": { "margin-left": "-20px" },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Open Sans, sans-serif",
                ":hover": { "background-color": "#000000" },
                "background-color": "#000000",
                ":focus": { "background-color": "#000000" },
                "border-radius": "18px",
              },
              title: {
                "font-family": "Montserrat, sans-serif",
                "font-size": "30px",
              },
              price: {
                "font-family": "PT Sans, sans-serif",
                "font-weight": "bold",
              },
              compareAt: {
                "font-family": "PT Sans, sans-serif",
                "font-weight": "bold",
              },
              unitPrice: {
                "font-family": "PT Sans, sans-serif",
                "font-weight": "bold",
              },
            },
            googleFonts: ["Montserrat", "PT Sans", "Open Sans"],
            text: { button: "Add to cart" },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Open Sans, sans-serif",
                ":hover": { "background-color": "#000000" },
                "background-color": "#000000",
                ":focus": { "background-color": "#000000" },
                "border-radius": "18px",
              },
            },
            text: { total: "Subtotal", button: "Checkout" },
            popup: false,
            googleFonts: ["Open Sans"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Open Sans, sans-serif",
                "background-color": "#000000",
                ":hover": { "background-color": "#000000" },
                ":focus": { "background-color": "#000000" },
              },
            },
            googleFonts: ["Open Sans"],
          },
        },
      });
      ui.createComponent("product", {
        id: "7595444994132",
        variantId: "41812551925844",
        node: document.getElementById("product-component-1756762479218"),
        moneyFormat: "RM%7B%7Bamount%7D%7D%20MYR",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Open Sans, sans-serif",
                color: "#000000",
                ":hover": { color: "#000000", "background-color": "#b79e83" },
                "background-color": "#cbaf92",
                ":focus": { "background-color": "#b79e83" },
                "border-radius": "18px",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
              options: false,
            },
            text: { button: "Beach" },
            googleFonts: ["Open Sans"],
            variantId: "41812551925844",
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": { "margin-left": "-20px" },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Open Sans, sans-serif",
                color: "#000000",
                ":hover": { color: "#000000", "background-color": "#b79e83" },
                "background-color": "#cbaf92",
                ":focus": { "background-color": "#b79e83" },
                "border-radius": "18px",
              },
              title: {
                "font-family": "Montserrat, sans-serif",
                "font-size": "30px",
              },
              price: {
                "font-family": "PT Sans, sans-serif",
                "font-weight": "bold",
              },
              compareAt: {
                "font-family": "PT Sans, sans-serif",
                "font-weight": "bold",
              },
              unitPrice: {
                "font-family": "PT Sans, sans-serif",
                "font-weight": "bold",
              },
            },
            googleFonts: ["Montserrat", "PT Sans", "Open Sans"],
            text: { button: "Add to cart" },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Open Sans, sans-serif",
                color: "#000000",
                ":hover": { color: "#000000", "background-color": "#b79e83" },
                "background-color": "#cbaf92",
                ":focus": { "background-color": "#b79e83" },
                "border-radius": "18px",
              },
            },
            text: { total: "Subtotal", button: "Checkout" },
            popup: false,
            googleFonts: ["Open Sans"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Open Sans, sans-serif",
                "background-color": "#cbaf92",
                ":hover": { "background-color": "#b79e83" },
                ":focus": { "background-color": "#b79e83" },
              },
              count: { color: "#000000", ":hover": { color: "#000000" } },
              iconPath: { fill: "#000000" },
            },
            googleFonts: ["Open Sans"],
          },
        },
      });
    });
  }
  (function () {
    var scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
  })();

  // GOOGLE ANALYTICS
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-WSVF11MJRS");
});
