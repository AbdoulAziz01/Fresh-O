// On stocke ton HTML dans une constante
const navbarHTML = `
    <nav class="navbar">
      <div class="container navbar-inner">
        <a href="index.html" class="marque">
          <img
            src="images/Fresh'o_logo.svg"
            class="logo-header"
            onerror="this.style.display = 'none'"
          />
        </a>
        <ul class="nav-liens">
          <li><a href="index.html" class="nav-lien">Accueil</a></li>
          <li><a href="apropos.html" class="nav-lien">À propos</a></li>
          <li><a href="ferme-zero-carbone.html" class="nav-lien">Ferme</a></li>
          <li><a href="vitroplants.html" class="nav-lien">Vitroplants</a></li>
          <li><a href="impact-partenariats.html" class="nav-lien">Impact</a></li>
          <li><a href="contact-partenaires.html" class="nav-lien">Contact</a></li>
        </ul>
        <a href="contact-partenaires.html" class="btn-nav">Devenir partenaire →</a>
      </div>
    </nav>
`;

// On l'injecte dans le conteneur prévu à cet effet, s'il existe
const navbarContainer = document.getElementById("navbar-container");

if (navbarContainer) {
  navbarContainer.innerHTML = navbarHTML;

  // Active automatiquement le lien de la page courante
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = navbarContainer.querySelectorAll(".nav-lien");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("actif");
    }
  });
}
