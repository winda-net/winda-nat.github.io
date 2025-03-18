document.addEventListener('DOMContentLoaded', function() {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Update page title based on category
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        if (category) {
            switch(category) {
                case 'hormone':
                    categoryTitle.textContent = 'Hormone Steroids';
                    break;
                case 'testosterone':
                    categoryTitle.textContent = 'Testosterone Products';
                    break;
                case 'trenbolone':
                    categoryTitle.textContent = 'Trenbolone Products';
                    break;
                case 'nandrolone':
                    categoryTitle.textContent = 'Nandrolone Products';
                    break;
                case 'boldenone':
                    categoryTitle.textContent = 'Boldenone Products';
                    break;
                case 'drostanolone':
                    categoryTitle.textContent = 'Drostanolone Products';
                    break;
                case 'oral':
                    categoryTitle.textContent = 'Oral Steroids';
                    break;
                case 'injectable':
                    categoryTitle.textContent = 'Injectable Steroids';
                    break;
                case 'cosmetic':
                    categoryTitle.textContent = 'Cosmetic Additives';
                    break;
                case 'health':
                    categoryTitle.textContent = 'Health Products';
                    break;
                default:
                    categoryTitle.textContent = 'All Products';
            }
        } else {
            categoryTitle.textContent = 'All Products';
        }
    }
    
    // Update active category in sidebar
    const categoryLinks = document.querySelectorAll('.category-list a');
    categoryLinks.forEach(link => {
        link.classList.remove('active');
        const linkCategory = link.getAttribute('href').split('=')[1];
        if ((category && linkCategory === category) || (!category && linkCategory === 'all')) {
            link.classList.add('active');
        }
    });
    
    // Load products (this would normally come from a database or API)
    loadProducts(category);
});

function loadProducts(category) {
    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Testosterone Base Powder',
            image: 'product1.jpg',
            description: 'High-purity active ingredient, suitable for medical and bodybuilding fields',
            category: 'testosterone',
            purity: '99%+',
            cas: '58-22-0'
        },
        {
            id: 2,
            name: 'Testosterone Enanthate',
            image: 'product2.jpg',
            description: 'Professional-grade active ingredient, quality guaranteed',
            category: 'testosterone',
            purity: '99%+',
            cas: '315-37-7'
        },
        {
            id: 3,
            name: 'Trenbolone Acetate',
            image: 'product3.jpg',
            description: 'Highly effective active ingredient, suitable for professional bodybuilding',
            category: 'trenbolone',
            purity: '99%+',
            cas: '10161-34-9'
        },
        {
            id: 4,
            name: 'Anavar',
            image: 'product4.jpg',
            description: 'Professional-grade active ingredient, quality guaranteed',
            category: 'oral',
            purity: '99%+',
            cas: '53-39-4'
        },
        {
            id: 5,
            name: 'Cosmetic Additives',
            image: 'product5.jpg',
            description: 'High-quality cosmetic raw materials, suitable for various cosmetic productions',
            category: 'cosmetic',
            purity: '99%+',
            cas: 'Various'
        },
        {
            id: 6,
            name: 'Health Supplements',
            image: 'product6.jpg',
            description: 'Supplement raw materials designed for health and bodybuilding',
            category: 'health',
            purity: '99%+',
            cas: 'Various'
        },
        {
            id: 7,
            name: 'Testosterone Propionate',
            image: 'product7.jpg',
            description: 'High-quality active ingredient, suitable for professional medical applications',
            category: 'testosterone',
            purity: '99%+',
            cas: '57-85-2'
        },
        {
            id: 8,
            name: 'Nandrolone Phenylpropionate',
            image: 'product8.jpg',
            description: 'Professional-grade active ingredient, quality guaranteed',
            category: 'nandrolone',
            purity: '99%+',
            cas: '62-90-8'
        },
        {
            id: 9,
            name: 'Boldenone Undecylenate',
            image: 'product9.jpg',
            description: 'Professional-grade active ingredient, quality guaranteed',
            category: 'boldenone',
            purity: '99%+',
            cas: '13103-34-9'
        },
        {
            id: 10,
            name: 'Nandrolone Decanoate',
            image: 'product10.jpg',
            description: 'Professional medical-grade active ingredient, quality guaranteed',
            category: 'nandrolone',
            purity: '99%+',
            cas: '360-70-3'
        },
        {
            id: 11,
            name: 'Methandienone',
            image: 'product11.jpg',
            description: 'Professional-grade oral steroid, quality guaranteed',
            category: 'oral',
            purity: '99%+',
            cas: '72-63-9'
        },
        {
            id: 12,
            name: 'Masteron',
            image: 'product12.jpg',
            description: 'Professional-grade drostanolone propionate, high quality',
            category: 'drostanolone',
            purity: '99%+',
            cas: '521-12-0'
        }
    ];
    
    // Filter products by category if specified
    let filteredProducts = products;
    if (category && category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Get product list container
    const productsList = document.getElementById('productsList');
    if (!productsList) return;
    
    // Clear existing content
    productsList.innerHTML = '';
    
    // Add products to the list
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-lg-4 col-md-6';
            productCard.innerHTML = `
                <div class="product-card">
                    <img src="images/${product.image}" alt="${product.name}" class="img-fluid">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-meta">
                            <span class="badge bg-primary">Purity: ${product.purity}</span>
                            <span class="badge bg-success">CAS: ${product.cas}</span>
                        </div>
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary mt-3">View Details</a>
                    </div>
                </div>
            `;
            productsList.appendChild(productCard);
        });
    } else {
        productsList.innerHTML = '<div class="col-12"><p class="text-center">No products found in this category.</p></div>';
    }
} 