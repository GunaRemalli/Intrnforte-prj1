document.addEventListener('DOMContentLoaded', () => {
    const categories = ['Electronics', 'Clothing', 'Accessories'];
    const products = [
        { id: 1, name: 'Jacket', price: 10000, category: 'Clothing' },
        { id: 3, name: 'Tshirt', price: 7000, category: 'Clothing' },
        { id: 5, name: 'Watch', price: 200000, category: 'Accessories' },
        { id: 6, name: 'Watch', price: 200001, category: 'Accessories' },
        { id: 7, name: 'Shoe', price: 300000, category: 'Accessories' },
        { id: 8, name: 'Shoe', price: 300001, category: 'Accessories' },
        { id: 9, name: 'Phone', price: 50000, category: 'Electronics' },
        { id: 10, name: 'Phone', price: 50001, category: 'Electronics' },
        { id: 11, name: 'Phone', price: 50000, category: 'Electronics' },
        { id: 12, name: 'Phone', price: 50001, category: 'Electronics' },

    ];

    if (document.getElementById('categories')) {
        const categoryContainer = document.getElementById('categories');
        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `<h2>${category}</h2>`;
            categoryDiv.addEventListener('click', () => {
                window.location.href = `category.html?category=${category}`;
            });
            categoryContainer.appendChild(categoryDiv);
        });
    }

    if (document.getElementById('product-list')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const productList = document.getElementById('product-list');
        const filteredProducts = products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="placeholder.png" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });

        const priceRange = document.getElementById('priceRange');
        const priceValue = document.getElementById('priceValue');
        priceRange.addEventListener('input', () => {
            priceValue.textContent = `₹${priceRange.value}`;
            const filteredProductsByPrice = filteredProducts.filter(product => product.price <= priceRange.value);
            productList.innerHTML = '';
            filteredProductsByPrice.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="jac1.jpg" alt="₹{Jacket black}">
                    <h3>₹{Jacket black}</h3>
                    <p>₹{10000}
                    <img src="jac2.jpg" alt="₹{Jacket white}">
                    <h3>₹{Jacket White}</h3>
                    <p>₹{10001}
                    <img src="t1.jpg" alt="₹{TShirt black}">
                    <h3>₹{TShirt black}</h3>
                    <p>₹{7000}
                    <img src="t2.jpg" alt="₹{TShirt designed}">
                    <h3>₹{TShirt designed}</h3>
                    <p>₹{7001}
                    <img src="watch2.jpg" alt="₹{LV Watch Black leather}">
                    <h3>₹{LV Watch Black leather}</h3>
                    <p>₹{200000}
                    <img src="watch1.jpg" alt="₹{LV Watch silver chained}">
                    <h3>₹{LV Watch silver chained}</h3>
                    <p>₹{200001}
                    <img src="shoe1.jpg" alt="₹{LV Shoes Black and White}">
                    <h3>₹{LV Shoes Black and White}</h3>
                    <p>₹{300000}
                    <img src="shoe2.jpg" alt="₹{LV Shoes Blue and White}">
                    <h3>₹{LV Shoes Blue and White}</h3>
                    <p>₹{300001}
                    <img src="p2.jpg" alt="₹{OnePlus 9rt}">
                    <h3>₹{OnePlus 9rt}</h3>
                    <p>₹{50000}
                    <img src="p1.jpg" alt="₹{OnePlus 7}">
                    <h3>₹{OnePlus 7}</h3>
                    <p>₹{50001}
                    <img src="p3.jpg" alt="₹{Iqoo Neo 7}">
                    <h3>₹{Iqoo Neo 7}</h3>
                    <p>₹{50000}
                    <img src="p4.png" alt="₹{Redmi Note 10 pro}">
                    <h3>₹{Redmi Note 10 pro}</h3>
                    <p>₹{50001}
                    </p>
                `;
                productList.appendChild(productDiv);
            });
        });
    }
});
