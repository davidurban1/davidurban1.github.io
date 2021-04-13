class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Adan Gomez Reyes.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
