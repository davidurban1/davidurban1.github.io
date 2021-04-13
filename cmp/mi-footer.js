class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
     Urban Becerra Luis David.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
