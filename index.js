function generatePoem(event) {
  event.preventDefault();

  // Accessing the input by its ID
  let instructionsInput = document.querySelector("#instructions").value;

  // Debugging: Log the input value
  console.log("Instructions input value: ", instructionsInput);

  let apiKey = "7da4d2833b785tc382cf9d899bo46033"; // Consider secure method for API key
  let prompt = `Generate a poem on the topic of ${instructionsInput}`;
  let context =
    "You are a master poet. You can write poems on any topic. Write in basic HTML format.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => generatePoemResponse(response, instructionsInput))
    .catch((error) => {
      console.error("Error fetching the poem:", error);
      let poemElement = document.querySelector(".poem");
      poemElement.innerHTML = "Error generating poem. Please try again.";
    });
}

function generatePoemResponse(response, instructionsInput) {
  let poemElement = document.querySelector(".poem");
  poemElement.classList.remove("hidden");

  // Assuming the poem text is located in response.data.poem
  let poemText = response.data.poem; // Adjust based on your actual response structure
  poemElement.innerHTML = `<div>${poemText}</div>`; // Display the generated poem
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
