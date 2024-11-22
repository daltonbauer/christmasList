// script.js
const items = [
    {   name: "Red Sweater", 
        price: "$45", 
        image: "",
        link: "" },
    { name: "Bluetooth Speaker But The Name Is Super Long", price: "$120", color: "blue", image: "https://images.philips.com/is/image/philipsconsumer/df545073a8474e55bb16b0c40120ff1c?$pnglarge$&wid=1250" },
    { name: "Green Scarf", price: "$20", image: "" },
    { name: "Red Sweater", price: "$45", image: "" },
    { name: "Bluetooth Speaker", price: "$120", image: "https://images.philips.com/is/image/philipsconsumer/df545073a8474e55bb16b0c40120ff1c?$pnglarge$&wid=1250" },
    { name: "Green Scarf", price: "$20", image: "" },
    { name: "Red Sweater", price: "$45", image: "" },
    { name: "Bluetooth Speaker", price: "$120", image: "https://images.philips.com/is/image/philipsconsumer/df545073a8474e55bb16b0c40120ff1c?$pnglarge$&wid=1250" },
    { name: "Green Scarf", price: "$20", image: "" },
    { name: "Red Sweater", price: "$45", image: "" },
    { name: "Bluetooth Speaker", price: "$120", image: "https://images.philips.com/is/image/philipsconsumer/df545073a8474e55bb16b0c40120ff1c?$pnglarge$&wid=1250" },
    { name: "Green Scarf", price: "$20", image: "" },
  ];
  
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