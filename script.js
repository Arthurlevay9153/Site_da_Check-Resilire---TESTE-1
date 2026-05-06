// Adiciona rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 220, // Desconto da altura do header
            behavior: 'smooth'
        });
    });
});

console.log("Site carregado com sucesso!");
