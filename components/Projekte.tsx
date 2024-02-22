import Image from 'next/image'
import React from 'react'

const Projekte = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/Verified-icon.png" alt="camp" width={60} height={60} />
        <p className="uppercase regular-18 mt-2 mb-3 text-green-50">
          WEB-DEVELOPER
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">BILDUNGSWEG</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Hallo! Ich lerne Web-Entwicklung und erstelle individuelle Websites für Personen wie Sie. Wenn Sie Interesse haben, schreiben Sie mir einfach und ich helfe Ihnen gerne dabei, online großartig auszusehen.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/verified.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
{/*           <Image 
            src="/star.png"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          /> */}
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full gap-2">
                <p className="bold-20 text-gray-50">DCI Digital Career Institute GmbH , Berlin</p>
                <p className="regular-16 text-gray-20">04/2023 - 07/2024</p>
                
              </div>
              <p className="bold-20 text-gray-50 mt-2">Bei Real,- SB Warenhaus</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Durchführung einer einjährigen Vollzeit Ausbildung,
einschließlich Technologien des
MERN-Stack</p>
              <h4 className="bold-20 text-gray-50 mt-2">Denn ́s Biomarkt, Bayreuth</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projekte