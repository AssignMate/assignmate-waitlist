import React, { useState } from "react";
import FontLimelight from "../fonts/limelight";

function SubscriptionForm() {
  const [formData, setFormData] = useState({ Name: "", Email: "" });

  function handleSubmit(e) {
    e.preventDefault();

    const formEle = e.target;
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxfi01kW0oJKzwoOlT8cft28Fl23Gm5tk4AnDodmehTv_QPt01Qiq7z5iwazEFOOZ1v3g/exec",
      {
        method: "POST",
        body: formDatab,
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
    <div className="flex flex-col items-center bg-[#18114e]">
      <FontLimelight />
      <h1 className="text-white m-4 font-[Limelight] text-3xl md:text-4xl lg:text-7xl text-center">
        Stay updated on our progress and get exclusive offers!
      </h1>
      <div className="m-4">
        <form
          className="flex flex-col items-center gap-[10px] justify-around"
          onSubmit={handleSubmit}
        >
          <input
            className="w-[400px] h-12 rounded-md pl-4 bg-[#00BBF9] text-black placeholder-black"
            placeholder="Your Name"
            name="Name"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            type="text"
          />
          <input
            className="w-[400px] h-12 rounded-md pl-4 bg-[#00BBF9] text-black placeholder-black"
            placeholder="Your Email"
            name="Email"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            type="text"
          />
          <button
            className="w-[400px] h-12 text-2xl rounded-md p-2 bg-black text-cyan-400"
            name="Name"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscriptionForm;
