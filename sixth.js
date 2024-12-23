
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.list');

// Toggle the active class on the hamburger and navMenu when clicked
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('navigation--open');
    console.log('button clicked')
});

// Remove the active class when any menu item is clicked
document.querySelectorAll('.list_item').forEach(item =>
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
);
