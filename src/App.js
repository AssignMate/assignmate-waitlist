import "./styles.css";

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxfi01kW0oJKzwoOlT8cft28Fl23Gm5tk4AnDodmehTv_QPt01Qiq7z5iwazEFOOZ1v3g/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Waitlist for "assignmate"</h1>
      <h2>
        We are working on the platform right now, until then, if you are
        interested in trying our platform once it comes out, join the waitlist!!
        It's FREE
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}
