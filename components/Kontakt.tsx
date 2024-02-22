import React from 'react'
import Image from 'next/image'

const Kontakt = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-1">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">KONTAKT</h2>
          <p className="regular-16 text-gray-10">Tel: 01628136116</p>
          <p className="regular-16 text-gray-10">Tel: albadrawi.me@gmail.com</p>

    {/*       <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div> */}
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/Ibrahim.png" alt="Ibrahim" width={600} height={900}  className="rounded-2xl"/>
        </div>
      </div>
    </section>
  )
}


export default Kontakt