import Image from 'next/image'

import { mockCarDetailsData } from "../../mock";

import ShareIcon from "@/components/icons/ShareIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import MenuIcon from "@/components/icons/MenuIcon";

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
          <a className='relative w-full h-[35px]'>
            <Image 
              src={"logo.svg"}
              alt={"logo"}
              fill
            />
          </a>
          <button 
            className="h-[35px] text-xs rounded font-medium tracking-[0.7px] px-3 py-[1px] leading-4 text-white bg-[#0071CE] flex items-center justify-between max-w-[130px] gap-2.5"
          >
            <button>
              <PlusIcon />
            </button>
            <span className="leading-[14px]">Zacznij sprzedawać</span>
          </button>
          
        </div>
      </header>
      <main className="mx-4 divide-y flex flex-col mb-20">
        <div className="my-6 flex flex-col gap-4">
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
        <div className="pt-6 mb-6">
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
        <div className="pt-6 mb-6 grid grid-cols-2 gap-y-4 gap-x-2">
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
        <div className="pt-6 mb-6 flex flex-col gap-8">
          <h3 className="text-2xl font-bold">Szczegóły</h3>
          <div className="flex flex-col gap-4">
            {mockCarDetailsData.map(({title, value, isLink}, index) => (
              <div key={index} className={"grid grid-cols-2 gap-x-4 text-sm"}>
                <p className="text-[#66676C]">{title}</p>
                {isLink ? <a href="/" className=" text-[#0071CE] underline">{value}</a> : <p className="text-[#020309]">{value}</p>}
              </div>
            ))}
            <div className={"grid grid-cols-2 gap-x-4 text-[#44aa00] text-sm"}>
              <p>Kup ten pojazd na raty</p>
              <p>Oblicz</p>
            </div>
            <div className={"grid grid-cols-2 gap-x-4 text-sm mt-4"}>
              <p className="text-[#66676C]">VIN</p>
              <p className="text-[#020309]">Wyświetl VIN</p>
            </div>
          </div>
        </div>
      </main>
      <footer 
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#DCDDE0]"
      >
        <div className="flex gap-2 p-4">
          <button 
            className="flex gap-2.5 py-4 px-6 w-full items-center justify-center bg-[#C82814] text-white rounded h-12 tracking-[0.7px] leading-4 font-medium">
            <PhoneIcon />
            <span>Zadzwoń</span>
          </button>
          <button 
            className="flex gap-2.5 py-4 px-6 w-full items-center justify-center bg-[#0071CE] text-white rounded-[4px] h-12 tracking-[0.7px] leading-4 font-medium">
            <EnvelopeIcon />
            <span>Napisz</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
