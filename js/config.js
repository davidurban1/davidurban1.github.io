import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span class="material-icons">
      ad_units
      </span>
        Control IoT
      </a>
  <a href="historial.html">
      <span class="material-icons">
      history_toggle_off
      </span>
        Historial
      </a>
      <a href="dispositivo.html">
       <span class="material-icons">
        ad_units
      </span>
        Dispositivo simulado
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);
