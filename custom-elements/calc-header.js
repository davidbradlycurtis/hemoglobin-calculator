class calcHeader extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <!-- Fixed navbar -->
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-medical-blue 
      p-2">
  
      <!-- Navbar brand -->
      <a rel="noopener" class="navbar-brand"
        href="#">${this.getAttribute('shortNum')}</a>
  
    </nav>
      `;
    }
  }
  window.customElements.define('calc-header', calcHeader);