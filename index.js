import { ChatCohere } from "@langchain/cohere";
import { PromptTemplate } from "@langchain/core/prompts";
import dotenv from 'dotenv';

dotenv.config();

const model = new ChatCohere({apiKey: process.env.COHERE_API_KEY});

const promptTemplate = PromptTemplate.fromTemplate(
  "Give me a recipe for {food}"
);

const chain = promptTemplate.pipe(model);

const result = await chain.invoke({ food: "apple pie" });

console.log(result);