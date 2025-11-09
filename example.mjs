import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Check if API key is provided
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    console.error("Please set your OPENAI_API_KEY in your .env file.");
    console.error("You can get an API key from: https://platform.openai.com/account/api-keys");
    process.exit(1);
}

const client = new OpenAI({ apiKey });

try {
    const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: "Write a one-sentence bedtime story about a unicorn."
            }
        ]
    });

    console.log("Response:", response.choices[0].message.content);
} catch (error) {
    console.error("Error:", error.message);
}