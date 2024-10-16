import { useState, useEffect, useRef } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const editorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      mode: 'tree',
      modes: ['code', 'form', 'text', 'tree', 'view', 'preview'], // allowed modes
      onChange: function () {
        console.log('change')
      },
      onModeChange: function (mode) {
        const treeMode = document.getElementById('treeModeSelection')
        const textMode = document.getElementById('textModeSelection')

        treeMode.style.display = textMode.style.display = 'none'

        if (mode === 'code' || mode === 'text') {
          textMode.style.display = 'inline'
        } else {
          treeMode.style.display = 'inline'
        }
      },
      indentation: 4,
      escapeUnicode: true,
      onTextSelectionChange: function (start, end, text) {
        alert('start: ' + JSON.stringify(start) + ', end: ' + JSON.stringify(end) + ', text:' + text);
      },
      onSelectionChange: function (start, end) {
        alert('start: ' + JSON.stringify(start) + ', end: ' + JSON.stringify(end));
      },
      onEvent: function (node, event) {
        if (event.type === 'select') {
          alert(`Selected node: ${JSON.stringify(node.path)}`);
        }
      }
    };
    editorRef.current = new JSONEditor(containerRef.current, options);

    // Set initial JSON data
    const initialJson = {
      "name": "John Doe",
      "age": 30,
      "city": "New York"
    };
    editorRef.current.set(initialJson);

    // Cleanup on component unmount
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div ref={containerRef} style={{ width: '600px', height: '400px' }}></div>
    </>
  );
}

export default App;