import axios from "axios";

const geminiurl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GOOGLE_GEMINI_KEY}`

export const airesponse = async(prompt) => {
  try {
    const res = await axios.post(geminiurl , {
      "contents": [
      {
        "parts": [
          {
            "text": prompt
          }
        ]
      }
    ]
    })
    
    return res.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.log(error);
  }
}