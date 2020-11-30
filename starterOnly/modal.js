function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
const closeModal = () => {
  modalbg.style.display = "none";
}

// Close modal event
closeModalBtn.addEventListener("click", closeModal);

const validate = () => {
  // Return une nodelist 
  const checkboxes = document.querySelectorAll(".city-checkbox:checked");
  // Return un element
  const terms = document.querySelector("#checkbox1:checked");

  const errMsgs = document.querySelectorAll(".error-msg");
  const newText = document.createElement("p");
  newText.className = "error-msg";

  // Evite que le message d'erreur s'affiche plusieurs fois
  if (errMsgs.length > 0) {
    errMsgs.forEach(e => {
      e.parentNode.removeChild(e)
    });
  }

  // Check si au moins 1 ville est cochée
  if (checkboxes.length == 0) {
    newText.innerHTML = "Vous devez choisir une option.";
    document.querySelector(".cities").appendChild(newText);
    return false;
  }
  
  // Check si les conditions d'utilisations sont cochées
  if (terms == null) {
    newText.classList.add("terms-error");
    newText.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    document.querySelector(".checkbox1_label").appendChild(newText);
    return false;
  }
  
  alert("Merci ! Votre réservation a été reçue.");
}