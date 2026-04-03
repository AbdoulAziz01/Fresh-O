const footerHTML = `    <!--FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand-col">
            <img
              src="images/fresho-logo.svg"
              alt="Fresh'O Vitroplants"
              class="footer-logo"
            />
            <p>
              Première ferme zéro carbone de production de vitroplants de banane
              au Sénégal.
            </p>
            <div class="footer-socials">
              <a href="#" class="social-btn" aria-label="LinkedIn"
                ><i
                  class="fa-brands fa-linkedin"
                  style="color: rgb(241, 242, 243); font-size: 25px"
                ></i
              ></a>
              <a href="#" class="social-btn" aria-label="Facebook"
                ><i
                  class="fa-brands fa-facebook"
                  style="color: rgb(241, 242, 243); font-size: 25px"
                ></i
              ></a>
              <a href="#" class="social-btn" aria-label="Instagram"
                ><i
                  class="fa-brands fa-instagram"
                  style="color: rgb(241, 242, 243); font-size: 25px"
                ></i
              ></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="index.html">Accueil</a></li>
              <li><a href="apropos.html">À propos</a></li>
              <li><a href="ferme-zero-carbone.html">Ferme zéro carbone</a></li>
              <li><a href="vitroplants.html">Vitroplants</a></li>
              <li><a href="impact-partenariats.html">Impact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Ressources</h4>
            <ul>
              <li><a href="ressources-medias.html">Médias</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="temoignages.html">Témoignages</a></li>
              <li><a href="carrieres.html">Carrières</a></li>
              <li><a href="contact-partenaires.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <p>Route de Thiès, KM 25<br />Dakar, Sénégal</p>
            <p>+221 33 123 45 67</p>
            <p>contact@fresho-vitroplants.sn</p>
            <a
              href="contact-partenaires.html"
              class="btn btn-primary"
              style="
                margin-top: 1rem;
                font-size: 0.85rem;
                padding: 0.6rem 1.2rem;
              "
              >Nous contacter →</a
            >
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 FRESH'O VITROPLANTS. Tous droits réservés.</p>
          <div class="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>`;

// On l'injecte dans le conteneur prévu à cet effet, s'il existe
const footerContainer = document.getElementById("footer-container");

if (footerContainer) {
  footerContainer.innerHTML = footerHTML;
}
