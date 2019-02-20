export default class EditableText extends HTMLElement{

    constructor(){
        super();
        this.toggleActive = this.toggleActive.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML=`

        <button type="button" class="edit-button">Edit</button>
        <p class="text-element">Go ahead, edit me however you want!</p>
        
        <wysiwyg-editor></wysiwyg-editor>

        `;

        //add event listeners
        this.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', this.toggleActive)
        );

        this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);

    }

    toggleActive() {
        this.classList.toggle('active');
        // document.querySelector('.save-button').style.display = "block";
        console.log(this);
    
    }

    handleInput(event) {


        const textElement = this.querySelector('.text-element');
    
        if(event.target.type === 'text' || 
            event.target.tagName === 'TEXTAREA'){
                const text = event.target.value;
                textElement.innerText = text;
                
            } else {
    
                //handle the styles
                const { value, name: styleName } = event.target;
                const unit = event.target.dataset.unit || '';
                textElement.style[styleName] = `${value}${unit}`;
                
            }
    
    }
}