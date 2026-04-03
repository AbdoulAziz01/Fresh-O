(() => {
  if (window.__freshoNavbarInit) {
    return;
  }
  window.__freshoNavbarInit = true;

  const navbarScript = document.querySelector(
    'script[src*="components/navbar.js"]',
  );
  const assetBaseUrl = navbarScript ? navbarScript.src : window.location.href;
  const logoSrc = new URL("../images/fresho-logo.svg", assetBaseUrl).href;

  const navbarCssPath = "components/navbar.css";
  if (!document.querySelector(`link[href="${navbarCssPath}"]`)) {
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = navbarCssPath;
    document.head.appendChild(cssLink);
  }

  const navbarHTML = `
    <nav class="navbar" aria-label="Navigation principale">
      <div class="navbar-inner">
        <a href="index.html" class="marque" aria-label="Accueil Fresh'O">
          <img
            src="${logoSrc}"
            class="logo-header"
            alt="Fresh'O Vitroplants"
            width="187"
            height="80"
            decoding="async"
          />
        </a>

        <button class="nav-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav-links">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="main-nav-links" class="nav-liens">
          <li><a href="index.html" class="nav-lien">Accueil</a></li>
          <li><a href="apropos.html" class="nav-lien">A propos</a></li>
          <li><a href="ferme-zero-carbone.html" class="nav-lien">Ferme</a></li>
          <li><a href="vitroplants.html" class="nav-lien">Vitroplants</a></li>
          <li><a href="impact-partenariats.html" class="nav-lien">Impact</a></li>
          <li><a href="contact-partenaires.html" class="nav-lien">Contact</a></li>
        </ul>

        <a href="contact-partenaires.html" class="btn-nav">Devenir partenaire</a>
      </div>
    </nav>
  `;

  const navbarContainer = document.getElementById("navbar-container");
  if (!navbarContainer) {
    return;
  }

  if (!navbarContainer.querySelector(".navbar")) {
    navbarContainer.innerHTML = navbarHTML;
  }

  const navbar = navbarContainer.querySelector(".navbar");
  const navLinks = navbarContainer.querySelectorAll(".nav-lien");
  const navLiens = navbarContainer.querySelector(".nav-liens");
  const toggle = navbarContainer.querySelector(".nav-toggle");

  if (!navbar || !navLiens || !toggle) {
    return;
  }

  const normalizePath = (path) => {
    const file = path.split("/").pop() || "index.html";
    return file.toLowerCase();
  };

  const currentPage = normalizePath(window.location.pathname);
  navLinks.forEach((link) => {
    const href = normalizePath(link.getAttribute("href") || "");
    if (href === currentPage) {
      link.classList.add("actif");
      link.setAttribute("aria-current", "page");
    }
  });

  const closeMenu = () => {
    navLiens.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    navLiens.classList.add("open");
    toggle.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (navLiens.classList.contains("open")) {
      closeMenu();
      return;
    }
    openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  const updateScrolledState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };

  window.addEventListener("scroll", updateScrolledState, { passive: true });
  updateScrolledState();
})();
