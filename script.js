const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const imageUpload = document.getElementById("imageUpload");

const colorPreview = document.getElementById("colorPreview");

const hexCode = document.getElementById("hexCode");

const productList = document.getElementById("productList");

const wishlistItems = document.getElementById("wishlistItems");



let selectedHex = "";



imageUpload.addEventListener("change", function () {

  const reader = new FileReader();

  reader.onload = function (e) {

    const img = new Image();

    img.onload = function () {

      canvas.width = img.width;

      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

    };

    img.src = e.target.result;

  };

  reader.readAsDataURL(this.files[0]);

});



canvas.addEventListener("click", function (e) {

  const x = e.offsetX;

  const y = e.offsetY;

  const pixel = ctx.getImageData(x, y, 1, 1).data;

  const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);

  selectedHex = hex;

  colorPreview.style.backgroundColor = hex;

  hexCode.textContent = hex;

  fetchProducts(hex);

});



function rgbToHex(r, g, b) {

  return (

    "#" +

    [r, g, b]

      .map((x) => x.toString(16).padStart(2, "0"))

      .join("")

      .toUpperCase()

  );

}



async function fetchProducts(color) {

  const isCrueltyFree = document.getElementById("crueltyFree").checked;

  const category = document.getElementById("categoryFilter").value;



  const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");

  const products = await res.json();



  const filtered = products.filter((p) => {

    const matchCategory = category ? p.product_type === category : true;

    const matchCruelty = isCrueltyFree ? p.cruelty_free === true : true;

    return matchCategory && matchCruelty;

  });



  productList.innerHTML = "";

  filtered.slice(0, 5).forEach((p) => {

    const div = document.createElement("div");

    div.className = "product-card";

    div.innerHTML = `

      <div class="product-info">

        <strong>${p.brand} - ${p.name}</strong><br>

        ${p.product_type || "Product"}<br>

        Price: ${p.price ? `$${p.price}` : 'N/A'}

      </div>

      <div>

        <a href="${p.product_link}" target="_blank" class="buy-btn">Buy</a>

        <button class="wishlist-btn">♡</button>

      </div>

    `;

    div.querySelector(".wishlist-btn").addEventListener("click", () => {

      const li = document.createElement("li");

      li.textContent = `${p.brand} - ${p.name}`;

      wishlistItems.appendChild(li);

    });

    productList.appendChild(div);

  });

}



// Toggle dark mode

document.getElementById("darkToggle").addEventListener("click", () => {

  document.body.classList.toggle("dark");

});

