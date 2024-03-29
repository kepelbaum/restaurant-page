console.log('Hello webpack!');
import './styles.css';
import Restaurant from './restaurant.jpg';
import { Home } from './home.js';
import { Menu } from './menu.js';
import { About } from './about.js';
const main = document.querySelector('#content');

// function clear() {
//     main.textContent = '';
// }

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');

Home();

home.addEventListener('click', () => {
    Home();
})

menu.addEventListener('click', () => {
    Menu();
})

about.addEventListener('click', () => {
    About();
})