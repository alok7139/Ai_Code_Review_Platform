import axios from "axios";

const geminiurl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GOOGLE_GEMINI_KEY}`

export const airesponse = async (prompt) => {
  try {
    const res = await axios.post(geminiurl, {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        } 
      ],
      system_instruction: { 
        parts: [
          {
            text: `
            You are a knowledgeable and concise AI assistant.

              Your goals:
            - Always provide clear, accurate, and helpful answers.
            - Use simple, easy-to-understand language.
            - Structure answers with bullet points or code blocks where appropriate.
            - Give examples if a concept might be unclear.
            - If the user provides code, suggest improvements or explain the logic.
            - If there are multiple interpretations, briefly mention them.
            
            Rules to follow:
            - Be neutral and respectful in tone.
            - Don’t hallucinate or make up facts.
            - Don’t give legal, financial, or medical advice.
            - Don’t assume anything not in the prompt unless it’s a safe default.
            - Always prefer factual correctness over creativity unless asked for creative writing.
            - If the request is unclear, ask clarifying questions.
            
            When the user asks for code:
            - Return valid and working code only.
            - Keep code clean, readable, and commented when helpful.
            - Mention time/space complexity for algorithms if relevant.

            `
          }
        ]
      }
    });
    // console.log(res.data)
    return res.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.log(error?.response?.data || error.message);
  }
}
