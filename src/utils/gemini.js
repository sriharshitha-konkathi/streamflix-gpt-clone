import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

export const model = genAI.getGenerativeModel(
  { model: "gemini-2.0-flash" },
  { apiVersion: "v1" },
);
