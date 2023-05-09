export default function initScrollSuave() {
  const linksInterno = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    /*
    ------- forma alternativa ------- 
      const topo = section.offsetTop;
      // window.scrollTo(0, topo);
      window.scrollTo({
        top: topo,
        behavior: "smooth",
      });
    ---------------------------------
    https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
    */
  }
  linksInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}