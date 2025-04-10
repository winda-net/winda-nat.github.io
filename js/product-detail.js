document.addEventListener('DOMContentLoaded', function() {
    // 获取URL中的产品ID参数
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // 如果未找到产品ID，重定向到产品列表页
    if (!productId || !productsData[productId]) {
        window.location.href = 'products.html';
        return;
    }
    
    // 获取产品数据
    const product = productsData[productId];
    const category = categoriesData[product.categoryId];
    
    // 设置页面标题和meta描述
    document.title = `${product.name} - Winda Pharm`;
    document.getElementById('product-meta-desc').content = product.description;
    
    // 填充产品基本信息
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    
    // 设置面包屑导航
    document.getElementById('product-category-crumb').querySelector('a').textContent = category.name;
    document.getElementById('product-category-crumb').querySelector('a').href = category.url;
    document.getElementById('product-name-crumb').textContent = product.name;
    
    // 设置CAS号和纯度
    if (product.cas) {
        document.getElementById('product-cas').textContent = `CAS: ${product.cas}`;
    } else {
        document.getElementById('product-cas').style.display = 'none';
    }
    
    if (product.purity) {
        document.getElementById('product-purity').textContent = `Purity: ${product.purity}`;
    } else {
        document.getElementById('product-purity').style.display = 'none';
    }
    
    // 填充规格信息
    const specsContainer = document.getElementById('product-specs');
    specsContainer.innerHTML = '';
    
    product.specifications.forEach(spec => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td width="40%"><strong>${spec.key}</strong></td>
            <td>${spec.value}</td>
        `;
        specsContainer.appendChild(row);
    });
    
    // 填充价格信息
    const pricesContainer = document.getElementById('product-prices');
    pricesContainer.innerHTML = '';
    
    product.prices.forEach(price => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${price.package}</td>
            <td>${price.price}</td>
        `;
        pricesContainer.appendChild(row);
    });
    
    // 填充详细信息和使用说明
    document.getElementById('product-details-content').innerHTML = product.details;
    document.getElementById('product-usage-content').innerHTML = product.usage;
    
    // 填充相关产品
    const relatedContainer = document.getElementById('related-products-container');
    relatedContainer.innerHTML = '';
    
    if (product.relatedProducts && product.relatedProducts.length > 0) {
        product.relatedProducts.forEach(relatedId => {
            if (productsData[relatedId]) {
                const related = productsData[relatedId];
                const productCol = document.createElement('div');
                productCol.className = 'col-md-3 col-sm-6 mb-4';
                productCol.innerHTML = `
                    <div class="card h-100 product-card">
                        <img src="${related.image}" class="card-img-top" alt="${related.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${related.name}</h5>
                            <a href="product-detail.html?id=${related.id}" class="btn btn-sm btn-outline-primary mt-auto">View Details</a>
                        </div>
                    </div>
                `;
                relatedContainer.appendChild(productCol);
            }
        });
    } else {
        relatedContainer.innerHTML = '<p>No related products.</p>';
    }
}); 