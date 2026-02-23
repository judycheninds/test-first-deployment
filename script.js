const products = [
    { id: 1, player: "Victor Wembanyama", desc: "2023 Panini Prizm Silver Rookie. The most hyped prospect in decades.", price: "$2,500.00", grade: "PSA 10", type: "PRIZM", image: "images/card_wemby.png", series: "Panini Prizm", era: "Ultra Modern" },
    { id: 2, player: "Michael Jordan", desc: "1986 Fleer Rookie #57. The ultimate holy grail of basketball cards.", price: "$150,000.00", grade: "PSA 10", type: "ROOKIE", image: "images/jordan.png", series: "Fleer", era: "Vintage" },
    { id: 3, player: "LeBron James", desc: "2003 Topps Chrome Refractor Rookie. Flawless chrome finish.", price: "$35,000.00", grade: "BGS 9.5+", type: "ROOKIE", image: "images/lebron.png", series: "Topps Chrome", era: "Modern" },
    { id: 4, player: "Stephen Curry", desc: "2009 National Treasures RPA /99. Iconic game-worn patch autograph.", price: "$85,000.00", grade: "BGS 9", type: "AUTO/PATCH", image: "images/curry.png", series: "National Treasures", era: "Modern" },
    { id: 5, player: "Luka Doncic", desc: "2018 Panini Prizm Silver Rookie. A modern cornerstone.", price: "$1,800.00", grade: "PSA 10", type: "PRIZM", image: "images/doncic.png", series: "Panini Prizm", era: "Ultra Modern" },
    { id: 6, player: "Kevin Durant", desc: "2007 Topps Chrome Gold Refractor /50. Rare debut parallel.", price: "$12,450.00", grade: "PSA 9", type: "NUM /50", image: "images/durant.png", series: "Topps Chrome", era: "Modern" },
    { id: 7, player: "Anthony Edwards", desc: "2020 Panini Select Tie-Dye Prizm /25. High-flying superstar.", price: "$3,200.00", grade: "PSA 10", type: "NUM /25", image: "images/card_edwards.png", series: "Panini Select", era: "Ultra Modern" },
    { id: 8, player: "Kobe Bryant", desc: "1996 Topps Chrome Rookie. The Black Mamba's legendary start.", price: "$42,000.00", grade: "BGS 9.5+", type: "ROOKIE", image: "images/cat_vintage.png", series: "Topps Chrome", era: "Modern" },
    { id: 9, player: "Giannis Antetokounmpo", desc: "2013 Panini Prizm Silver Rookie. The Greek Freak's premier card.", price: "$4,500.00", grade: "PSA 10", type: "PRIZM", image: "images/card_giannis.png", series: "Panini Prizm", era: "Modern" },
    { id: 10, player: "Allen Iverson", desc: "1996 Skybox Premium Rubies. Insanely rare 90s insert.", price: "$15,000.00", grade: "PSA 9", type: "INSERT", image: "images/cat_inserts.png", series: "Skybox Premium", era: "Modern" },
    { id: 11, player: "Magic Johnson", desc: "1980 Topps Rookie (with Bird/Erving). Historic trio.", price: "$40,000.00", grade: "SGC 10", type: "VINTAGE", image: "images/cat_vintage.png", series: "Topps Chrome", era: "Vintage" },
    { id: 12, player: "Shai Gilgeous-Alexander", desc: "2018 National Treasures RPA /99. MVP caliber talent.", price: "$8,500.00", grade: "BGS 9.5+", type: "AUTO/PATCH", image: "images/card_sga.png", series: "National Treasures", era: "Ultra Modern" },
    { id: 13, player: "Shaquille O'Neal", desc: "1992 Fleer Rookie. The most dominant big man debut.", price: "$800.00", grade: "PSA 10", type: "ROOKIE", image: "images/jordan.png", series: "Fleer", era: "Modern" },
    { id: 14, player: "Jayson Tatum", desc: "2017 Panini Prizm Green Pulsar /25. Elite Celtics franchise player.", price: "$6,500.00", grade: "PSA 10", type: "NUM /25", image: "images/card_tatum.png", series: "Panini Prizm", era: "Ultra Modern" },
    { id: 15, player: "Kareem Abdul-Jabbar", desc: "1969 Topps Rookie. Historic tall-boy vintage grail.", price: "$65,000.00", grade: "PSA 9", type: "VINTAGE", image: "images/card_kareem.png", series: "Other", era: "Vintage" },
    { id: 16, player: "Jaden Ivey", desc: "2022 Panini Prizm Draft Picks Autograph. Premium high-end auto.", price: "$4,200.00", grade: "BGS 9", type: "AUTO/PATCH", image: "images/card_ivey.png", series: "Other", era: "Ultra Modern" },
    { id: 17, player: "Dwyane Wade", desc: "2003 Topps Chrome Refractor. Flash in his earliest form.", price: "$3,100.00", grade: "PSA 10", type: "ROOKIE", image: "images/lebron.png", series: "Topps Chrome", era: "Modern" },
    { id: 18, player: "Wilt Chamberlain", desc: "1961 Fleer Rookie. Legendary centurion scorer.", price: "$95,000.00", grade: "SGC 10", type: "VINTAGE", image: "images/cat_vintage.png", series: "Fleer", era: "Vintage" },
    { id: 19, player: "Zion Williamson", desc: "2019 Panini Select Zebra Prizm. SSP short-print parallel.", price: "$3,500.00", grade: "Raw (Ungraded)", type: "INSERT", image: "images/cat_rookie.png", series: "Panini Select", era: "Ultra Modern" },
    { id: 20, player: "Larry Bird", desc: "1986 Fleer Base. Second year classic design.", price: "$1,500.00", grade: "PSA 9", type: "BASE", image: "images/cat_vintage.png", series: "Fleer", era: "Vintage" }
];

const grid = document.getElementById('productGrid');

function renderProducts(cards = products) {
    grid.innerHTML = '';

    const countEl = document.getElementById('result-count');
    if (countEl) countEl.textContent = cards.length;

    cards.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // Add staggered animation delay
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';

        card.innerHTML = `
            <div class="card-image-wrapper">
                <div class="card-badges">
                    <span class="badge-grade">${product.grade}</span>
                    <span class="badge-type">${product.type}</span>
                </div>
                <img src="${product.image}" alt="${product.player}" class="card-image">
            </div>
            <div class="card-details">
                <h2 class="card-title">${product.player}</h2>
                <p class="card-desc">${product.desc}</p>
                <div class="card-footer">
                    <div class="card-price-container">
                        <span class="price-label">Current Value</span>
                        <span class="card-price">${product.price}</span>
                    </div>
                    <button class="add-btn" aria-label="Add to cart">+</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Add simple keyframe animation dynamically via stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const filters = document.querySelector('.sidebar-filters');
    if (filters) {
        filters.addEventListener('change', () => {
            const checkboxes = Array.from(document.querySelectorAll('.sidebar-filters input[type="checkbox"]:checked'));
            const checkedValues = checkboxes.map(cb => cb.parentElement.textContent.trim());

            if (checkedValues.length === 0) {
                renderProducts(products);
                return;
            }

            const filtered = products.filter(p => {
                return checkedValues.some(val =>
                    p.player.includes(val) ||
                    p.series.includes(val) ||
                    p.grade.includes(val) ||
                    p.era.includes(val)
                );
            });
            renderProducts(filtered);
        });
    }
});

// Interactivity for Demo purposes
let cartCount = 0;
const cartBtn = document.getElementById('cart-btn');

document.body.addEventListener('click', (e) => {
    // Add to cart
    if (e.target.closest('.add-btn')) {
        const btn = e.target.closest('.add-btn');
        btn.innerHTML = '✓';
        btn.style.backgroundColor = 'var(--accent-color)';
        btn.style.color = '#000';

        cartCount++;
        cartBtn.setAttribute('data-count', cartCount);

        setTimeout(() => {
            btn.innerHTML = '+';
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 1500);
    }

    // Start Browsing
    if (e.target.closest('.primary-btn')) {
        document.querySelector('.storefront').scrollIntoView({ behavior: 'smooth' });
    }

    // Sell a Card
    if (e.target.closest('.secondary-btn')) {
        window.location.href = 'sell.html';
    }

    // Clear All Filters
    if (e.target.closest('.clear-btn')) {
        const checkboxes = document.querySelectorAll('.sidebar-filters input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        const priceRange = document.getElementById('price-range');
        if (priceRange) priceRange.value = priceRange.max;
        renderProducts(products);
    }

    // Load More Cards
    if (e.target.closest('.load-more')) {
        const btn = e.target.closest('.load-more');
        const originalText = btn.textContent;
        btn.textContent = 'Loading...';
        btn.disabled = true;

        setTimeout(() => {
            // Append the first 3 products to simulate loading more
            const moreProducts = products.slice(0, 3);
            moreProducts.forEach((product, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
                card.style.opacity = '0';

                card.innerHTML = `
                    <div class="card-image-wrapper">
                        <div class="card-badges">
                            <span class="badge-grade">${product.grade}</span>
                            <span class="badge-type">${product.type}</span>
                        </div>
                        <img src="${product.image}" alt="${product.player}" class="card-image">
                    </div>
                    <div class="card-details">
                        <h2 class="card-title">${product.player}</h2>
                        <p class="card-desc">${product.desc}</p>
                        <div class="card-footer">
                            <div class="card-price-container">
                                <span class="price-label">Current Value</span>
                                <span class="card-price">${product.price}</span>
                            </div>
                            <button class="add-btn" aria-label="Add to cart">+</button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            btn.textContent = originalText;
            btn.disabled = false;

            // Update results count
            const countEl = document.getElementById('result-count');
            if (countEl) countEl.textContent = document.querySelectorAll('.card').length;
        }, 800);
    }

    // Sign In Button
    if (e.target.closest('.login-btn')) {
        alert('Sign-In modal would appear here!');
    }
});
