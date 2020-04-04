/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavElement(section) {
    const li = document.createElement('LI');
    const a = document.createElement('A');
    a.className = 'menu__link';
    a.textContent = section.getAttribute('data-nav');
    a.setAttribute('href', `#${section.getAttribute('id')}`);
    li.appendChild(a);
    navbarList.appendChild(li);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu(sections) {
    sections.forEach(section => {
        createNavElement(section);
    });
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
    for(const section of sections) {
        const bounds = section.getBoundingClientRect();
        const breakpoint =   window.innerHeight - bounds.height;
        if(bounds.top <= breakpoint && bounds.top >= (0 - bounds.height) ) {    
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(evt) {
    if (evt.target.nodeName === 'A') {
        const destination = evt.target.getAttribute('href');
        const section = document.querySelector(destination);
        const y = section.getBoundingClientRect().y;
        const x = section.getBoundingClientRect().x;
        window.scrollTo(x, y)
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildMenu(sections));
// Scroll to section on link click
navbarList.addEventListener('click', scrollToSection);
// Set sections as active
document.addEventListener('scroll', addActiveClass);