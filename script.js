// Hi Katie. Here's a solution to the drop-down menu problem (if I understood it correctly).
// Hopefully it's not too much of a mess :)

const menu1 = document.querySelector('#menu-item-1');
const menu2 = document.querySelector('#menu-item-2');
const menu3 = document.querySelector('#menu-item-3');
const menu4 = document.querySelector('#menu-item-4');

const subMenu1 = document.querySelector('#submenu-1');
const subMenu2 = document.querySelector('#submenu-2');;
const subMenu3 = document.querySelector('#submenu-3');

const mainNav = [menu1, menu2, menu3]
const subMenues = [subMenu1, subMenu2, subMenu3]
let menuIndex = 0;

for (let item of mainNav) {
    if(document.activeElement === menu4.querySelector('a')) {
        hideSubmenu();
    }
    item.querySelector('a').addEventListener('focus', function(e) {
        hideSubmenu();
        item.querySelector('.submenu').classList.add('reveal');
    });
}

for (let item of subMenues) {
    let links = item.querySelectorAll('a');
    for (let link of links) {
        link.addEventListener('focus', function(e){
            item.classList.add('reveal');
        })
    }
}

document.addEventListener('keydown', function (e) {
    let key = e.which || e.keyCode;
    if (key === 13) {
        e.preventDefault();
        mainNav[menuIndex].querySelector('a').focus();
        menuIndex++;
        if(menuIndex >= mainNav.length){
            menuIndex = 0;
        }
    }        
});

document.addEventListener('keydown', function (e) {
    let key = e.which || e.keyCode;
    if (key === 9) { 
        if(document.activeElement === subMenu3.querySelector('li:last-child a')) {
            e.preventDefault();
            hideSubmenu();
            subMenu1.classList.add('reveal');
            mainNav[0].querySelector('a').focus();
        }
    }
});

document.querySelector('body').addEventListener('click', function() {
    hideSubmenu();
    menuIndex = 0;
})

function hideSubmenu() {
    for (let item of mainNav) {
        item.querySelector('.submenu').classList.remove('reveal');
    }
}
