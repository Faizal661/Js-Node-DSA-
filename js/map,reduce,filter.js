const products = [
    { name: "Apple", price: 1.99, inStock: true },
    { name: "Banana", price: 0.79, inStock: false },
    { name: "Orange", price: 2.49, inStock: true }
];


// const secProduct=products.map(a=> a.name)
// console.log(secProduct);

// const thirdProduct= secProduct.map(a=> a+'asd')
// console.log(thirdProduct);


// const totalProductPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
// console.log(totalProductPrice); // 5.27 (sum of all prices)

const filteredProducts=products.filter(prod=> prod.price>1)
console.log(filteredProducts)


// const mostExpensiveProduct = products.reduce((highest, current) => (current.price > highest.price ? current : highest), products[0]);
// console.log(mostExpensiveProduct); // Product with highest price












