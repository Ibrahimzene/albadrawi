import React from "react";
import Button from "./Button";

function Lebenslauf() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-col xl:w-1/2">
{/*         <img
          src="../"
          alt="lebenslauf"
          width={50}
          height={50}
          className=" rounded-full absolute left-[1px] top-[-40px] w-10 lg:w-[50px]"
        /> */}

        <h1 className="bold-52 lg:bold-88 text-green-50">Lebenslauf</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Fokussiert auf Innovationen, kreative Lösungen und ständige
          Weiterentwicklung. Grundkenntnisse in der Webentwicklung durch
          praxisorientierte Projekte. Zielorientiert, teamfähig für effektive
          Lösungen.
        </p>
{/*         <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center pap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <img
                  src="../star.png"
                  key={index}
                  alt="logo-review"
                  className="w-5 h-5"
                />
              ))}
            <p className="regular-16 ml-3"></p>
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            4999K
            <span className="regular-16 lg:regular-20 ml-2">
              Ausgezeichnete Bewertungen.
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Lebenslauf" variant="btn_green" />
          <Button
            type="button"
            title="Wie ich arbeite?"
            icon="arrow"
            variant="btn_white_text"
          />
        </div> */}
      </div>
      {/*Das ist die Blackbox div*/}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[500px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Webentwicklunger</p>
              <img src="../coding.png" alt="codig icon" className="w-5 h-5" />
            </div>
            <p className="bold-20 text-white">Frontend-Entwicklung</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Fähigkeiten</p>
              <p className="bold-20 text-white">°HTML</p>
              <p className="bold-20 text-white">°JavaScript</p>
              <p className="bold-20 text-white">°TypeScript</p>
              <p className="bold-20 text-white">°React-Vite-Next.js</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Styling</p>
              <p className="bold-20 text-white">°CSS</p>
              <p className="bold-20 text-white">°Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lebenslauf;
