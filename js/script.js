document.addEventListener('DOMContentLoaded', function() {
    // 联系我们浮窗功能
    const contactBtn = document.getElementById('contactBtn');
    const closeContactBtn = document.getElementById('closeContactBtn');
    const contactModal = document.getElementById('contactModal');
    
    if (contactBtn && closeContactBtn && contactModal) {
        contactBtn.addEventListener('click', function() {
            contactModal.classList.toggle('show');
        });
        
        closeContactBtn.addEventListener('click', function() {
            contactModal.classList.remove('show');
        });
    }
    
    // 点击页面其他区域关闭模态框
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.contact-float') && !e.target.closest('.contact-modal')) {
            contactModal.classList.remove('show');
        }
    });
    
    // 导航栏下拉菜单
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (window.innerWidth > 991) {
            dropdown.addEventListener('mouseenter', function() {
                dropdownMenu.classList.add('show');
            });
            
            dropdown.addEventListener('mouseleave', function() {
                dropdownMenu.classList.remove('show');
            });
        }
    });
    
    // 产品侧边栏分类展开
    const categoryItems = document.querySelectorAll('.category-list > li');
    
    categoryItems.forEach(item => {
        const subcategory = item.querySelector('.subcategory-list');
        if (subcategory) {
            const link = item.querySelector('a');
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 991) {
                    e.preventDefault();
                    subcategory.style.display = subcategory.style.display === 'block' ? 'none' : 'block';
                }
            });
        }
    });
    
    // 初始化触摸交互
    initTouchInteractions();
    
    // 初始化懒加载
    initLazyLoading();
    
    // 优化表单提交
    optimizeFormSubmission();
});

// 优化移动端触摸交互
function initTouchInteractions() {
    // 处理移动端下拉菜单
    if ('ontouchstart' in window) {
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = this.parentElement;
                const menu = parent.querySelector('.dropdown-menu');
                
                // 关闭其他打开的菜单
                document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                    if (openMenu !== menu) {
                        openMenu.classList.remove('show');
                    }
                });
                
                menu.classList.toggle('show');
            });
        });
        
        // 点击页面其他区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });
    }
}

// 图片懒加载
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 回退到传统的懒加载
        let lazyLoadThrottleTimeout;
        
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }
            
            lazyLoadThrottleTimeout = setTimeout(() => {
                const scrollTop = window.pageYOffset;
                
                lazyImages.forEach(img => {
                    if (img.offsetTop < window.innerHeight + scrollTop) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                    }
                });
                
                if (lazyImages.length === 0) {
                    document.removeEventListener('scroll', lazyLoad);
                    window.removeEventListener('resize', lazyLoad);
                    window.removeEventListener('orientationChange', lazyLoad);
                }
            }, 20);
        }
        
        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationChange', lazyLoad);
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// 优化滚动和调整大小事件
window.addEventListener('resize', debounce(function() {
    // 处理窗口大小变化
    if (window.innerWidth > 991) {
        document.querySelectorAll('.subcategory-list').forEach(list => {
            list.style.display = '';
        });
    }
}, 150));

// 优化表单提交
function optimizeFormSubmission() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const submitButton = form.querySelector('button[type="submit"]');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 提交中...';
            }
            
            // 简单的表单验证
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // 模拟表单提交
                setTimeout(() => {
                    alert('表单提交成功！我们将尽快与您联系。');
                    form.reset();
                    
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.innerHTML = '发送';
                    }
                }, 1000);
            } else {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = '发送';
                }
            }
        });
    });
}

// 注册Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker 注册成功:', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker 注册失败:', error);
      });
  });
} 