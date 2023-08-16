import { useState, useEffect } from 'react';
import "./styles.css";

export default function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  
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
      <h1 style={{ fontSize: width < 768 ? '1.5rem' : '2rem' }}>
      Waitlist for "assignmate"
      </h1>

      <h2 style={{ fontSize: width < 500 ? '1rem' : '1.25rem' }}>
      We are working on the platform right now, until then, if you are
        interested in trying our platform once it comes out, join the waitlist!!
        It's FREE
      </h2>
      <div>
      <form className="form" style={{ maxWidth: width < 768 ? '200%' : '200px' }} onSubmit={(e) => Submit(e)}>
      <input 
          style={{ width: '110%',height: '12px' }}
          placeholder="Your name"  name="Name" type="text"
        />
        <input
          style={{ width: '110%',height: '12px' ,}}
          placeholder="Your email"  name="Email" type="text" 
        />
        <button   type="submit"
        style={{ backgroundColor: 'yellow', borderRadius: '120px',padding: '12px 24px' }} >Submit</button>
      </form>

    </div>
    </div>
  );

}
