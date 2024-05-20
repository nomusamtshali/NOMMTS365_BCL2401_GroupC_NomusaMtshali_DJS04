class booksPreview extends HTMLElement {
  constructor() {
    super();
    this.attatchShadow ({mode: 'open'})
  }

  connectedCallback () {
    const {author, id, image, title} = this.dataset 
  }
}

customElements.define( name: 'books-preview', booksPreview)
