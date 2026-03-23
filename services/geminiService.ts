import { GoogleGenAI, Type } from "@google/genai";
import { ConsultationResponse } from "../types";

// Fix: Strictly follow the guideline to initialize with new GoogleGenAI({apiKey: process.env.API_KEY})
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProjectConsultation = async (problemDescription: string): Promise<ConsultationResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `I have a business problem: "${problemDescription}". As a senior software architect, provide a high-level technical recommendation, estimated effort, and 3 clear next steps.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            estimatedEffort: { type: Type.STRING },
            nextSteps: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["recommendation", "estimatedEffort", "nextSteps"]
        }
      }
    });

    // Fix: Access response.text property directly as per the latest SDK guidelines
    const jsonStr = (response.text || '{}').trim();
    return JSON.parse(jsonStr) as ConsultationResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      recommendation: "We recommend a custom audit of your current processes to identify the best technology stack.",
      estimatedEffort: "3-6 months depending on scope",
      nextSteps: ["Book a discovery call", "Prepare current workflow documentation", "Define success metrics"]
    };
  }
};