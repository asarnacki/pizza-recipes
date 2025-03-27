const recipes = [
    {
        title: "Pizza Margherita",
        ingredients: ["Sos pomidorowy", "Świeża mozzarella", "Świeża bazylia", "Oliwa z oliwek"],
    },
    {
        title: "Pizza Marinara",
        ingredients: ["Sos pomidorowy", "Czosnek", "Oregano", "Oliwa z oliwek"],
    },
    {
        title: "Pizza z Prosciutto i Rukolą",
        ingredients: ["Sos pomidorowy", "Mozzarella", "Prosciutto", "Rukola"],
    },
    {
        title: "Pizza Quattro Stagioni",
        ingredients: ["Sos pomidorowy", "Mozzarella", "Oliwki", "Karczochy", "Szynka", "Grzyby"],
    },
    {
        title: "Pizza Diavola",
        ingredients: ["Sos pomidorowy", "Mozzarella", "Ostra salami"],
    }
];

const recipesContainer = document.getElementById('recipes');

recipes.forEach((recipe, index) => {
    const recipeElement = document.createElement('div');
    recipeElement.className = 'recipe';
    recipeElement.innerHTML = `
        <h2>${recipe.title}</h2>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
    `;
    recipesContainer.appendChild(recipeElement);

    setTimeout(() => {
        recipeElement.style.opacity = '1';
        recipeElement.style.transform = 'translateY(0)';
    }, index * 300);
});


document.addEventListener('DOMContentLoaded', () => {
    const recipes = document.querySelectorAll('.recipe');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    recipes.forEach(recipe => {
        observer.observe(recipe);
    });
});