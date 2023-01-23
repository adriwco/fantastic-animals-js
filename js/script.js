import { ddRules } from "./ddRules.js";

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const ddText = document.querySelectorAll(".faq-lista dd");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // exibição texto > fotos
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    // exibição texto > faq
    function faqLista(index) {
      let arrayValues = ddRules[index];
      arrayValues.forEach((valor, index) => {
        ddText[index].innerHTML = valor;
      });
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
        faqLista(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"');

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
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    animaScroll(); // exibir a 1° section

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
