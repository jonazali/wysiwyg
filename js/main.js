import toggleActive from "./toggleActive.js";


// add event listener (Click) to each buttons
// select edit button
document.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', toggleActive));
// listen for input events from editor
// when fired, update text (or style)
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

//update text (or style) of sibling
function handleEditorInput(event) {

    console.log(event.target);

    if(event.target.type === 'text' || 
        event.target.tagName === 'TEXTAREA'){
            const textElement = event.currentTarget.parentNode.querySelector('.text-element');
            const text = event.target.value;
            textElement.innerText = text;
            
        }

}