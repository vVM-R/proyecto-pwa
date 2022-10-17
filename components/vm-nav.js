import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class VmNav extends LitElement {
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
            <nav class="z-depth-0 nav-wrapper">
              <div class="container">
              <!-- Barra de navegacion para pantallas medianas o mayores (nav) --> 
                <a href="/index.html">Food<span>Ninja</span></a>
                <ul class="right hide-on-med-and-down" >
                  <li><a href="/index.html" class="waves-effect black-text text-darken-1"><span>Home</span></a></li>
                  <li><a href="/pages/about.html" class="waves-effect black-text text-darken-1"><span>About</span></a></li>
                  <li><div class="divider"></div></li>
                  <li><a href="/pages/contact.html" class="waves-effect black-text text-darken-1"><i class="material-icons left">mail_outline</i><span>Contact</span></a></li>
                </ul>
                <!-- Fin -->
                <!-- Boton de Menu-burger que aparece para pantallas medianas o inferiores -->
                <a href="#" class="right grey-text text-darken-1 sidenav-trigger" data-target="side-menu">
                  <i class="material-icons">menu</i>
                </a>
                <!-- Fin - Boton de Menu que aparece para pantallas medianas o inferiores --> 
              </div>
            </nav>
            <ul id="side-menu" class="sidenav side-menu">
                <li><a class="subheader">FOODNINJA</a></li>
                <li><a href="/index.html" class="waves-effect">Home</a></li>
                <li><a href="/pages/about.html" class="waves-effect">About</a></li>
                <li><div class="divider"></div></li>
                <li>
                  <a href="/pages/contact.html" class="waves-effect">
                    <i class="material-icons">mail_outline</i>Contact
                  </a>
                </li>
              </ul>`;
    }
}
              
customElements.define('vm-nav', VmNav);
