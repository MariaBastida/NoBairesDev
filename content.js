function ocultarBairesDev() {
  const ofertas = document.querySelectorAll("article");

  ofertas.forEach(oferta => {
    const empresa = oferta.innerText || "";

    if (empresa.toLowerCase().includes("bairesdev")) {
      oferta.style.display = "none";
    }
  });
}

// Ejecutar al cargar
ocultarBairesDev();

// También observar cambios dinámicos (scroll infinito)
const observer = new MutationObserver(() => {
  ocultarBairesDev();
});

observer.observe(document.body, { childList: true, subtree: true });
