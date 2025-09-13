
import { GoogleGenAI, Modality } from "@google/genai";

interface EditResult {
  imageBase64: string | null;
  text: string | null;
}

export async function editImage(
  base64ImageData: string,
  mimeType: string,
  prompt: string
): Promise<EditResult> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const imageDataPart = {
    inlineData: {
      data: base64ImageData.split(',')[1], // remove the "data:mime/type;base64," prefix
      mimeType: mimeType,
    },
  };

  const textPart = {
    text: prompt,
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [imageDataPart, textPart],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    let editedImageBase64: string | null = null;
    let responseText: string | null = null;
    
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          editedImageBase64 = part.inlineData.data;
        } else if (part.text) {
          responseText = part.text;
        }
      }
    }
    
    return { imageBase64: editedImageBase64, text: responseText };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
}
