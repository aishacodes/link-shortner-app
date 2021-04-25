import logo from "./logo.svg";
import "./App.css";

const token = process.env.Access_TOKEN;
const url = "https://api-ssl.bitly.com/v4/shorten";
function App() {
  const generateLink = (e) => {
    e.preventDefault();
    const longLink = e.target.newLink.value;
    console.log(longLink);
    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ long_url: longLink, domain: "bit.ly" }),
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <form action="" onSubmit={generateLink}>
        <input type="text" name="newLink" />
        <button>Shorten</button>
      </form>
      <input type="text" />
      <button>copy Link</button>
    </div>
  );
}

export default App;
