import { useState, useEffect, useRef } from 'react'
import "prismjs/themes/prism-tomorrow.css" // Premium dark syntax theme
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`)

  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  // Force Prism to highlight the editor block whenever the code state changes
  useEffect(() => {
    prism.highlightAll()
  }, [code])

  // Sync scrolling between the textarea and the code container behind it
  const textareaRef = useRef(null);
  const preRef = useRef(null);

  const handleScroll = () => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  async function reviewCode() {
    if (loading) return; 
    
    setLoading(true);    
    setReview('');       
    setCopiedAll(false);
    
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("### Error: Failed to generate a code review. Please check your backend connection.");
    } finally {
      setLoading(false);   
    }
  }

  const handleCopyAll = () => {
    if (!review) return;
    navigator.clipboard.writeText(review);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const MarkdownComponents = {
    pre: ({ children, ...props }) => {
      const [copied, setCopied] = useState(false);

      const handleSnippetCopy = () => {
        const codeText = children?.props?.children || "";
        navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      return (
        <div className="snippet-wrapper">
          <button className="copy-snippet-btn" onClick={handleSnippetCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <pre {...props}>{children}</pre>
        </div>
      );
    }
  };

  return (
    <>
      <main>
        {/* Left Side: Dynamic Colorful Code Editor */}
        <div className="left">
          <div className="code-editor-container">
            {/* The Background Layer that handles the colors */}
            <pre ref={preRef} className="editor-pre" aria-hidden="true">
              <code className="language-javascript">
                {code}
              </code>
            </pre>
            
            {/* The Foreground Layer that handles user typing */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onScroll={handleScroll}
              className="code-textarea"
              placeholder="Paste your code here..."
              spellCheck="false"
            />
          </div>
          
          <button 
            onClick={reviewCode} 
            className={`review-btn ${loading ? 'loading-btn' : ''}`}
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze Code'}
          </button>
        </div>

        {/* Right Side: Results + Loader + Fixed Copy Controls */}
        <div className="right">
          {loading ? (
            <div className="review-content">
              <div className="loading-container">
                <div className="skeleton title-skeleton"></div>
                <div className="skeleton score-skeleton"></div>
                <div className="skeleton-text-group">
                  <div className="skeleton text-skeleton short"></div>
                  <div className="skeleton text-skeleton"></div>
                  <div className="skeleton text-skeleton medium"></div>
                </div>
                <div className="skeleton title-skeleton"></div>
                <div className="skeleton-text-group">
                  <div className="skeleton text-skeleton medium"></div>
                  <div className="skeleton text-skeleton short"></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="review-content">
                <Markdown 
                  rehypePlugins={[rehypeHighlight]}
                  components={MarkdownComponents}
                >
                  {review || "### Paste Code and click Analyze\n*Your structured AI feedback will appear here.*"}
                </Markdown>
              </div>

              {review && (
                <div className="copy-all-container">
                  <button className="copy-all-btn" onClick={handleCopyAll}>
                    {copiedAll ? '✓ Copied Full Review!' : '📋 Copy Full Review'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App