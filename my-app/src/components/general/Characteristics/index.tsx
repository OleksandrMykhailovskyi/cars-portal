"use client"

import { Modal } from "../Modal"
import { Footer } from "../Footer"
import { CharacteristicsType } from "@/services/types/types"

export const defaultFormData: CharacteristicsType[] = [
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

export const Characteristics = ({formData, setFormData, isModalOpen, setIsModalOpen, setImagesData} : any) => {
  return (
    <>
      <div className="pt-6 mb-6 flex flex-col mx-4">
        <h3 className="text-[#020309] text-2xl font-bold">Szczegóły</h3>
        <div className="flex flex-col gap-4">
          {formData.characteristics.map(({ title, value, isLink }: any, index: number) => (
            value !== "" && (
              <div key={index} className={"grid grid-cols-2 gap-x-4 text-sm"}>
                <p className="text-[#66676C]">{title}</p>
                {isLink ? <a href="/" className="text-[#0071CE] underline">{value}</a> : <p className="text-[#020309]">{value}</p>}
              </div>
            )
          ))}
          <div className={"grid grid-cols-2 gap-x-4 text-[#44aa00] text-sm"}>
            <p>Kup ten pojazd na raty</p>
            <p>Oblicz</p>
          </div>
          <div></div>
        </div>
        <div className={"grid grid-cols-2 gap-x-4 text-sm mt-4 w-[90%]"}>
          <p className="text-[#66676C]">VIN</p>
          <p className="text-[#020309]">{formData.vin}</p>
        </div>
      </div>
      <Footer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Modal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setFormData={setFormData}
        setImagesData={setImagesData}
      />
    </>
  )
}