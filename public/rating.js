const ratingButtons = document.querySelectorAll(".btn-rating");
const submitButton = document.querySelector(".btn-submit-rating");
// References to the two cards.
const cardRating = document.querySelector(".card-rating");
const cardThanks = document.querySelector(".card-thanks");
// Rating result is the text on the thank you card that shows the rating selected.
const ratingResult = document.querySelector(".rating-result");

// Store the rating state.
let rating = 0;

// Process rating buttons.
function setRating() {
  // Set the rating selected.
  rating = this.dataset.rating;

  // Toggle the rating selected and deselect other rating buttons.
  ratingButtons.forEach((button) => {
    if (button === this) {
      button.classList.toggle("btn-rating-active")
    } else {
      button.classList.remove("btn-rating-active")
    }
  })
}

// Hide rating card and show thank you card.
function submitRating() {
  ratingResult.innerHTML = `You selected ${rating} out of 5`
  cardRating.classList.toggle("hide-card")
  cardThanks.classList.toggle("hide-card");
}

// Set up event listeners for ratings selection buttons.
ratingButtons.forEach((button) => {
  button.addEventListener("click", setRating);
})

// Set up event listener for submit button.
submitButton.addEventListener("click", submitRating);