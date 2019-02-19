import toggleActive from "./toggleActive.js";


// add event listener (Click) to each buttons
// select edit button
document.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', toggleActive));

