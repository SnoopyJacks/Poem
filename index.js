function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
  event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "7da4d2833b785tc382cf9d899bo46033";
let context = "You are a poet. You write beautiful and creative poems on various topics. Your poems are often emotional, thought-provoking, and full of vivid imagery. You have a deep understanding of language and use it to create powerful and evocative poetry. Your poems can be about love, nature, life, death, or any other topic that inspires you. You have a unique style that sets you apart from other poets, and your work is widely admired for its beauty and depth.";
let prompt = `User instructions: Write a poem about ${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">Generating poem on ${instructionsInput.value}...</div>`;

axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);