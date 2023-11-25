document
  .getElementById("recipeForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // Retrieve the input values
    const formData = {
      recipe: document.getElementById("recipeInput").value,
      numberOfPeople: document.getElementById("amountOfPeople").value,
    };

    // Make the request to your backend
    try {
      const response = await fetch("/generate-grocery-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      const resultContainer = document.getElementById("generatedText");

      if (data.success) {
        resultContainer.innerText = data.generatedGroceryList;
      } else {
        resultContainer.innerText = "No response received.";
      }
    } catch (error) {
      console.log(error);
      resultContainer.innerText = "Error occurred while generating.";
    }
  });
