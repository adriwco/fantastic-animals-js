import { ddRules } from "./ddRules.js";

export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const ddText = document.querySelectorAll(".faq-lista dd");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // exibição texto > fotos
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
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