document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad de Contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado.');
            contactForm.reset();
        });
    }

    // Funcionalidad de Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login exitoso.');
            loginForm.reset();
        });
    }

    // Funcionalidad de Registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registro exitoso.');
            registerForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const brandFilter = document.getElementById('brand-filter');
    const productList = document.querySelector('.product-list');

    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    brandFilter.addEventListener('change', filterProducts);

    function filterProducts() {
        const category = categoryFilter.value;
        const price = priceFilter.value;
        const brand = brandFilter.value;

        const products = productList.getElementsByClassName('product-item');

        for (const product of products) {
            const productCategory = product.getAttribute('data-category');
            const productPrice = parseInt(product.getAttribute('data-price'), 10);
            const productBrand = product.getAttribute('data-brand');

            let showProduct = true;

            if (category && category !== productCategory) {
                showProduct = false;
            }

            if (price) {
                const [minPrice, maxPrice] = price.split('-').map(Number);
                if (productPrice < minPrice || productPrice > maxPrice) {
                    showProduct = false;
                }
            }

            if (brand && brand !== productBrand) {
                showProduct = false;
            }

            product.style.display = showProduct ? 'block' : 'none';
        }
    }
});

// Función para alternar la visibilidad de los detalles del post
function toggleDetails(postId) {
    const postDetails = document.getElementById(postId);
    if (postDetails.style.display === "none" || postDetails.style.display === "") {
        postDetails.style.display = "block";
    } else {
        postDetails.style.display = "none";
    }
}

// Inicialización de los detalles del post para que estén ocultos inicialmente
document.addEventListener("DOMContentLoaded", function() {
    const postDetailsElements = document.querySelectorAll('.post-details');
    postDetailsElements.forEach(function(element) {
        element.style.display = "none";
    });
});

function filterProducts() {
    const category = document.getElementById("category-filter").value.toLowerCase();
    const price = document.getElementById("price-filter").value;
    const brand = document.getElementById("brand-filter").value.toLowerCase();
    const search = document.getElementById("search-bar").value.toLowerCase();

    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        const productCategory = product.getAttribute("data-category").toLowerCase();
        const productPrice = parseInt(product.getAttribute("data-price"));
        const productBrand = product.getAttribute("data-brand").toLowerCase();
        const productName = product.querySelector("h3").textContent.toLowerCase();

        let priceMatch = false;
        if (!price) {
            priceMatch = true;
        } else {
            const [minPrice, maxPrice] = price.split('-').map(Number);
            priceMatch = productPrice >= minPrice && productPrice <= maxPrice;
        }

        const matchesCategory = !category || productCategory === category;
        const matchesBrand = !brand || productBrand === brand;
        const matchesSearch = !search || productName.includes(search);

        if (matchesCategory && priceMatch && matchesBrand && matchesSearch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Añadir eventos a los filtros
document.getElementById("category-filter").addEventListener("change", filterProducts);
document.getElementById("price-filter").addEventListener("change", filterProducts);
document.getElementById("brand-filter").addEventListener("change", filterProducts);
document.getElementById("search-bar").addEventListener("input", filterProducts);

// Llamar a la función para filtrar los productos inicialmente
filterProducts();