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

// Close modal event
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  let checkboxes = document.querySelectorAll(".test:checked");
  let terms = document.querySelector("#checkbox1:checked");

  // Check si au moins 1 ville est cochée
  if (checkboxes.length == 0) {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Vous devez choisir une option.");
    newDiv.appendChild(newContent);
    document.querySelector(".cities").appendChild(newDiv);
    return false;
  }
  
  // Check si les conditions d'utilisations sont cochées
  if (terms == null) {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Vous devez vérifier que vous acceptez les termes et conditions.");
    newDiv.appendChild(newContent);
    document.querySelector(".checkbox1_label").appendChild(newDiv);
    return false;
  }
  alert("Merci ! Votre réservation a été reçue.");
}