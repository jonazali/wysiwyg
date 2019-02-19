
/**
 * Toggles  active class on editable text
 * @param {Event} event 
 */

// function that will add a class to editable text
export default function toggleActive(event) {
    //get the parent element
    const editableText = event.target.parentElement;
    console.log(editableText);
    //toggle the class active (on some element)
    editableText.classList.toggle('active');

    document.querySelector('.save-button').style.display = "block";

}