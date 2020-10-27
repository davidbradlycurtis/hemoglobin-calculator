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
  
      <!-- Collapse button -->
      <button class="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="navbarCollapse">
  
        <!-- Left Links -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a rel="noopener" class="nav-link" href="#">Calculator <span
                class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a rel="noopener" class="nav-link"
              href=${this.getAttribute('siteURL')} target="_blank">About</a>
          </li>
        </ul>
      </div>
    </nav>
      `;
    }
  }
  window.customElements.define('calc-header', calcHeader);