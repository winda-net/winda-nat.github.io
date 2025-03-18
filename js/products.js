document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const subcategory = urlParams.get('subcategory');
    
    // 更新页面标题和面包屑
    if (category) {
        const categoryTitle = document.getElementById('categoryTitle');
        const breadcrumbCategory = document.getElementById('breadcrumbCategory');
        
        let title = '';
        
        switch(category) {
            case 'hormone':
                title = '激素类固醇';
                break;
            case 'testosterone':
                title = '睾酮类产品';
                break;
            case 'trenbolone':
                title = '群勃龙类产品';
                break;
            case 'nandrolone':
                title = '诺龙类产品';
                break;
            case 'oral':
                title = '口服类固醇';
                break;
            case 'injectable':
                title = '注射类固醇';
                break;
            case 'cosmetic':
                title = '化妆品添加剂';
                break;
            case 'health':
                title = '健康产品';
                break;
            default:
                title = '产品介绍';
        }
        
        if (categoryTitle) categoryTitle.textContent = title;
        if (breadcrumbCategory) breadcrumbCategory.textContent = title;
    }
    
    // 产品筛选
    const productItems = document.querySelectorAll('#productList > div');
    
    if (category && productItems.length > 0) {
        let visibleCount = 0;
        
        productItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const itemSubcategory = item.getAttribute('data-subcategory');
            
            if (category === 'all' || itemCategory === category || (subcategory && itemSubcategory === subcategory)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // 更新产品计数
        const productCount = document.getElementById('productCount');
        if (productCount) {
            productCount.textContent = `显示 ${visibleCount} 个产品`;
        }
    }
    
    // 高亮显示当前分类
    const categoryLinks = document.querySelectorAll('.category-list a');
    
    categoryLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if ((category && href.includes(`category=${category}`)) || 
            (subcategory && href.includes(`subcategory=${subcategory}`)) ||
            (!category && !subcategory && href === 'products.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}); 