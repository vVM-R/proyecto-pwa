import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class VmRecetas extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    createRenderRoot() {

        return this;
    
    }

    render() {
        return html`<!-- Recetas -->
        <div class="recipes container grey-text text-darken-1">
          <div class="card-panel recipe white row">
            <img src="/img/dish.png" alt="recipe thumb">
            <div class="recipe-details">
              <div class="recipe-title">Fideos Edame</div>
              <div class="recipe-ingredients">Fideos edame, Frijoles edame, fideos, aceite de ajo</div>
            </div>
            <div class="recipe-delete">
              <i class="material-icons">delete_outline</i>
            </div>
          </div>
        </div>
        <!-- Fin -->`;
    }
}
customElements.define('vm-recetas', VmRecetas);
