
// dishes-data.js5
const dishes = [
  {
    id: 1,
    title: "Grand KMC Burger",
    description: "Angus beef patty with caramelized onions and secret sauce",
    price: "2,500 XAF",
    category: "burger",
    image: "https://i.pinimg.com/736x/e8/c2/12/e8c2127a5730742aee1e227f1ee0b784.jpg"
  },
  {
    id: 2,
    title: "Buea Spicy Grill",
    description: "Local spices marinated chicken with plantains",
    price: "3,200 XAF",
    category: "local",
    image: "https://i.pinimg.com/736x/25/48/67/2548670de1705009c8e1f5b94a82f0b8.jpg"
  },
  {
    id: 3,
    title: "Crispy Fries Basket",
    description: "Golden crispy fries with signature seasoning",
    price: "1,500 XAF",
    category: "side",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713"
  },
  {
    id: 4,
    title: "Double Cheese Delight",
    description: "Two beef patties with triple cheese blend",
    price: "3,800 XAF",
    category: "burger",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b"
  },
  {
    id: 5,
    title: "Tropical Smoothie",
    description: "Fresh mango-pineapple blend with mint",
    price: "1,800 XAF",
    category: "side",
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82"
  },
  {
    id: 6,
    title: "Ndolé Special",
    description: "Traditional bitterleaf stew with plantains",
    price: "2,900 XAF",
    category: "local",
    image: "https://i.pinimg.com/736x/8c/b0/77/8cb077e8f26299555a5ace4e9f796fc6.jpg"
  }
];

class KMCRestaurant {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('kmcCart')) || [];
        this.stripe = null;
        this.elements = null;
        this.cardElement = null;

        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.updateCartCount();
        this.handleNavigation();
        this.initializeStripe();
        this.renderDishes();
    }

    setupEventListeners() {
        // Mobile Menu
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.toggle('hidden');
        });

        // Cart
        document.getElementById('cartButton').addEventListener('click', () => this.toggleCart());
        document.getElementById('closeCart').addEventListener('click', () => this.toggleCart());
        document.addEventListener('click', (e) => {
            if(e.target === document.getElementById('cartModal')) this.toggleCart();
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });
    }

    handleNavigation(e) {
        if(e) e.preventDefault();
        const path = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === path);
        });
    }

    async initializeStripe() {
        // Initialize Stripe.js
        this.stripe = Stripe('pk_test_YOUR_STRIPE_KEY');
        this.elements = this.stripe.elements();
        this.cardElement = this.elements.create('card');
        this.cardElement.mount('#cardElement');
    }

    addToCart(dishId) {
        const dish = dishes.find(d => d.id === dishId);
        const existing = this.cart.find(item => item.id === dishId);

        if(existing) {
            existing.quantity++;
        } else {
            this.cart.push({ ...dish, quantity: 1 });
        }

        this.updateCart();
        this.showCartNotification(dish.title);
    }

    removeFromCart(dishId) {
        this.cart = this.cart.filter(item => item.id !== dishId);
        this.updateCart();
    }

    updateCart() {
        localStorage.setItem('kmcCart', JSON.stringify(this.cart));
        this.updateCartCount();
        this.renderCartItems();
    }

    updateCartCount() {
        document.getElementById('cartCount').textContent = this.cart
            .reduce((sum, item) => sum + item.quantity, 0);
    }

    renderCartItems() {
        const container = document.getElementById('cartItems');
        const total = this.cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/\D/g, ''));
            return sum + (price * item.quantity);
        }, 0);

        container.innerHTML = this.cart.map(item => `
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="font-bold">${item.title}</h4>
                    <p class="text-gray-600">${item.price} × ${item.quantity}</p>
                </div>
                <button class="text-red-600 hover:text-red-700 remove-item"
                        data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        document.getElementById('cartTotal').textContent = 
            `${total.toLocaleString()} XAF`;
        document.getElementById('payAmount').textContent = 
            total.toLocaleString();

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.removeFromCart(parseInt(e.currentTarget.dataset.id));
            });
        });
    }

    async handlePayment(e) {
        e.preventDefault();
        const { error } = await this.stripe.confirmCardPayment('CLIENT_SECRET', {
            payment_method: { card: this.cardElement }
        });

        if(error) {
            console.error('Payment failed:', error);
            alert('Payment failed. Please try again.');
        } else {
            alert('Payment successful! Thank you for your order.');
            this.cart = [];
            this.updateCart();
            this.toggleCart();
        }
    }

    toggleCart() {
        document.getElementById('cartModal').classList.toggle('hidden');
        if(!this.cart.length) return;
        this.renderCartItems();
    }

    showCartNotification(itemName) {
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-4 left-4 bg-green-600 text-white p-4 rounded-lg shadow-lg animate-fade-in-down';
        notification.innerHTML = `
            <i class="fas fa-check-circle mr-2"></i>
            Added ${itemName} to cart!
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    renderDishes() {
        const container = document.getElementById('dishes-container');
        container.innerHTML = dishes.map(dish => `
            <div class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img src="${dish.image}" 
                     alt="${dish.title}" 
                     class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
                     loading="lazy">
                <div class="p-6">
                    <h3 class="font-bold text-xl mb-2">${dish.title}</h3>
                    <p class="text-gray-600 mb-4">${dish.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-red-600 font-bold">${dish.price}</span>
                        <button class="cta-primary px-4 py-2 add-to-cart" 
                                data-id="${dish.id}">
                            Order Now
                        <i class="fas fa-shopping-cart ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.addToCart(parseInt(e.currentTarget.dataset.id));
            });
        });
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    const app = new KMCRestaurant();
    window.app = app; // For debugging
});