import logo from "./logo.svg";
import "./App.css";

const token = process.env.REACT_APP_Access_TOKEN;

const url = "https://api-ssl.bitly.com/v4/shorten";
function App() {
  const generateLink = (e) => {
    e.preventDefault();
    const longLink = e.target.newLink.value;
    console.log(longLink);
    console.log(token);
    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ long_url: longLink, domain: "bit.ly" }),
    })
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <form action="" onSubmit={generateLink}>
        <input type="text" name="newLink" />
        <button>Shorten</button>
      </form>
      <div className="output">
        <input type="text" />
        <button className="copy-button">copy Link</button>
      </div>
    </div>
  );
}

export default App;
