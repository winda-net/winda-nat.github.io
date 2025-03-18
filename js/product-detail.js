document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // 产品数据（实际项目中应从服务器获取）
    const products = [
        {
            id: 1,
            name: "庚酸睾酮",
            image: "images/product1.jpg",
            description: "庚酸睾酮是一种高纯度的活性药物成分，主要用于医疗和健美领域。我们的产品纯度高达99.5%以上，符合国际药典标准。",
            features: [
                "纯度高达99.5%以上",
                "符合USP/EP/BP药典标准",
                "稳定性好，储存期长",
                "溶解性优良"
            ],
            applications: "主要应用于医疗处方药物、健美补充剂和科研领域。",
            category: "hormone"
        },
        {
            id: 2,
            name: "癸酸诺龙",
            image: "images/product2.jpg",
            description: "癸酸诺龙是一种高品质的活性成分，广泛应用于专业医疗和健美领域。我们提供的产品纯度高，质量稳定。",
            features: [
                "纯度高达99%以上",
                "符合国际质量标准",
                "稳定性好",
                "效果显著"
            ],
            applications: "主要用于专业医疗处方和健美补充剂领域。",
            category: "hormone"
        },
        {
            id: 3,
            name: "醋酸群勃龙",
            image: "images/product3.jpg",
            description: "醋酸群勃龙是一种高效的活性成分，在健美和医疗领域有广泛应用。我们的产品质量稳定，效果可靠。",
            features: [
                "高纯度活性成分",
                "质量稳定可靠",
                "符合国际标准",
                "效果显著持久"
            ],
            applications: "主要应用于专业健美领域和医疗处方。",
            category: "hormone"
        },
        {
            id: 4,
            name: "Anavar",
            image: "images/product4.jpg",
            description: "Anavar是一种专业级别的活性成分，在健美和医疗领域广受欢迎。我们提供的产品纯度高，质量有保证。",
            features: [
                "高纯度活性成分",
                "质量稳定可靠",
                "效果显著",
                "安全性高"
            ],
            applications: "主要用于专业健美和医疗领域。",
            category: "hormone"
        },
        {
            id: 5,
            name: "化妆品添加剂",
            image: "images/product5.jpg",
            description: "我们提供多种高品质的化妆品添加剂，适用于各类化妆品生产。这些添加剂安全有效，符合国际化妆品原料标准。",
            features: [
                "安全无害",
                "效果显著",
                "稳定性好",
                "适用范围广"
            ],
            applications: "主要用于各类化妆品生产，如面霜、精华液、防晒霜等。",
            category: "cosmetic"
        },
        {
            id: 6,
            name: "健康补充剂",
            image: "images/product6.jpg",
            description: "我们提供多种健康补充剂原料，专为健康和健美设计。这些原料纯度高，效果显著，安全可靠。",
            features: [
                "高纯度原料",
                "效果显著",
                "安全可靠",
                "适用范围广"
            ],
            applications: "主要用于健康补充剂和运动营养品生产。",
            category: "health"
        },
        {
            id: 7,
            name: "丙酸睾酮",
            image: "images/product7.jpg",
            description: "丙酸睾酮是一种高品质的活性成分，适用于专业医疗领域。我们的产品纯度高，质量稳定。",
            features: [
                "高纯度活性成分",
                "符合国际标准",
                "稳定性好",
                "效果可靠"
            ],
            applications: "主要用于专业医疗领域和处方药物。",
            category: "hormone"
        },
        {
            id: 8,
            name: "抗衰老添加剂",
            image: "images/product8.jpg",
            description: "我们提供专业的抗衰老化妆品原料，效果显著。这些添加剂安全有效，能够明显改善皮肤状态。",
            features: [
                "抗氧化效果显著",
                "促进胶原蛋白生成",
                "改善皮肤弹性",
                "安全无刺激"
            ],
            applications: "主要用于抗衰老化妆品生产，如精华液、面霜等。",
            category: "cosmetic"
        },
        {
            id: 9,
            name: "蛋白质补充剂",
            image: "images/product9.jpg",
            description: "我们提供高品质的蛋白质原料，适用于健身补充剂。这些原料纯度高，易于吸收，效果显著。",
            features: [
                "高纯度蛋白质",
                "易于吸收",
                "氨基酸配比合理",
                "适合各类人群"
            ],
            applications: "主要用于运动营养品和健身补充剂生产。",
            category: "health"
        },
        {
            id: 10,
            name: "醋酸甲羟孕酮",
            image: "images/product10.jpg",
            description: "醋酸甲羟孕酮是一种专业医疗级别的活性成分，品质保证。我们的产品纯度高，质量稳定。",
            features: [
                "高纯度活性成分",
                "符合国际药典标准",
                "稳定性好",
                "效果可靠"
            ],
            applications: "主要用于专业医疗领域和处方药物。",
            category: "hormone"
        },
        {
            id: 11,
            name: "保湿添加剂",
            image: "images/product11.jpg",
            description: "我们提供高效的保湿化妆品原料，适用于各类护肤品。这些添加剂安全有效，保湿效果显著。",
            features: [
                "保湿效果持久",
                "安全无刺激",
                "适用范围广",
                "稳定性好"
            ],
            applications: "主要用于各类护肤品生产，如面霜、乳液、精华液等。",
            category: "cosmetic"
        },
        {
            id: 12,
            name: "氨基酸补充剂",
            image: "images/product12.jpg",
            description: "我们提供专业级别的氨基酸原料，适用于运动营养品。这些原料纯度高，易于吸收，效果显著。",
            features: [
                "高纯度氨基酸",
                "易于吸收",
                "配比科学合理",
                "适合运动人群"
            ],
            applications: "主要用于运动营养品和健身补充剂生产。",
            category: "health"
        }
    ];
    
    // 根据ID查找产品
    const product = products.find(p => p.id == productId);
    
    if (product) {
        // 更新页面标题
        document.title = `${product.name} - 高品质活性药物成分 | Winda Pharm`;
        
        // 更新产品详情
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productBreadcrumb').textContent = product.name;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = `${product.name} - 高品质活性药物成分 - Winda Pharm`;
        document.getElementById('productDescription').textContent = product.description;
        
        // 更新产品特点
        const featuresUl = document.getElementById('productFeatures');
        featuresUl.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresUl.appendChild(li);
        });
        
        // 更新应用领域
        document.getElementById('productApplications').textContent = product.applications;
        
        // 设置订单表单的产品信息
        document.getElementById('orderProductId').value = product.id;
        document.getElementById('orderProductName').value = product.name;
        
        // 加载相关产品
        loadRelatedProducts(product);
        
        // 添加动态 meta 描述
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', `${product.name} - ${product.description.substring(0, 150)}... | Winda Pharm 专业供应商`);
        }
        
        // 添加动态 canonical 链接
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', `https://您的网站域名/product-detail.html?id=${product.id}`);
        }
        
        // 更新产品详细信息
        document.getElementById('productNameInContent').textContent = product.name;
        
        // 添加长描述（如果有）
        const longDescription = product.longDescription || `${product.name}是一种高品质的活性药物成分，广泛应用于医疗和健美领域。我们的${product.name}产品纯度高达99%以上，符合国际药典标准。作为专业的活性药物成分供应商，Winda Pharm 致力于为客户提供最优质的产品和服务。我们的产品经过严格的质量控制和测试，确保每一批产品都达到最高标准。`;
        document.getElementById('productLongDescription').textContent = longDescription;
        
        // 更新技术规格
        if (product.casNumber) document.getElementById('productCasNumber').textContent = product.casNumber;
        if (product.formula) document.getElementById('productFormula').textContent = product.formula;
        if (product.weight) document.getElementById('productWeight').textContent = product.weight;
        if (product.purity) document.getElementById('productPurity').textContent = product.purity;
        if (product.appearance) document.getElementById('productAppearance').textContent = product.appearance;
        
        // 添加结构化数据
        updateStructuredData(product);
        
        // 添加面包屑结构化数据
        addBreadcrumbStructuredData(product);
    } else {
        // 产品不存在，重定向到产品列表页
        window.location.href = 'products.html';
    }
    
    // 加载相关产品
    function loadRelatedProducts(currentProduct) {
        const relatedContainer = document.getElementById('relatedProducts');
        relatedContainer.innerHTML = '';
        
        // 获取同类别的其他产品
        const relatedProducts = products.filter(p => 
            p.category === currentProduct.category && p.id !== currentProduct.id
        ).slice(0, 3); // 最多显示3个相关产品
        
        relatedProducts.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <div class="product-card">
                    <img src="images/placeholder.jpg" data-src="${product.image}" alt="${product.name} - 相关产品 - Winda Pharm" class="img-fluid lazy-load">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description.substring(0, 60)}...</p>
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary">查看详情</a>
                    </div>
                </div>
            `;
            relatedContainer.appendChild(col);
        });
    }
    
    // 初始化 EmailJS
    (function() {
        emailjs.init("YOUR_USER_ID"); // 替换为您的 EmailJS 用户 ID
    })();

    // 生成随机验证码
    function generateCaptcha() {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return captcha;
    }

    // 设置验证码
    function setCaptcha() {
        const captchaText = generateCaptcha();
        document.getElementById('captchaText').textContent = captchaText;
        // 存储验证码以便验证
        sessionStorage.setItem('captcha', captchaText);
    }

    // 初始化验证码
    const captchaImage = document.getElementById('captchaImage');
    const refreshCaptcha = document.getElementById('refreshCaptcha');
    
    if (captchaImage && refreshCaptcha) {
        setCaptcha();
        
        refreshCaptcha.addEventListener('click', function() {
            setCaptcha();
        });
    }
    
    // 表单验证
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            // 获取所有必填字段
            const requiredInputs = orderForm.querySelectorAll('[required]');
            let isValid = true;
            
            // 验证每个必填字段
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    e.preventDefault(); // 阻止表单提交
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            // 如果验证失败，显示错误消息
            if (!isValid) {
                alert('请填写所有必填字段');
            }
            
            // 验证码验证
            const captchaInput = document.getElementById('captcha');
            const storedCaptcha = sessionStorage.getItem('captcha');
            
            if (captchaInput && storedCaptcha) {
                if (captchaInput.value.toUpperCase() !== storedCaptcha) {
                    e.preventDefault();
                    captchaInput.classList.add('is-invalid');
                    alert('验证码错误，请重新输入');
                    setCaptcha(); // 刷新验证码
                    return false;
                } else {
                    captchaInput.classList.remove('is-invalid');
                }
            }
        });
        
        // 当产品加载完成后，设置表单中的产品信息
        if (product) {
            document.getElementById('orderProductId').value = product.id;
            document.getElementById('orderProductName').value = product.name;
        }
    }

    // 更新结构化数据
    function updateStructuredData(product) {
        const structuredData = {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": window.location.origin + '/' + product.image,
            "description": product.description,
            "brand": {
                "@type": "Brand",
                "name": "Winda Pharm"
            },
            "offers": {
                "@type": "Offer",
                "url": window.location.href,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
            }
        };
        
        // 创建或更新结构化数据脚本标签
        let script = document.getElementById('structuredData');
        if (!script) {
            script = document.createElement('script');
            script.id = 'structuredData';
            script.type = 'application/ld+json';
            document.body.appendChild(script);
        }
        
        script.textContent = JSON.stringify(structuredData);
    }

    // 添加面包屑结构化数据
    function addBreadcrumbStructuredData(product) {
        const breadcrumbData = {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "首页",
                    "item": window.location.origin + "/index.html"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "产品介绍",
                    "item": window.location.origin + "/products.html"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": product.name,
                    "item": window.location.href
                }
            ]
        };
        
        let script = document.getElementById('breadcrumbData');
        if (!script) {
            script = document.createElement('script');
            script.id = 'breadcrumbData';
            script.type = 'application/ld+json';
            document.body.appendChild(script);
        }
        
        script.textContent = JSON.stringify(breadcrumbData);
    }
}); 