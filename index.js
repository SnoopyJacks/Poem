function generatePoem(event) {
  event.preventDefault();

  alert("Generating your poem...");
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);