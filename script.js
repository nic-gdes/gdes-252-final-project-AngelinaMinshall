// hamburger
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-links");
});
// button modal

// Get the modal and buttons
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners for the buttons
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

  