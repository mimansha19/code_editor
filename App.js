import React, { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState('print("Hello, World!")');
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    const res = await fetch("https://code-editor-backend-h3k7.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, input }),
    });
    const data = await res.json();
    setOutput(data.output);
  };

  return (
    <div className="App">
      <h2>Mini Python Code Editor</h2>
      <textarea
        rows="10"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <textarea
        rows="5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input (if any)"
      />
      <button onClick={runCode}>Run</button>
      <pre>{output}</pre>
    </div>
  );
}

export default App;
