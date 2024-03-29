export function Menu() {
    const main = document.querySelector('#content');
    main.textContent = '';
    const one = document.createElement('h1');
    const two = document.createElement('div');
    const three = document.createElement('div');
    const four = document.createElement('div');
    const five = document.createElement('div');
    one.textContent = 'Signature Chicken';
    two.textContent = 'CHICKEN PICCATA: Capers, Spinach, Lemon Butter with Spaghetti Aglio Olio (1030 cal)';
    five.textContent = 'CHICKEN MARSALA: Mushrooms & Marsala Sauce with Spaghetti Aglio Olio (970 cal)';
    three.textContent = 'CHICKEN FRANCESE: Parmesan-Crusted, Lemon Butter, Crispy Vesuvio Potatoes, Asparagus (910 cal)'
    four.textContent = 'CHICKEN PARMESAN: Provolone & Marinara Sauce with Spaghetti Marinara (1300 cal)';
    main.appendChild(one);
    main.appendChild(two);
    main.appendChild(three);
    main.appendChild(four);
    main.appendChild(five);
}