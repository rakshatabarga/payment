// Add New Product Page (add_product.html)
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const image = document.getElementById('imageInput').files[0];
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    const price = document.getElementById('priceInput').value;

    // Create product element
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    // Create image element
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(image);
    imageElement.alt = title;

    // Create title element
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    // Create description element
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    // Create price element
    const priceElement = document.createElement('span');
    priceElement.classList.add('price');
    priceElement.textContent = `$${price}`;

    // Create "Add to Cart" button
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', function() {
        // Add your logic for adding the product to the cart here
        alert('Product added to cart: ' + title);
    });

    // Create "Delete" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function() {
        // Remove the product from the DOM
        productElement.remove();
    });

    // Append elements to product container on main page
    const productContainer = window.opener.document.getElementById('productContainer');
    productElement.appendChild(imageElement);
    productElement.appendChild(titleElement);
    productElement.appendChild(descriptionElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(addToCartButton);
    productElement.appendChild(deleteButton);
    productContainer.appendChild(productElement);

    // Close the add product window
    window.close();

    // Display confirmation message
    window.alert('Product uploaded successfully!');
});
