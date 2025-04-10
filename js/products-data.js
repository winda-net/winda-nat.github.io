// 产品数据库
const productsData = {
    // 睾酮类产品
    "testosterone-base": {
        id: "testosterone-base",
        name: "Testosterone Base Powder",
        categoryId: "testosterone",
        categoryName: "Testosterone Powder",
        description: "Professional-grade Raw Testosterone Base Powder for bodybuilding and performance enhancement.",
        cas: "58-22-0",
        purity: "99%+",
        specifications: [
            { key: "Appearance", value: "White crystalline powder" },
            { key: "Purity", value: "99% min" },
            { key: "Half-life", value: "2-4 hours" },
            { key: "Storage", value: "Store in a cool dry place" }
        ],
        prices: [
            { package: "100g", price: "$145" },
            { package: "500g", price: "$450" },
            { package: "1kg", price: "$700" }
        ],
        image: "images/products/testosterone/testosterone-base-powder.jpg",
        details: `<h4>Testosterone Base Powder</h4>
                <p>Testosterone is the primary male sex hormone that plays a key role in the development of male reproductive tissues and promoting secondary sexual characteristics like increased muscle and bone mass, and hair growth.</p>
                <p>Our Testosterone Base Powder is manufactured to the highest pharmaceutical standards with a minimum purity of 99%. It's ideal for performance enhancement, hormone replacement therapy, and bodybuilding purposes.</p>
                <h5>Benefits:</h5>
                <ul>
                    <li>Increases muscle mass and strength</li>
                    <li>Improves bone density</li>
                    <li>Enhances recovery and performance</li>
                    <li>Boosts energy levels and stamina</li>
                    <li>Improves mood and cognitive function</li>
                </ul>`,
        usage: `<h4>Usage Information</h4>
               <p>Testosterone Base is typically administered via injection and has a relatively short half-life of 2-4 hours.</p>
               <p>For medical purposes, dosage should be determined by a healthcare professional based on individual needs and health status.</p>
               <p>For bodybuilding and performance enhancement:</p>
               <ul>
                   <li>Typical dosage ranges from 50-100mg every other day</li>
                   <li>Cycles typically last 8-12 weeks</li>
                   <li>Post Cycle Therapy (PCT) is recommended following use</li>
               </ul>
               <p><strong>Note:</strong> This information is provided for educational purposes only. Always consult with a healthcare professional before beginning any hormone therapy.</p>`,
        relatedProducts: ["testosterone-enanthate", "testosterone-propionate", "testosterone-cypionate"]
    },
    
    "testosterone-enanthate": {
        id: "testosterone-enanthate",
        name: "Testosterone Enanthate Powder",
        categoryId: "testosterone",
        categoryName: "Testosterone Powder",
        description: "High-quality Testosterone Enanthate powder for superior muscle growth and strength enhancement.",
        cas: "315-37-7",
        purity: "99%+",
        specifications: [
            { key: "Appearance", value: "White or slightly yellow crystalline powder" },
            { key: "Purity", value: "99% min" },
            { key: "Half-life", value: "7-10 days" },
            { key: "Storage", value: "Store in a cool dry place" }
        ],
        prices: [
            { package: "100g", price: "$135" },
            { package: "500g", price: "$400" },
            { package: "1kg", price: "$630" }
        ],
        image: "images/products/testosterone/testosterone-enanthate-powder.jpg",
        details: `<h4>Testosterone Enanthate Powder</h4>
                <p>Testosterone Enanthate is a slow-acting esterified variant of testosterone, designed to slowly release testosterone into the bloodstream over several days.</p>
                <p>Our Testosterone Enanthate Powder is manufactured to pharmaceutical standards with a minimum purity of 99%. It's one of the most popular forms of testosterone for TRT (Testosterone Replacement Therapy) and bodybuilding due to its convenient dosing schedule.</p>
                <h5>Benefits:</h5>
                <ul>
                    <li>Slower release compared to Testosterone Base</li>
                    <li>Less frequent injections required (typically once or twice per week)</li>
                    <li>Stable blood levels of testosterone</li>
                    <li>Significant muscle mass and strength gains</li>
                    <li>Improved recovery and performance</li>
                </ul>`,
        usage: `<h4>Usage Information</h4>
               <p>Testosterone Enanthate is administered via intramuscular injection and has a half-life of approximately 7-10 days.</p>
               <p>For medical purposes, dosage should be determined by a healthcare professional based on individual needs and health status.</p>
               <p>For bodybuilding and performance enhancement:</p>
               <ul>
                   <li>Typical dosage ranges from 200-500mg per week</li>
                   <li>Typically injected once or twice per week</li>
                   <li>Cycles typically last 12-16 weeks</li>
                   <li>Post Cycle Therapy (PCT) is recommended following use</li>
               </ul>
               <p><strong>Note:</strong> This information is provided for educational purposes only. Always consult with a healthcare professional before beginning any hormone therapy.</p>`,
        relatedProducts: ["testosterone-base", "testosterone-cypionate", "testosterone-propionate"]
    },
    
    // 更多产品数据按此格式添加...
};

// 分类数据
const categoriesData = {
    "testosterone": {
        id: "testosterone",
        name: "Testosterone Powder",
        description: "High-quality testosterone products for bodybuilding and performance enhancement.",
        url: "products.html?category=testosterone"
    },
    "trenbolone": {
        id: "trenbolone",
        name: "Trenbolone Powder",
        description: "Premium trenbolone products for advanced bodybuilding results.",
        url: "products.html?category=trenbolone"
    },
    // 其他分类...
}; 