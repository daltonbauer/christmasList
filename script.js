// script.js
const items = [
    {   
      name: "Apple Gift Cards", 
      price: "$???", 
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/giftcard-email-holiday-select-202411?wid=600&hei=600&fmt=png-alpha&.v=1728682866970",
      link: "https://www.apple.com/shop/gift-cards" 
    },

    {   
      name: "Zara Textured Knit Sweater - M, Navy Blue", 
      price: "$49.90", 
      image: "https://static.zara.net/assets/public/bf53/ad73/31a44c70a89e/6793fc956a1e/02893322401-e1/02893322401-e1.jpg?ts=1726567096967&w=1024",
      link: "https://www.zara.com/us/en/textured-knit-sweater-p02893322.html?v1=295102313&v2=2298056" 
    },

    {   
      name: "Dyson Digital Slim Vaccum", 
      price: "$229.99", 
      image: "https://m.media-amazon.com/images/I/51yaDJkv77L._AC_SL1500_.jpg",
      link: "https://www.amazon.com/Dyson-Digital-Cordless-Vacuum-Nickel/dp/B0DBRLRP3F/ref=sr_1_6?dib=eyJ2IjoiMSJ9.oOmXjy7vJvyXsFj4QtVzE6JrdoHIo4An73oj1FQBJ1YKZdtb4JX8aYO1hd84NJnzcI5Jv91wJhZBEgwGgEhU2e4AdXBEs25Xg-GkmkKdKv7jqZ0rDFqN2dY3cJ9vawkG8pyCUUo5e7yQSDqeutJJB-E2ALT1CZjexAyuuwUTtHm5E1P-5FUBpdxv2Q-DpcWlotsgyAXNwJeLAaz_Z-0WmIdw_q7B7Lrbj6cKmvzgDJs.toOzWdjgzzGKRNqEfXceYEGdPr40tMWfue-2lKt7ADs&dib_tag=se&keywords=dyson&psr=EY17&qid=1732306257&s=black-friday&sr=1-6" 
    },

    {   
      name: "Hollister BOXY ZIP-UP PUFFER JACKET - M, Tan", 
      price: "$77", 
      image: "https://img.hollisterco.com/is/image/anf/KIC_332-4086-00053-100_prod1.jpg?policy=product-extra-large",
      link: "https://www.hollisterco.com/shop/us/p/boxy-mock-neck-puffer-jacket-58378820?categoryId=16400&faceout=model&seq=03" 
    },

    {   
      name: "Hollister Gift Card", 
      price: "$???", 
      image: "https://m.media-amazon.com/images/I/41hk6SN8R1L.jpg",
      link: "https://www.hollisterco.com/shop/us/hidden-gift-cards" 
    },

    {   
      name: "BAGGY CAMO PAINTER PANTS - W29, L32", 
      price: "$41.97", 
      image: "https://img.hollisterco.com/is/image/anf/KIC_330-4180-00129-380_prod1.jpg?policy=product-large",
      link: "https://www.hollisterco.com/shop/us/p/baggy-camo-painter-pants-57829820?categoryId=16420&faceout=model&seq=14&afsource=social+proofing" 
    },

    {   
      name: "LOOSE HEAVYWEIGHT CARGO PANTS - W29, L32", 
      price: "$41.97", 
      image: "https://img.hollisterco.com/is/image/anf/KIC_330-4159-00121-130_prod1.jpg?policy=product-large",
      link: "https://www.hollisterco.com/shop/us/p/loose-heavyweight-cargo-pants-58552870?categoryId=16420&faceout=model&seq=01" 
    },

    {   
      name: "BAGGY CARGO PULL-ON PANTS - M, Light Tan", 
      price: "$41.97", 
      image: "https://img.hollisterco.com/is/image/anf/KIC_330-4150-00126-178_prod1.jpg?policy=product-large",
      link: "https://www.hollisterco.com/shop/us/p/baggy-cargo-pull-on-pants-58344344?categoryId=16420&faceout=prod&seq=04&afsource=social+proofing" 
    },

    {   
      name: "HOLLISTER FEEL GOOD FLEECE BOXY CAMO HOODIE - M, Brown Camo", 
      price: "$31.47", 
      image: "https://img.hollisterco.com/is/image/anf/KIC_322-4137-00133-336_prod1.jpg?policy=product-large",
      link: "https://www.hollisterco.com/shop/us/p/boxy-hoodie-57373823?faceout=model&seq=01" 
    },

    {   
      name: "Red Sweater", 
      price: "$45", 
      image: "",
      link: "" 
    },

    {   
      name: "Red Sweater", 
      price: "$45", 
      image: "",
      link: "" 
    },
  ];

  /*
  {   
      name: "Red Sweater", 
      price: "$45", 
      image: "",
      link: "" 
    },
  */
  
const listContainer = document.querySelector(".list");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.item').forEach((item, index) => {
      setTimeout(() => item.classList.add('item-loaded'), index * 100);
    });
  });

items.forEach(item => {
const itemElement = document.createElement("div");
itemElement.classList.add("item");

itemElement.innerHTML = `
<a href="${item.link}" target="_blank" class="item-link">
    <div class="item-image" style="background-image: url(${item.image || "default-image.jpg"})"></div>
    <p class="item-name">${item.name}</p>
    <p class="item-price">${item.price}</p>
</a>
`;

listContainer.appendChild(itemElement);
});