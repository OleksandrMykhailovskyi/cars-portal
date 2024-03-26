import { mockCarDetailsData } from "../../mock";

export default function Home() {
  return (
    <div className="relative">
      <header></header>
      <main className="mx-4 divide-y flex flex-col">
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
            sd
            <p className="text-[#0071CE] text-xs font-bold">Udostępnij to ogłoszenie</p>
          </div>
          <div className="flex gap-2 items-center">
            sdf
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
    </div>
  );
}
