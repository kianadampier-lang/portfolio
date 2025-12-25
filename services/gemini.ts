import { GoogleGenAI } from "@google/genai";

export interface TechInsight {
  title: string;
  summary: string;
  url?: string;
  sourceTitle?: string;
}

export const fetchTechTrends = async (): Promise<{ content: string; sources: { title: string; url: string }[] }> => {
  try {
    // Initialize the client inside the function to ensure process.env is available at execution time
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "What are the top 3 most exciting trends in frontend web development happening right now? Provide a brief enthusiastic summary for each.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "Unable to fetch insights at this time.";
    
    // Extract sources from grounding metadata
    const sources: { title: string; url: string }[] = [];
    
    // Check for grounding chunks in the response
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (groundingChunks) {
      groundingChunks.forEach((chunk: any) => {
        if (chunk.web && chunk.web.uri) {
          sources.push({
            title: chunk.web.title || new URL(chunk.web.uri).hostname,
            url: chunk.web.uri
          });
        }
      });
    }

    // Filter duplicates based on URL
    const uniqueSources = sources.filter((v, i, a) => a.findIndex(t => (t.url === v.url)) === i);

    return { content: text, sources: uniqueSources.slice(0, 4) }; // Limit sources to 4 for UI
  } catch (error) {
    console.error("Error fetching tech trends:", error);
    return { 
      content: "Could not retrieve live insights. Please check your connection or API configuration.", 
      sources: [] 
    };
  }
};