class booksPreview extends HTMLElement {
  constructor() {
    super();
    this.attatchShadow ({mode: 'open'})
  }
}

customElements.define( name: 'books-preview', booksPreview)
