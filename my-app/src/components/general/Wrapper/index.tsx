"use client"

import ShareIcon from "@/components/icons/ShareIcon"
import EmblaCarousel from "../Carousel/Carousel"
import BookmarkIcon from "@/components/icons/BookmarkIcon"
import { Characteristics } from "../Characteristics"
import { CharacteristicsType, DefaultDataType } from "@/services/types/types"
import { useState } from "react"

export const defaultCharacteristicsData: CharacteristicsType[] = [
  {
    title: "Oferta od",
    value: "-",
    isLink: false,
  },
  {
    title: "Pokaż oferty z numerem VIN",
    value: "-",
    isLink: false,
  },
  {
    title: "Marka pojazdu",
    value: "-",
    isLink: true,
  },
  {
    title: "Model pojazdu",
    value: "-",
    isLink: true,
  },
  {
    title: "Generacja",
    value: "-",
    isLink: true,
  },
  {
    title: "Rok produkcji",
    value: "-",
    isLink: false,
  },
  {
    title: "Przebieg",
    value: "-",
    isLink: false,
  },
  {
    title: "Pojemność skokowa",
    value: "-",
    isLink: false,
  },
  {
    title: "Rodzaj paliwa",
    value: "-",
    isLink: true,
  },
  {
    title: "Skrzynia biegów",
    value: "-",
    isLink: true,
  },
  {
    title: "Typ nadwozia",
    value: "-",
    isLink: true,
  },
  {
    title: "Liczba drzwi",
    value: "-",
    isLink: false,
  },
  {
    title: "Liczba miejsc",
    value: "-",
    isLink: false,
  },
  {
    title: "Kolor",
    value: "-",
    isLink: true,
  },
  {
    title: "Zarejestrowany w Polsce",
    value: "-",
    isLink: true,
  },
  {
    title: "Bezwypadkowy",
    value: "-",
    isLink: true,
  },
  {
    title: "Stan",
    value: "-",
    isLink: true,
  },
]

export const defaultData: DefaultDataType = {
  brand: "-",
  model: "-",
  year_production: "-",
  course: "-",
  displacement: "-",
  fuel_type: "-",
  price: "-",
  installment_plan_price: "-",
  date: "-",
  time: "-",
  id: "-",
  vin: "-",
  characteristics: defaultCharacteristicsData
}

export const Wrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState(defaultData);
  const [imagesData, setImagesData] = useState();

  const {
    brand, 
    course, 
    date, 
    displacement, 
    fuel_type, 
    id, 
    installment_plan_price, 
    model, 
    price, 
    time, 
    year_production
  } = formData;
  
  return(
    <>
      <EmblaCarousel imagesData={imagesData} />
        <div className="my-6 flex flex-col gap-4 mx-4 divide-y-0">
          <div className="flex flex-col gap-2 text-[#020309]">
            <h3 className="text-2xl font-bold">{brand} {model}</h3>
            <p className="leading-5">{year_production} · {course} km · {displacement} cm3 · {fuel_type}</p>
          </div>
          <div className="flex items-baseline gap-2 text-[#C82814]">
            <h3 className="text-2xl font-bold">{price}</h3>
            <p>PLN</p>
          </div>
        </div>
        <div className="pt-6 mb-6 mx-4 border-t">
          <div className="p-4 bg-[#ECF5FE] flex justify-between">
            <div className="flex flex-col text-[#020309]">
              <p>Lub od</p>
              <div className="flex">
                <span className="font-bold">{installment_plan_price} PLN</span>
                /mc
              </div>

            </div>
            <button className="border-[3px] rounded border-[#0071CE] px-6 py-1 bg-white text-[#0071CE] font-bold font">
              Sprawdź stawkę
            </button>
          </div>
        </div>
        <div className="pt-6 mb-6 grid grid-cols-2 gap-y-4 gap-x-2 mx-4 border-t">
          <div>
            <p className="text-sm text-[#020309] ">{date}, {time}</p>
          </div>
          <div>
            <p className="text-sm text-[#020309]">ID: {id}</p>
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
        <Characteristics 
          formData={formData}
          setFormData={setFormData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setImagesData={setImagesData}
        />
    </>
  )
}