const nav = document.querySelector('nav');

toggleNav = () => {
   
    if (nav.style.display == 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}