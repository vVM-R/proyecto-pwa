import { LitElement, html, css } from 'lit';

export class VmNotFound extends LitElement {
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
          <div class="container grey-text center">
            <h5>OOPS!</h5>
            <p>Actualmente no puedes ver esta página sin una conexión.</p>
            <a href="/" class="btn-small orange z-depth-0">Ir a la pagina principal</a>
          </div>`;
    }
}
customElements.define('vm-not-found', VmNotFound);
