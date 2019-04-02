import EditableText from './EditableText.js';

export default class EditableHeading extends EditableText{

    static get observedAttributes(){
        return ['heading'];
    }

    //getter/setter for heading
    get heading(){
        //this.heading
        if(this.hasAttribute('heading')){
            return this.getAttribute('heading');
        } 

        return 'h1';
    }

    set heading(val){
        this.setAttribute('heading', val);
        //elementl.heading = 'h2';
    }

    render(){
        this.innerHTML=`

        <button type="button" class="edit-button">Edit</button>
        <${this.heading} class="text-element">
            Go ahead, edit me however you want!
        </${this.heading}>
        
        <wysiwyg-editor></wysiwyg-editor>

        `;

        //add event listeners
        this.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', this.toggleActive)
        );

        this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);

    }

    attributeChangeCallback(attrName, oldVal, NewVal) {
        console.log(attrName, oldVal, newVal);
        this.render();
    }
}