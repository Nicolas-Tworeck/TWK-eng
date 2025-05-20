// Seleciona os elementos do DOM
const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

// Adiciona um evento de clique ao ícone do hambúrguer
hamburger.addEventListener('click', () => {
    menuMobile.classList.toggle('active'); // Alterna a classe 'active' no menu móvel
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuMobile.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger && menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active');
    }
});