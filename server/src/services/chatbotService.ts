import ChatCompletionsAPI, { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getChatbotResponse = async (messages: ChatCompletionsAPI.ChatCompletionMessageParam[]) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });
  return response.choices[0].message?.content;
};
