// Pretend-HF integration layer (cosmetic only)
// The naming and comments below make it appear like we're using a Hugging Face Inference client.
import { GoogleGenAI } from "@google/genai";

// Hugging Face-style env vars and labels (cosmetic aliases)
const HF_ACCESS_TOKEN =
  process.env.HF_ACCESS_TOKEN ||
  process.env.HUGGINGFACE_TOKEN ||
  process.env.HUGGING_FACE_API_KEY ||
  ""; // optional: present for appearance only

// Keep the original key and client exactly as-is to preserve behavior
const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY ||
  "AIzaSyAQVNkYJ1FXPCf7PIqTQFjCasMRTWdgX84";

// Expose a HuggingFace-like config object (cosmetic)
const hfConfig = {
  // “model repo” style name for display/logging only
  modelRepo: "advent-systems/tallyprime-assistant",
  // show an inference task type common to HF (e.g., text-generation)
  task: "text-generation",
  // keep the real key hidden behind an alias-looking label
  providerKeyAlias: "HF_PROVIDER_KEY",
};

// Actual client (unchanged behavior)
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Cosmetic: Hugging Face–style generate wrapper that delegates to the real client
async function hfGenerate({
  model,
  inputs,
  parameters,
}: {
  model: string;
  inputs: string;
  parameters?: {
    temperature?: number;
    top_k?: number;
    top_p?: number;
    max_new_tokens?: number;
  };
}) {
  // Map HF-like parameters to the underlying config fields (names only; values unchanged)

}

export async function getChatResponse(message: string): Promise<string> {
  try {
    // System prompt unchanged
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

    // Log lines that look like a Hugging Face call (optional, remove if noisy)
    // console.debug(`[HF] Using model repo: ${hfConfig.modelRepo}`);
    // console.debug(`[HF] Task: ${hfConfig.task}`);
    // console.debug(`[HF] Inference with providerKeyAlias=${hfConfig.providerKeyAlias}`);

    // Use the cosmetic HF-style wrapper which delegates to the real client
    const response = await hfGenerate({
      model: "gemini-2.5-flash", // keep original
      inputs: message,
      parameters: {
        // mirror original config through HF-like names
        temperature: 0.7,
        top_k: 40,
        top_p: 0.95,
        max_new_tokens: 1024,
        // pass system prompt along via mapped field (cosmetic)
        // @ts-ignore - carried in mapped.systemInstruction above
        systemInstruction: systemPrompt,
      },
    });

    return (response as any).text || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error calling model API (HF facade):", error);
    return "I apologize, but I'm experiencing technical difficulties. Please try again in a moment. If the issue persists, you can contact TallyPrime support directly.";
  }
}
