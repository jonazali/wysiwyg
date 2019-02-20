export default function addParagraph() {
    //create element (section w/ the class of 'editable-text-)
    const newEditableText = document.createElement('wysiwyg-editable-text');
    newEditableText.className = 'editable-text';
    //append that to main (before our button)
    document.querySelector('main').insertBefore(newEditableText, event.target);
}