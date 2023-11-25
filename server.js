import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
console.log(process.env.OPENAI_API_KEY);

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from a directory named 'public'
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.post("/generate-grocery-list", async (req, res) => {
  try {
    const { recipe, numberOfPeople } = req.body;
    const instructions =
      "You are a chef assisting with grocery planning. Provide a detailed grocery list.";
    const customPrompt = `Based on the recipe: "${recipe}" for ${numberOfPeople} people, generate a detailed grocery list of the food ingredients, including quantities in grams. Always provide the grocery list in spanish`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "user", content: instructions },
          { role: "user", content: customPrompt },
        ],
      }),
    });

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      const generatedGroceryList = data.choices[0].message.content;
      res.json({ success: true, generatedGroceryList: generatedGroceryList });
    } else {
      res.json({
        success: false,
        error: "No response received from OpenAI API.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error occurred while generating grocery list.",
    });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
