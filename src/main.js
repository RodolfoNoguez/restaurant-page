import './style.css';
import { pageload } from './pageload.js'
import { menuPageLoad } from './pageload.js'
import { aboutPageLoad } from './pageload.js'
console.log('hello from webpack');


const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

homeButton.addEventListener('click',() => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    pageload();
})

menuButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = ''
    menuPageLoad();
})

aboutButton.addEventListener('click', () => {
    const content  = document.getElementById('content');
    content.innerHTML = '';
    aboutPageLoad();
})

