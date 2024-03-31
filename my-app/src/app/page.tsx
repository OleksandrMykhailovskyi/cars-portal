import Image from 'next/image'

import PlusIcon from "@/components/icons/PlusIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import { Wrapper } from '@/components/general/Wrapper';

export default function Home() {
  return (
    <div className="relative">
      <header 
        className="sticky bg-white w-full z-50 left-0 right-0 top-0 shadow-header">
        <div 
          className="px-4 py-2 flex justify-between items-center w-full gap-4"
        >
          <button>
            <MenuIcon />
          </button>
          <a className='relative w-full h-[30px]'>
            <Image 
              src={"logo.svg"}
              alt={"logo"}
              fill
              priority
            />
          </a>
          <button 
            className="h-[35px] text-xs rounded font-medium tracking-[0.7px] px-3 py-[1px] leading-4 text-white bg-[#0071CE] flex items-center justify-between max-w-[130px] gap-2.5"
          >
            <span>
              <PlusIcon />
            </span>
            <span className="leading-[14px]">Zacznij sprzedawać</span>
          </button>
        </div>
      </header>
      <main className="divide-y flex flex-col mb-20">
        <Wrapper />
        {/* <EmblaCarousel />
        <div className="my-6 flex flex-col gap-4 mx-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Audi Q5</h3>
            <p className="text-[#020309] leading-5">2010 · 262 421 km · 1 968 cm3 · Diesel</p>
          </div>
          <div>
            <div className="flex items-baseline gap-2 text-[#C82814]">
              <h3 className="text-2xl font-bold">49 800</h3>
              <p>PLN</p>
            </div>
            <p className="text-[#66676C] text-sm">Do negocjacji</p>
          </div>
        </div>
        <div className="pt-6 mb-6 mx-4 ">
          <div className="p-4 bg-[#ECF5FE] flex justify-between">
            <div className="flex flex-col text-[#020309]">
              <p>Lub od</p>
              <div className="flex">
                <span className="font-bold">904 PLN</span>
                /mc
              </div>

            </div>
            <button className="border-[3px] rounded border-[#0071CE] px-6 py-1 bg-white text-[#0071CE] font-bold font">
              Sprawdź stawkę
            </button>
          </div>
        </div>
        <div className="pt-6 mb-6 grid grid-cols-2 gap-y-4 gap-x-2 mx-4 ">
          <div>
            <p className="text-sm text-[#020309] ">21.03.2024, 13:33</p>
          </div>
          <div>
            <p className="text-sm text-[#020309]">ID: 612622343423</p>
          </div>
          <div className="flex gap-2 items-center">
            <ShareIcon />
            <p className="text-[#0071CE] text-xs font-bold">Udostępnij to ogłoszenie</p>
          </div>
          <div className="flex gap-2 items-center">
            <BookmarkIcon />
            <p className="text-[#0071CE] text-xs font-bold">Zgłoś naruszenie</p>
          </div>
        </div>
        <Characteristics /> */}
      </main>
    </div>
  );
}
