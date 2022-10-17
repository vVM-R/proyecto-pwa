import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class VmBtnAgregar extends LitElement {
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
        return html`
              <div class="center">
                <a class= "btn-floating btn-small add-btn sidenav-trigger" data-target="side-form">
                  <i class= "material-icons">add</i>
                </a>
              </div>
              <div id="side-form" class="sidenav side-form">
                    <form class="add-recipe container section">
                    <h6 >New Recipe</h6>
                    <div class="divider"></div>
                    <div class="input-field">
                        <label for="title">Recipe Title</label>
                        <input placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
                    </div>
                    <div class="input-field">
                        <label for="ingredients">Ingredients</label>
                        <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">
                    </div>
                    <div class="input-field center">
                        <button class="btn-small">Add</button>
                    </div>
                    </form>
                </div>`;
    }
}
customElements.define('vm-btn-agregar', VmBtnAgregar);

