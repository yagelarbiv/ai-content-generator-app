import dotenv from 'dotenv';
import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyC5P1jeh3Ii3-j9xxu-wTq1W_t7YQwjjnM';
if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in the environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generatePrompt(prompt: string): Promise<string> {
    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: {
            temperature: 0.2,
        },
    });

    const response = result.response;
    if (!response.text()) {
        throw new Error('No text generated');
    }

    return response.text();
    } catch (error) {
        console.error("Error generating prompt:", error);
        throw error;
    };
}