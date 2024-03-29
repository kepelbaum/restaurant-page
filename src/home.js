export function Home() {
    const main = document.querySelector('#content');
    main.textContent = '';
    const one = document.createElement('h1');
    const two = document.createElement('h2');
    const three = document.createElement('div');
    one.textContent = 'La Baguette Restaurant';
    two.textContent = 'Our restaurant is ABSOLUTELY WONDERFUL!!!';
    three.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    main.appendChild(one);
    main.appendChild(two);
    main.appendChild(three);
}
