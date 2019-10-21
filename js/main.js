//select DOM elements
menuBtn = document.querySelector('.toggle-menu-btn');
navigationBar = document.querySelector('.nav');
navItems = document.querySelectorAll('.nav-item');
//Initial mobile menu state
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        navigationBar.classList.add('show');
        navItems.forEach(item => {
            item.classList.add('show');
        });
        //set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        navigationBar.classList.remove('show');
        navItems.forEach(item => {
            item.classList.remove('show');
        });
        //set menu state
        showMenu = false;
    }
}