function generatePoem(event) {
  event.preventDefault();

 let apiKey="7da4d2833b785tc382cf9d899bo46033";
 let prompt = "Generate a poem";
 let context ="You are a master poet. You can write poems on any topic. Write in basic HTML format. Do not include any explanations or additional text. Just write the poem.";
 let apiUrl =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePoem); {
  };
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);