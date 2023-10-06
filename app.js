const navBar = document.querySelector('.navBar')
const navMenu = document.querySelector('.navMenu')
const headerBar = document.querySelector('.headerBar')

navMenu.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > headerBar.offsetHeight + 100) {
        headerBar.classList.add('active');
    } else{
        headerBar.classList.remove('active')
    }
}
fixNav()