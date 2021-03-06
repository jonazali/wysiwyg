import toggleActive from "./toggleActive.js";
import addParagraph from "./addParagraph.js";


// add event listener (Click) to each buttons
// select edit button
document.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', toggleActive));
// listen for input events from editor
// when fired, update text (or style)
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

//update text (or style) of sibling
export function handleEditorInput(event) {


    const textElement = event.currentTarget.parentNode.querySelector('.text-element');

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

document.getElementById('add-button').addEventListener('click', addParagraph );