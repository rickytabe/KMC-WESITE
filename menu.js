// Extended dishes data for the menu page
const menuDishes = [
  // Today's Specials
  {
    id: 7,
    title: "Grilled Tilapia Platter",
    description: "Fresh tilapia grilled with local spices, served with plantains and steamed vegetables",
    price: "3,800 XAF",
    category: "specials",
    image: "https://i.pinimg.com/736x/1e/bf/2b/1ebf2b7e5aedc1f5a7c8c3c8c3b1d1f0.jpg",
    ingredients: ["Fresh tilapia", "Local spices", "Plantains", "Steamed vegetables", "Secret sauce"]
  },
  {
    id: 8,
    title: "Jamaican Jerk Chicken",
    description: "Spicy Caribbean-style chicken with rice and peas",
    price: "3,500 XAF",
    category: "specials",
    image: "https://i.pinimg.com/736x/4b/90/be/4b90be4b4a4e4a4e4e4e4e4e4e4e4e4e.jpg",
    ingredients: ["Chicken breast", "Jamaican jerk spices", "Rice", "Kidney beans", "Coconut milk"]
  },
  
  // Chef's Recommendations
  {
    id: 9,
    title: "KMC Signature Burger",
    description: "Our famous burger with double beef patty, special sauce and caramelized onions",
    price: "3,200 XAF",
    category: "recommended",
    image: "https://i.pinimg.com/736x/e8/c2/12/e8c2127a5730742aee1e227f1ee0b784.jpg",
    ingredients: ["Beef patties", "Cheddar cheese", "Special sauce", "Caramelized onions", "Brioche bun"]
  },
  {
    id: 10,
    title: "Seafood Okra Soup",
    description: "Traditional Buea soup with fresh seafood and okra",
    price: "3,600 XAF",
    category: "recommended",
    image: "https://i.pinimg.com/736x/8c/b0/77/8cb077e8f26299555a5ace4e9f796fc6.jpg",
    ingredients: ["Fresh shrimp", "Fish", "Okra", "Palm oil", "Local spices"]
  },
  
  // Combos & Meals
  {
    id: 11,
    title: "Family Feast Combo",
    description: "Perfect for 4 people - burgers, fries, drinks and desserts",
    price: "12,500 XAF",
    category: "combos",
    image: "https://i.pinimg.com/736x/9a/9b/0d/9a9b0d0d0d0d0d0d0d0d0d0d0d0d0d0d.jpg",
    comboItems: [
      "2 Grand KMC Burgers",
      "1 Large Fries Basket",
      "4 Tropical Smoothies",
      "2 Chocolate Brownies"
    ],
    discount: "Save 15%"
  },
  {
    id: 12,
    title: "Student Special",
    description: "Burger + Fries + Drink at a special student price",
    price: "4,200 XAF",
    category: "combos",
    image: "https://i.pinimg.com/736x/8a/8a/8a/8a8a8a8a8a8a8a8a8a8a8a8a8a8a8a8a.jpg",
    comboItems: [
      "1 Burger of choice",
      "Medium Fries",
      "1 Soft Drink"
    ],
    discount: "Save 20%"
  },
  
  // Burgers & Sandwiches
  {
    id: 13,
    title: "BBQ Bacon Cheeseburger",
    description: "Juicy beef patty with smoked bacon and BBQ sauce",
    price: "2,800 XAF",
    category: "burgers",
    image: "https://i.pinimg.com/736x/7a/7a/7a/7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a.jpg",
    ingredients: ["Beef patty", "Bacon", "Cheddar cheese", "BBQ sauce", "Onion rings"]
  },
  {
    id: 14,
    title: "Chicken Avocado Club",
    description: "Grilled chicken with avocado, bacon and special sauce",
    price: "2,600 XAF",
    category: "burgers",
    image: "https://i.pinimg.com/736x/6b/6b/6b/6b6b6b6b6b6b6b6b6b6b6b6b6b6b6b6b.jpg",
    ingredients: ["Chicken breast", "Avocado", "Bacon", "Lettuce", "Tomato"]
  },
  
  // Local Specialties
  {
    id: 15,
    title: "Eru and Water Fufu",
    description: "Traditional Cameroonian dish with wild spinach and cocoyam paste",
    price: "2,900 XAF",
    category: "local",
    image: "https://i.pinimg.com/736x/5c/5c/5c/5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c.jpg",
    ingredients: ["Wild spinach (Eru)", "Waterleaf", "Palm oil", "Smoked fish", "Cocoyam fufu"]
  },
  {
    id: 16,
    title: "Achu Soup",
    description: "Traditional Northwest dish with pounded cocoyam and yellow soup",
    price: "3,100 XAF",
    category: "local",
    image: "https://i.pinimg.com/736x/4d/4d/4d/4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d4d.jpg",
    ingredients: ["Pounded cocoyam", "Yellow soup", "Beef", "Cow skin", "Local spices"]
  },
  
  // Sides & Drinks
  {
    id: 17,
    title: "Plantain Chips",
    description: "Crispy fried plantain slices with spicy dip",
    price: "1,200 XAF",
    category: "sides",
    image: "https://i.pinimg.com/736x/3c/3c/3c/3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c.jpg",
    ingredients: ["Ripe plantains", "Vegetable oil", "Salt", "Spicy dip"]
  },
  {
    id: 18,
    title: "Tropical Fruit Smoothie",
    description: "Blend of mango, pineapple and banana",
    price: "1,500 XAF",
    category: "sides",
    image: "https://i.pinimg.com/736x/2a/2a/2a/2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a.jpg",
    ingredients: ["Mango", "Pineapple", "Banana", "Yogurt", "Honey"]
  },
  
  // Desserts
  {
    id: 19,
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: "1,800 XAF",
    category: "desserts",
    image: "https://i.pinimg.com/736x/1a/1a/1a/1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a.jpg",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Vanilla ice cream"]
  },
  {
    id: 20,
    title: "Puff Puff Platter",
    description: "Traditional African doughnuts with chocolate and caramel dips",
    price: "1,200 XAF",
    category: "desserts",
    image: "https://i.pinimg.com/736x/9b/9b/9b/9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b.jpg",
    ingredients: ["Flour", "Sugar", "Yeast", "Chocolate dip", "Caramel dip"]
  }
];

// Menu Page Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Price filter
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  
  priceRange.addEventListener('input', () => {
    priceValue.textContent = `${parseInt(priceRange.value).toLocaleString()} XAF`;
    filterDishes();
  });
  
  // Category tabs
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      const category = tab.dataset.category;
      document.querySelector(`.menu-category[data-category="${category}"]`).classList.add('active');
    });
  });
  
  // Category filters
  document.querySelectorAll('.filter-category').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
      
      // Activate the corresponding tab
      const tab = document.querySelector(`.menu-tab[data-category="${category}"]`);
      if (tab) {
        tab.classList.add('active');
        document.querySelector(`.menu-category[data-category="${category}"]`).classList.add('active');
      }
    });
  });
  
  // Dish modal
  const dishModal = document.getElementById('dishModal');
  const closeModal = document.getElementById('closeModal');
  
  // Function to open dish modal
  function openDishModal(dish) {
    document.getElementById('modalImage').src = dish.image;
    document.getElementById('modalTitle').textContent = dish.title;
    document.getElementById('modalPrice').textContent = dish.price;
    document.getElementById('modalDescription').textContent = dish.description;
    
    // Generate ingredients list
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    (dish.ingredients || []).forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
    
    // Set up add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-modal');
    addToCartBtn.onclick = () => {
      if (window.app) {
        window.app.addToCart(dish.id);
        dishModal.classList.add('hidden');
      }
    };
    
    dishModal.classList.remove('hidden');
  }
  
  // Close modal
  closeModal.addEventListener('click', () => {
    dishModal.classList.add('hidden');
  });
  
  // Render dishes function
  function renderDishes(dishes, containerId, isCombo = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    dishes.forEach(dish => {
      const dishElement = document.createElement('div');
      dishElement.className = 'bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all cursor-pointer dish-card';
      dishElement.dataset.id = dish.id;
      
      if (isCombo) {
        // Combo dish template
        dishElement.innerHTML = `
          <div class="p-6 bg-red-50 border border-red-100">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h4 class="font-bold text-xl">${dish.title}</h4>
                <p class="text-red-600 font-bold">${dish.price} <span class="text-gray-500 line-through">${dish.discount ? dish.discount : ''}</span></p>
              </div>
              ${dish.discount ? `<span class="bg-red-600 text-white px-2 py-1 rounded text-sm">${dish.discount}</span>` : ''}
            </div>
            
            <ul class="mb-4 pl-5 space-y-2">
              ${dish.comboItems ? dish.comboItems.map(item => `<li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>${item}</li>`).join('') : ''}
            </ul>
            
            <button class="cta-primary w-full add-to-cart" data-id="${dish.id}">
              Add Combo to Cart
            </button>
          </div>
        `;
      } else {
        // Regular dish template
        dishElement.innerHTML = `
          <div class="relative">
            <img src="${dish.image}" alt="${dish.title}" class="w-full h-56 object-cover">
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">${dish.title}</h3>
              <span class="text-red-600 font-bold">${dish.price}</span>
            </div>
            <p class="text-gray-600 mb-4">${dish.description}</p>
            <div class="flex justify-between items-center">
              <button class="cta-primary px-4 py-2 add-to-cart" data-id="${dish.id}">
                Add to Cart
              </button>
            </div>
          </div>
        `;
      }
      
      // Add click event to open modal
      dishElement.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart')) {
          openDishModal(dish);
        }
      });
      
      // Add to cart button
      const addToCartBtn = dishElement.querySelector('.add-to-cart');
      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (window.app) {
            window.app.addToCart(dish.id);
          }
        });
      }
      
      container.appendChild(dishElement);
    });
  }
  
  // Filter dishes function
  function filterDishes() {
    const maxPrice = parseInt(priceRange.value);
    const searchTerm = document.getElementById('menu-search').value.toLowerCase();
    
    // Filter by price and search term
    const filteredDishes = menuDishes.filter(dish => {
      const dishPrice = parseInt(dish.price.replace(/\D/g, ''));
      const matchesPrice = dishPrice <= maxPrice;
      const matchesSearch = dish.title.toLowerCase().includes(searchTerm) || 
                           dish.description.toLowerCase().includes(searchTerm);
      return matchesPrice && matchesSearch;
    });
    
    // Get active category
    const activeTab = document.querySelector('.menu-tab.active');
    const activeCategory = activeTab ? activeTab.dataset.category : 'recommended';
    
    // Filter by active category
    let categoryDishes = filteredDishes;
    if (activeCategory !== 'all') {
      categoryDishes = filteredDishes.filter(dish => dish.category === activeCategory);
    }
    
    // Render dishes in active category
    renderDishes(categoryDishes, `${activeCategory}-container`, activeCategory === 'combos');
  }
  
  // Initial render
  renderDishes(menuDishes.filter(d => d.category === 'specials'), 'specials-container');
  renderDishes(menuDishes.filter(d => d.category === 'recommended'), 'recommended-container');
  renderDishes(menuDishes.filter(d => d.category === 'combos'), 'combos-container', true);
  renderDishes(menuDishes.filter(d => d.category === 'burgers'), 'burgers-container');
  renderDishes(menuDishes.filter(d => d.category === 'local'), 'local-container');
  renderDishes(menuDishes.filter(d => d.category === 'sides'), 'sides-container');
  renderDishes(menuDishes.filter(d => d.category === 'desserts'), 'desserts-container');
  
  // Setup search and filter events
  document.getElementById('menu-search').addEventListener('input', filterDishes);
  document.querySelectorAll('input[data-filter]').forEach(checkbox => {
    checkbox.addEventListener('change', filterDishes);
  });
});