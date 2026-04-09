const products = [
{ id: "p1", name: "Smart Refrigerator" },
{ id: "p2", name: "Electric Washing Machine" },
{ id: "p3", name: "Robot Vacuum" },
{ id: "p4", name: "Smart TV" },
{ id: "p5", name: "Air Purifier" }
];

const select = document.querySelector("#prodname");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
});