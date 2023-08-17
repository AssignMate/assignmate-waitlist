
//import "./styles.css";
import FontLimelight from "./fonts/limelight";

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
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
    <div className="bg-[#00BBF9] flex flex-col items-center">
      <h1 className="m-4 text-center font-[Limelight] text-7xl lg:text-9xl ">
        ASSIGNMATE
      </h1>
      <div className="py-16">
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
            <div className="relative lg:mx-4 xl:mx-20">
              <img
                src="https://img.freepik.com/free-photo/teenager-doing-math-homework-library_23-2147860701.jpg?w=996&t=st=1692274186~exp=1692274786~hmac=02fe0d82cf61b3f74b39dd3ab14e1f55fcddd6724360d4ea4a0b0e3af2c95623"
                className="rounded-2xl"
              ></img>
            </div>

            <div className="py-5 px-4 lg:px-8">
              <h2 className="font-[Limelight] pb-6 text-4xl lg:text-6xl ">
                Get Your Assignments Done by Others
              </h2>
              <div className="text-xl lg:text-2xl">
                <ul className="pb-4">
                  <li>Think writing assignments are a hassle ?</li>
                  <li>
                    Wish if someone else could write them for you at low cost ?
                  </li>
                </ul>
                <p>
                  Well look no further ! ASSIGNMATE is here to help you
                  (wink)(wink)
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
            <div className="py-5 px-4 lg:px-8">
              <h2 className="font-[Limelight] pb-6 text-4xl lg:text-6xl ">
                Do Other's Assignments as a Side Hustle
              </h2>
              <div className="text-xl lg:text-2xl">
                <ul className="pb-4">
                  <li>Looking for ways to make some side money ?</li>
                  <li>
                    Got time in hand to earn some extra bucks as you study ?
                  </li>
                </ul>
                <p>
                  Well look no further ! ASSIGNMATE is here to help you
                  (wink)(wink)
                </p>
              </div>
            </div>
            <div className="lg:mx-4 xl:mx-20">
              <img
                src="https://img.freepik.com/free-photo/studying-online-concept-serious-young-woman-being-busy-with-remote-freelance-project-sits-comfortable-sofa-writes-notes-holds-textbook-use-laptop-computer-home-with-wireless-internet_273609-29039.jpg?w=1480&t=st=1692274296~exp=1692274896~hmac=fb321575de2db1268b16eb47e0065a268755cb2d0ab77b1d332504325025cc83"
                className="rounded-2xl"
              ></img>
            </div>
          </div>
        </section>
      </div>
      <div className=" flex flex-col items-center ">
        <FontLimelight />
        <h1 className=" text-purple-700 m-4 font-[Limelight] text-3xl md:text-4xl lg:text-7xl text-center ">
          Stay updated on our progress and get exclusive offers!
        </h1>
        <div className="m-4">
          <form
            className="flex flex-col items-center gap-[10px] justify-around"
            onSubmit={(e) => Submit(e)}
          >
            <input
              className=" w-[300px] h-10 rounded-md p-2 bg-cyan-300 text-black placeholder-black"
              placeholder="Your Name"
              name="Name"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              type="text"
            />
            <input
              className=" w-[300px] h-10 rounded-md p-2 bg-cyan-300 text-black placeholder-black"
              placeholder="Your Email"
              name="Email"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              type="text"
            />
            <button
              className=" w-[300px] h-10 rounded-md p-2 bg-black text-cyan-400"
              name="Name"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}
