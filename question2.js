
const cart = [
    { productId: 101, name: "Laptop", price: 55000, quantity: 1, category: "Electronics" },
    { productId: 102, name: "Mouse", price: 700, quantity: 2, category: "Accessories" },
    { productId: 103, name: "Keyboard", price: 1500, quantity: 1, category: "Accessories" },
    { productId: 104, name: "Monitor", price: 12000, quantity: 0, category: "Electronics" },
    { productId: 105, name: "USB Cable", price: 300, quantity: 3, category: "Accessories" },
    { productId: 106, name: "Office Chair", price: 6500, quantity: 1, category: "Furniture" }
];

let availableProducts = cart.filter(item => item.quantity > 0);

let productReport = availableProducts.map(item => {
    return {
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        category: item.category,
        itemTotal: item.price * item.quantity
    };
});

let subtotal = productReport.reduce((sum, item) => sum + item.itemTotal, 0);

let discount = 0;
if (subtotal > 50000) {
    discount = subtotal * 0.10;
}

let amountAfterDiscount = subtotal - discount;
let gst = amountAfterDiscount * 0.18;
let finalAmount = amountAfterDiscount + gst;

let categoryTotals = productReport.reduce((obj, item) => {
    if (obj[item.category]) {
        obj[item.category] += item.itemTotal;
    } else {
        obj[item.category] = item.itemTotal;
    }
    return obj;
}, {});

console.log("Available Products:");
console.log(productReport);

console.log("\nCategory Totals:");
console.log(categoryTotals);

console.log("\nSubtotal:", subtotal);
console.log("Discount:", discount);
console.log("GST:", gst.toFixed(2));
console.log("Final Amount:", finalAmount.toFixed(2));
