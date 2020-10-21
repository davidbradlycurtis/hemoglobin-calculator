class calcFooter extends HTMLElement {
    constructor() {
      super();
      const siteURL = encodeURI(
        this.getAttribute('siteURL').replace(/[^:/.a-zA-Z0-9-, ]/g, ''),
      );
      const sourceURL = encodeURI(
        this.getAttribute('sourceURL').replace(/[^:/.a-zA-Z0-9-, ]/g, ''),
      );
      this.innerHTML = `
      <!-- Sticky footer with padding (py level 3) on y-axis (top and bottom) -->
    <footer class="footer bg-light mx-0 py-3 fixed-bottom text-center">
      <a target="_blank" rel="noopener" 
      href="https://www.linkedin.com/in/anna-curtis-b0266397/">Anna Curtis</a>
      &nbsp; &#9670; &nbsp;
      <a target="_blank" rel="noopener" href=${siteURL}>David Curtis</a>
      &nbsp; &#9670; &nbsp;
      <a class="btn btn-light btn-sm" href=${sourceURL} 
        target="_blank" rel="noopener" role="button">
      <i class="fas fa-star"></i>   
      Source code on GitHub 
      <i class="fab fa-github ml-1"></i></a>
    </footer>
      `;
    }
  }
  
  window.customElements.define('calc-footer', calcFooter);