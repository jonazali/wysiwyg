export default class EditableText extends HTMLElement {
  constructor() {
    super();
    this.toggleActive = this.toggleActive.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  get active() {
    return this.hasAttribute("active");
    // element.checked
  }

  set active(isActive) {
    if (isActive) {
      this.setAttribute("active", "");
    } else {
      this.removeAttribute("active");
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

        
            <button type="button" class="edit-button">Edit</button>
            <button type="button" class="delete-button">Delete</button>
        
        <p class="text-element">Go ahead, edit me however you want!</p>
        
        <wysiwyg-editor></wysiwyg-editor>

        `;

    //add event listeners
    this.querySelectorAll(".edit-button").forEach(button =>
      button.addEventListener("click", this.toggleActive)
    );

    this.querySelector("wysiwyg-editor").addEventListener(
      "input",
      this.handleInput
    );

    this.querySelectorAll(".delete-button").forEach(button =>
      button.addEventListener("click", this.deleteParagraph)
    );
  }

  toggleActive() {
    //this.classList.toggle('active');
    // document.querySelector('.save-button').style.display = "block";
    // this.setAttribute('active', '');
    // this.getAttribute('active'); // ''
    // this.hasAttribute('active'); // true or false

    this.active = !this.active;
  }

  handleInput(event) {
    const textElement = this.querySelector(".text-element");

    if (event.target.type === "text" || event.target.tagName === "TEXTAREA") {
      const text = event.target.value;
      textElement.innerText = text;
    } else {
      //handle the styles
      const { value, name: styleName } = event.target;
      const unit = event.target.dataset.unit || "";
      textElement.style[styleName] = `${value}${unit}`;
    }
  }

  deleteParagraph() {
    this.parentElement.remove();
  }
}
