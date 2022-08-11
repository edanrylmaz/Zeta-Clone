const toggleButton = document.getElementsByClassName('hamburger-menu')[0]
    const navbarLinks = document.getElementsByClassName('navbar-menu')[0]
    toggleButton.addEventListener('click',() => {
        navbarLinks.classList.toggle('active')
        toggleButton.classList.toggle('cross-line')
    });