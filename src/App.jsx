import { useState, useRef } from "react";
import "./App.css";

const token = process.env.REACT_APP_Access_TOKEN;

function App() {
  const [shortLink, setShortLink] = useState("");
  const textAreaRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState("");

  const generateLink = (e) => {
    e.preventDefault();
    const longLink = e.target.newLink.value;
    console.log(longLink);
    console.log(token);

    async function fetchLink() {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: longLink, domain: "bit.ly" }),
      });
      const links = await response.json();
      setShortLink(links.link);
    }
    fetchLink();
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  };

  return (
    <div className="App">
      <form action="" onSubmit={generateLink}>
        <input type="text" name="newLink" />
        <button>Shorten</button>
      </form>
      <div className="output">
        <input
          ref={textAreaRef}
          type="text"
          value={shortLink ? shortLink : ""}
        />
        <button className="copy-button" onClick={copyToClipboard}>
          copy Link
        </button>
        {copySuccess}
      </div>
    </div>
  );
}

export default App;
