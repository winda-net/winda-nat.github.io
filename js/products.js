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
        // 激素类固醇
        { id: 1, name: "Testosterone Enanthate", category: "hormone", image: "images/product1.jpg", description: "High-purity active ingredient, suitable for medical and bodybuilding fields", price: "$100/g", purity: ">99%" },
        { id: 2, name: "Nandrolone Decanoate", category: "hormone", image: "images/product2.jpg", description: "Professional-grade active ingredient, quality guaranteed", price: "$120/g", purity: ">99%" },
        { id: 3, name: "Trenbolone Acetate", category: "hormone", image: "images/product3.jpg", description: "Highly effective active ingredient, suitable for professional bodybuilding", price: "$150/g", purity: ">99%" },
        { id: 4, name: "Boldenone Undecylenate", category: "boldenone", image: "images/product4.jpg", description: "High-quality active ingredient, suitable for medical applications", price: "$130/g", purity: ">99%" },
        { id: 5, name: "Drostanolone Propionate", category: "drostanolone", image: "images/product5.jpg", description: "Professional-grade active ingredient, quality guaranteed", price: "$140/g", purity: ">99%" },
        { id: 6, name: "Methenolone Enanthate", category: "methenolone", image: "images/product6.jpg", description: "High-purity active ingredient, suitable for medical and bodybuilding fields", price: "$110/g", purity: ">99%" },
        // 口服类固醇
        { id: 7, name: "Methandienone", category: "oral", image: "images/product7.jpg", description: "Professional-grade active ingredient, quality guaranteed", price: "$12-15/g", purity: "99.5%" },
        { id: 8, name: "Stanozolol", category: "oral", image: "images/product8.jpg", description: "Highly effective active ingredient, suitable for professional bodybuilding", price: "$18-22/g", purity: "99.0%" },
        { id: 9, name: "Oxandrolone", category: "oral", image: "images/product9.jpg", description: "High-purity active ingredient, suitable for medical and bodybuilding fields", price: "$25-30/g", purity: "99.5%" },
        // SARMs
        { id: 10, name: "Ostarine", category: "sarms", image: "images/product10.jpg", description: "High-quality SARM powder, suitable for research purposes", price: "$50/g", purity: ">99%" },
        { id: 11, name: "Ligandrol", category: "sarms", image: "images/product11.jpg", description: "Professional-grade SARM powder, quality guaranteed", price: "$60/g", purity: ">99%" },
        // 化妆品添加剂
        { id: 12, name: "Hyaluronic Acid", category: "cosmetic", image: "images/product12.jpg", description: "High-purity cosmetic additive, suitable for skincare products", price: "$50/g", purity: "99.0%" },
        { id: 13, name: "Retinol", category: "cosmetic", image: "images/product13.jpg", description: "Professional-grade cosmetic additive, quality guaranteed", price: "$60/g", purity: "99.5%" },
        // 健康产品
        { id: 14, name: "Vitamin C", category: "health", image: "images/product14.jpg", description: "High-purity health supplement, suitable for dietary use", price: "$10/g", purity: "99.0%" },
        { id: 15, name: "Coenzyme Q10", category: "health", image: "images/product15.jpg", description: "Professional-grade health supplement, quality guaranteed", price: "$20/g", purity: "99.5%" }
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
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-meta">
                            <span class="badge bg-primary">Purity: ${product.purity}</span>
                            <span class="badge bg-success">Price: ${product.price}</span>
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