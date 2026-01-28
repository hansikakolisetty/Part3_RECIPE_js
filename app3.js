// Recipe data - Foundation for all 4 parts
const RecipeApp = (() => {
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano cheese",
            "Black pepper",
            "Salt"
        ],
        steps: [
            "Bring a large pot of salted water to boil",
            "Cook spaghetti according to package directions",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Beat eggs in a bowl",
                    "Grate cheese and add to eggs",
                    "Add generous black pepper",
                    "Mix well"
                ]
            },
            "Cook pancetta in a large pan until crispy",
            "Drain pasta, reserve 1 cup pasta water",
            "Add hot pasta to pancetta pan (off heat)",
            "Quickly mix in egg mixture, adding pasta water to create creamy sauce",
            "Serve immediately with extra cheese"
        ]
    
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        "ingredients": [
    "500g boneless chicken (cut into cubes)",
    "200g plain yogurt",
    "2 tbsp lemon juice",
    "2 tsp garam masala",
    "1 tsp turmeric",
    "1 tsp ground cumin",
    "1 tsp ground coriander",
    "2 tsp chili powder",
    "3 tbsp vegetable oil or ghee",
    "1 large onion (finely chopped)",
    "3 cloves garlic (minced)",
    "1 tbsp ginger (grated)",
    "400g canned tomatoes (pureed)",
    "200ml heavy cream",
    "Fresh coriander leaves (for garnish)",
    "Salt to taste"
  ],
  "steps": [
    {
      "text": "Marinate the chicken",
      "substeps": [
        "Mix yogurt, lemon juice, garam masala, turmeric, cumin, coriander, and chili powder",
        "Add chicken cubes and coat well",
        "Cover and refrigerate for at least 30 minutes"
      ]
    },
    "Heat oil or ghee in a large pan",
    "Cook marinated chicken until lightly browned, then remove and set aside",
    {
      "text": "Prepare the sauce",
      "substeps": [
        "Sauté onions until golden brown",
        "Add garlic and ginger, cook for 1 minute",
        "Add pureed tomatoes and simmer for 10 minutes",
        "Stir in cream and season with salt"
      ]
    },
    "Return chicken to the pan and simmer in sauce for 10–15 minutes until cooked through",
    "Garnish with fresh coriander leaves",
    "Serve hot with rice or naan"
  ]
    },
    {
  "id": 3,
  "title": "Homemade Croissants",
  "time": 180,
  "difficulty": "hard",
  "description": "Buttery, flaky French pastries that require patience but deliver amazing results.",
  "category": "baking",
  "ingredients": [
    "500g strong bread flour",
    "60g sugar",
    "10g salt",
    "10g instant yeast",
    "300ml warm milk",
    "300g unsalted butter (cold, for laminating)",
    "1 egg (for egg wash)"
  ],
  "steps": [
    {
      "text": "Prepare the dough",
      "substeps": [
        "Mix flour, sugar, salt, and yeast in a bowl",
        "Add warm milk and knead until smooth",
        "Cover and let rise for 1 hour"
      ]
    },
    {
      "text": "Prepare the butter block",
      "substeps": [
        "Place cold butter between parchment paper",
        "Roll into a flat square",
        "Chill until firm"
      ]
    },
    {
      "text": "Laminate the dough",
      "substeps": [
        "Roll dough into a rectangle",
        "Place butter block in the center",
        "Fold dough over butter and seal edges",
        "Roll out and fold into thirds",
        "Chill for 30 minutes",
        "Repeat rolling and folding 2 more times"
      ]
    },
    {
      "text": "Shape the croissants",
      "substeps": [
        "Roll dough into a large rectangle",
        "Cut triangles and roll into crescent shapes",
        "Place on baking tray and proof for 1 hour"
      ]
    },
    {
      "text": "Bake",
      "substeps": [
        "Brush croissants with egg wash",
        "Bake at 200°C (390°F) for 15–20 minutes until golden brown"
      ]
    },
    "Cool slightly and serve warm"
  ]
},
    {
  "id": 4,
  "title": "Greek Salad",
  "time": 15,
  "difficulty": "easy",
  "description": "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
  "category": "salad",
  "ingredients": [
    "3 large tomatoes (chopped)",
    "1 cucumber (sliced)",
    "1 red onion (thinly sliced)",
    "1 green bell pepper (sliced)",
    "150g feta cheese (cubed or crumbled)",
    "100g Kalamata olives",
    "3 tbsp extra virgin olive oil",
    "1 tbsp red wine vinegar",
    "1 tsp dried oregano",
    "Salt to taste",
    "Black pepper to taste"
  ],
  "steps": [
    {
      "text": "Prepare the vegetables",
      "substeps": [
        "Chop tomatoes into wedges",
        "Slice cucumber into rounds",
        "Thinly slice red onion",
        "Slice green bell pepper into strips"
      ]
    },
    "Combine vegetables in a large salad bowl",
    "Add feta cheese and olives on top",
    {
      "text": "Make the dressing",
      "substeps": [
        "Mix olive oil, red wine vinegar, oregano, salt, and black pepper in a small bowl",
        "Whisk until well combined"
      ]
    },
    "Pour dressing over salad and toss gently",
    "Serve immediately, optionally garnish with extra oregano or olive oil"
  ]
},
    {
  "id": 5,
  "title": "Beef Wellington",
  "time": 120,
  "difficulty": "hard",
  "description": "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
  "category": "meat",
  "ingredients": [
    "1kg beef fillet (center-cut)",
    "2 tbsp olive oil",
    "250g mushrooms (finely chopped)",
    "2 shallots (finely chopped)",
    "2 cloves garlic (minced)",
    "2 tbsp butter",
    "2 tbsp fresh thyme leaves",
    "2 tbsp Dijon mustard",
    "6–8 slices prosciutto",
    "500g puff pastry",
    "2 egg yolks (for egg wash)",
    "Salt to taste",
    "Black pepper to taste"
  ],
  "steps": [
    {
      "text": "Prepare the beef",
      "substeps": [
        "Season beef fillet with salt and pepper",
        "Heat olive oil in a pan and sear beef on all sides until browned",
        "Remove from pan and brush with Dijon mustard",
        "Let cool completely"
      ]
    },
    {
      "text": "Make the mushroom duxelles",
      "substeps": [
        "Melt butter in a pan",
        "Add mushrooms, shallots, garlic, and thyme",
        "Cook until mixture is dry and fragrant",
        "Cool completely"
      ]
    },
    {
      "text": "Assemble the Wellington",
      "substeps": [
        "Lay prosciutto slices on cling film",
        "Spread mushroom duxelles over prosciutto",
        "Place beef fillet on top and roll tightly using cling film",
        "Chill for 30 minutes"
      ]
    },
    {
      "text": "Wrap in puff pastry",
      "substeps": [
        "Roll out puff pastry into a rectangle",
        "Remove cling film and place beef roll in the center",
        "Wrap pastry around beef, sealing edges",
        "Brush with egg yolk"
      ]
    },
    {
      "text": "Bake",
      "substeps": [
        "Preheat oven to 200°C (390°F)",
        "Bake for 35–40 minutes until pastry is golden brown and beef is medium-rare"
      ]
    },
    "Rest for 10 minutes before slicing and serving"
  ]
},
    {
  "id": 6,
  "title": "Vegetable Stir Fry",
  "time": 20,
  "difficulty": "easy",
  "description": "Colorful mixed vegetables cooked quickly in a savory sauce.",
  "category": "vegetarian",
  "ingredients": [
    "1 red bell pepper (sliced)",
    "1 yellow bell pepper (sliced)",
    "1 carrot (julienned)",
    "1 broccoli head (cut into florets)",
    "100g snow peas",
    "2 tbsp vegetable oil",
    "2 cloves garlic (minced)",
    "1 tbsp ginger (grated)",
    "3 tbsp soy sauce",
    "1 tbsp oyster sauce (optional for extra flavor)",
    "1 tsp sesame oil",
    "1 tsp cornstarch mixed with 2 tbsp water (for thickening)",
    "Sesame seeds (for garnish)"
  ],
  "steps": [
    {
      "text": "Prepare the vegetables",
      "substeps": [
        "Slice bell peppers into strips",
        "Julienne the carrot",
        "Cut broccoli into small florets",
        "Trim snow peas"
      ]
    },
    "Heat vegetable oil in a large wok or pan",
    {
      "text": "Cook aromatics",
      "substeps": [
        "Add garlic and ginger",
        "Stir-fry for 30 seconds until fragrant"
      ]
    },
    {
      "text": "Stir-fry vegetables",
      "substeps": [
        "Add carrots and broccoli first, cook for 2–3 minutes",
        "Add bell peppers and snow peas, stir-fry for another 2 minutes"
      ]
    },
    {
      "text": "Make the sauce",
      "substeps": [
        "Mix soy sauce, oyster sauce, and sesame oil in a small bowl",
        "Add cornstarch slurry to thicken"
      ]
    },
    "Pour sauce over vegetables and toss to coat evenly",
    "Cook for 1–2 minutes until vegetables are tender-crisp",
    "Garnish with sesame seeds and serve hot with rice or noodles"
  ]
},
    {
  "id": 7,
  "title": "Pad Thai",
  "time": 30,
  "difficulty": "medium",
  "description": "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
  "category": "noodles",
  "ingredients": [
    "200g rice noodles",
    "200g shrimp (peeled and deveined)",
    "2 tbsp vegetable oil",
    "2 cloves garlic (minced)",
    "1 egg (lightly beaten)",
    "100g bean sprouts",
    "2 spring onions (sliced)",
    "50g roasted peanuts (crushed)",
    "1 lime (cut into wedges)",
    "2 tbsp fish sauce",
    "1 tbsp tamarind paste",
    "1 tbsp soy sauce",
    "1 tbsp brown sugar",
    "1 tsp chili flakes (optional)",
    "Fresh coriander leaves (for garnish)"
  ],
  "steps": [
    {
      "text": "Prepare the noodles",
      "substeps": [
        "Soak rice noodles in warm water for 20 minutes until softened",
        "Drain and set aside"
      ]
    },
    {
      "text": "Make the sauce",
      "substeps": [
        "Mix fish sauce, tamarind paste, soy sauce, brown sugar, and chili flakes in a small bowl",
        "Stir until sugar dissolves"
      ]
    },
    "Heat vegetable oil in a wok or large pan",
    {
      "text": "Cook aromatics and shrimp",
      "substeps": [
        "Add garlic and stir-fry for 30 seconds",
        "Add shrimp and cook until pink and cooked through"
      ]
    },
    "Push shrimp to one side of the pan, add beaten egg, and scramble lightly",
    "Add drained noodles and prepared sauce, toss everything together",
    "Add bean sprouts and spring onions, stir-fry for 1–2 minutes",
    "Serve hot topped with crushed peanuts, coriander leaves, and lime wedges"
  ]
},
    {
  "id": 8,
  "title": "Margherita Pizza",
  "time": 60,
  "difficulty": "medium",
  "description": "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
  "category": "pizza",
  "ingredients": [
    "250g strong bread flour",
    "150ml warm water",
    "1 tsp salt",
    "1 tsp sugar",
    "7g instant yeast",
    "2 tbsp olive oil",
    "200g canned tomatoes (crushed or pureed)",
    "200g fresh mozzarella cheese",
    "Fresh basil leaves",
    "Extra olive oil (for drizzling)",
    "Salt and black pepper to taste"
  ],
  "steps": [
    {
      "text": "Prepare the dough",
      "substeps": [
        "Mix flour, salt, sugar, and yeast in a bowl",
        "Add warm water and olive oil",
        "Knead until smooth and elastic",
        "Cover and let rise for 1 hour until doubled in size"
      ]
    },
    {
      "text": "Prepare the sauce",
      "substeps": [
        "Heat crushed tomatoes in a pan",
        "Season with salt, pepper, and a drizzle of olive oil",
        "Simmer for 10 minutes"
      ]
    },
    {
      "text": "Shape the pizza base",
      "substeps": [
        "Punch down risen dough",
        "Roll out into a thin round base",
        "Place on a baking tray or pizza stone"
      ]
    },
    {
      "text": "Assemble the pizza",
      "substeps": [
        "Spread tomato sauce evenly over the base",
        "Tear mozzarella into pieces and scatter on top",
        "Add fresh basil leaves"
      ]
    },
    {
      "text": "Bake",
      "substeps": [
        "Preheat oven to 220°C (430°F)",
        "Bake pizza for 12–15 minutes until crust is golden and cheese is bubbling"
      ]
    },
    "Drizzle with olive oil and serve hot"
  ]
}
];
// Step 4.1: Select the Container Element
// DOM Selection - Get the container where recipes will be displayed
let currentFilter = 'all';
let currentSort = 'none';
const recipeContainer = document.querySelector('#recipe-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
console.log(recipeContainer); // Test: should log the div element in console
// Filter recipes by difficulty level
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// Filter recipes by maximum cooking time
const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};

// Apply the current filter
const applyFilter = (recipes, filterType) => {
    switch(filterType) {
        case 'easy':
            return filterByDifficulty(recipes, 'easy');
        case 'medium':
            return filterByDifficulty(recipes, 'medium');
        case 'hard':
            return filterByDifficulty(recipes, 'hard');
        case 'quick':
            return filterByTime(recipes, 30);
        case 'all':
        default:
            return recipes;  // Return all recipes (no filter)
    }
};
// Sort recipes by name (A-Z)
const sortByName = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort recipes by cooking time (fastest first)
const sortByTime = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.time - b.time);
};

// Apply the current sort
const applySort = (recipes, sortType) => {
    switch(sortType) {
        case 'name':
            return sortByName(recipes);
        case 'time':
            return sortByTime(recipes);
        case 'none':
        default:
            return recipes;  // Return as-is (no sorting)
    }
};


// Step 4.2: Create the Recipe Card Generator Function
// Function to create HTML for a single recipe card
// Recursive function to render steps (handles nesting)
const renderSteps = (steps, level = 0) => {
    // Determine the CSS class based on nesting level
    const listClass = level === 0 ? 'steps-list' : 'substeps-list';
    
    let html = `<ol class="${listClass}">`;
    
    steps.forEach(step => {
        // TODO: Check if step is a string or object
        if (typeof step === 'string') {
            // Simple step - just add as list item
            html += `<li>${step}</li>`;
        } else {
            // Nested step - has text and substeps
            html += `<li>`;
            html += step.text;  // Main step text
            
            // TODO: Recursively call renderSteps for substeps
            if (step.substeps && step.substeps.length > 0) {
                // RECURSIVE CALL - this is the key!
                html += renderSteps(step.substeps, level + 1);
            }
            
            html += `</li>`;
        }
    });
    
    html += `</ol>`;
    return html;
};
const createStepsHTML = (steps) => {
    // TODO: Check if steps exist
    if (!steps || steps.length === 0) {
        return '<p>No steps available</p>';
    }
    
    // Call the recursive function to generate the nested list
    return renderSteps(steps);
};
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
            
            <!-- NEW: Toggle Buttons -->
            <div class="card-actions">
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                    📋 Show Steps
                </button>
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                    🥗 Show Ingredients
                </button>
            </div>
            
            <!-- NEW: Ingredients Section (hidden by default) -->
            <div class="ingredients-container" data-recipe-id="${recipe.id}">
                <h4>Ingredients:</h4>
                <ul>
                    
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <!-- NEW: Steps Section (hidden by default) -->
            <div class="steps-container" data-recipe-id="${recipe.id}">
                <h4>Cooking Steps:</h4>
                
                ${createStepsHTML(recipe.steps)}
            </div>
        </div>
    `;
};


// Test: log HTML string for the first recipe
console.log(createRecipeCard(recipes[0]));

// Step 4.3: Create the Render Function
// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)   // transform each recipe into HTML
        .join('');               // combine into one big string
    
    recipeContainer.innerHTML = recipeCardsHTML; // insert into DOM
};
const updateDisplay = () => {
    // Step 1: Start with all recipes
    let recipesToDisplay = recipes;
    
    // Step 2: Apply current filter
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    
    // Step 3: Apply current sort
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    // Step 4: Render the filtered and sorted recipes
    renderRecipes(recipesToDisplay);
    
    // Step 5: Log for debugging
    console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};
const updateActiveButtons = () => {
    // Update filter buttons
    filterButtons.forEach(btn => {
        const filterType = btn.dataset.filter;
        if (filterType === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sort buttons
    sortButtons.forEach(btn => {
        const sortType = btn.dataset.sort;
        if (sortType === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};
// Handle filter button clicks
const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    
    // Update state
    currentFilter = filterType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};

// Handle sort button clicks
const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;
    
    // Update state
    currentSort = sortType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};


// Step 4.4: Initialize the App
// Render all recipes when page loads
renderRecipes(recipes);
const setupEventListeners = () => {
    // Attach click handlers to all filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Attach click handlers to all sort buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    recipeContainer.addEventListener('click', handleToggleClick);
    
    console.log('Event listeners attached!');
};
// Set up event listeners on page load
setupEventListeners();

// Initial render with default filter/sort
updateDisplay();
// Handle toggle button clicks using event delegation
const handleToggleClick = (event) => {
    // Check if clicked element is a toggle button
    if (!event.target.classList.contains('toggle-btn')) {
        return;  // Not a toggle button, ignore
    }
    
    const button = event.target;
    const recipeId = button.dataset.recipeId;
    const toggleType = button.dataset.toggle;  // "steps" or "ingredients"
    
    // TODO: Find the corresponding container
    const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
    const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);
    
    // TODO: Toggle visibility
    if (container) {
        container.classList.toggle('visible');
        
        // Update button text
        const isVisible = container.classList.contains('visible');
        if (toggleType === 'steps') {
            button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
        } else {
            button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
        }
    }
};
})();  // <-- IIFE is immediately invoked

// ============================================
// START THE APP
// ============================================
RecipeApp.init();