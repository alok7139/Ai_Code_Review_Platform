import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'prismjs/themes/prism-tomorrow.css'
import prism from 'prismjs'
import Editor from 'react-simple-code-editor'
import Markdown from "react-markdown"
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import axios from 'axios'


function App() {

  const [prompt, setprompt] = useState( `function sum(){
  return 1+1; }`)

  const [review, setreview] = useState(``)

  useEffect(() => {
    prism.highlightAll();
  } , [])

  const reviewcode = async() => {
      
    try {
      const res = await axios.post( `${backendUrl}/ai/get-response` , {prompt});
      setreview(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor 
             value={prompt}
             onValueChange={prompt => setprompt(prompt)}
             highlight={prompt => prism.highlight(prompt ,prism.languages.javascript , "javascript")}
             padding={10}
             style={{
              fontFamily : '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
             }}
            />
          </div>
          <div onClick={reviewcode} className="reviewbtn">Review</div>
        </div>
        <div className="right">
         <Markdown> {review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App
