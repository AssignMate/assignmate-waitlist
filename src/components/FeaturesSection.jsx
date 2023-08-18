import React from "react";
import FontLimelight from "../fonts/limelight";

export default function featureSection() {
  return (
    <section className="my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
        <div className="relative lg:mx-4 xl:mx-20">
          <img
            src="https://img.freepik.com/free-photo/teenager-doing-math-homework-library_23-2147860701.jpg?w=996&t=st=1692274186~exp=1692274786~hmac=02fe0d82cf61b3f74b39dd3ab14e1f55fcddd6724360d4ea4a0b0e3af2c95623"
            className="rounded-2xl"
          ></img>
        </div>
        <div className="flex flex-col justify-around py-5 px-4 lg:px-8">
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
              Well look no further ! ASSIGNMATE is here to help you (wink)(wink)
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
        <div className="flex flex-col justify-around py-5 px-4 lg:px-8">
          <h2 className="font-[Limelight] pb-6 text-4xl lg:text-6xl ">
            Do Other's Assignments as a Side Hustle
          </h2>
          <div className="text-xl lg:text-2xl">
            <ul className="pb-4">
              <li>Looking for ways to make some side money ?</li>
              <li>Got time in hand to earn some extra bucks as you study ?</li>
            </ul>
            <p>
              Well look no further ! ASSIGNMATE is here to help you (wink)(wink)
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
  );
}
