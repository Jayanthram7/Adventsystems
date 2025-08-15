import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyAQVNkYJ1FXPCf7PIqTQFjCasMRTWdgX84";
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function getChatResponse(message: string): Promise<string> {
  try {
    const systemPrompt = `You are TallyPrime Assistant, an AI helper specializing in TallyPrime accounting software. 
    Provide helpful, accurate information about:
    - TallyPrime features and functionality
    - Accounting principles and best practices
    - GST compliance and tax matters
    - Inventory management
    - Financial reporting
    - Business insights and recommendations
    
    Keep responses concise but informative. Use a professional, helpful tone.
    If asked about non-TallyPrime topics, politely redirect to TallyPrime-related queries.
    
    Format your responses in a conversational manner suitable for chat.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      contents: message,
    });

    return response.text || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I apologize, but I'm experiencing technical difficulties. Please try again in a moment. If the issue persists, you can contact TallyPrime support directly.";
  }
}
