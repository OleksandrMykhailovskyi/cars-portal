"use client"

import { CharacteristicsType, Inputs } from "@/services/types/types"
import { useForm, SubmitHandler } from "react-hook-form"

type CustomFormTypes = {
  setIsModalOpen: (isOpen: boolean) => void,
  setFormData: (formData: CharacteristicsType[]) => void,
}

export const CustomForm = ({setIsModalOpen, setFormData} : CustomFormTypes) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({
    offer_from, 
    show_offers_with_VIN, 
    brand, 
    model, 
    generation,
    year_production,
    course,
    fuel_type,
    transmission,
    car_type,
    doors_num,
    sits_num,
    color,
    is_registered_in_poland,
    absence_of_accidents,
    condition,
  }) => {
    const payload = [
      {
        title: "Oferta od",
        value: offer_from,
        isLink: false,
      },
      {
        title: "Pokaż oferty z numerem VIN",
        value: show_offers_with_VIN,
        isLink: false,
      },
      {
        title: "Marka pojazdu",
        value: brand,
        isLink: true,
      },
      {
        title: "Model pojazdu",
        value: model,
        isLink: true,
      },
      {
        title: "Generacja",
        value: generation,
        isLink: true,
      },
      {
        title: "Rok produkcji",
        value: year_production,
        isLink: false,
      },
      {
        title: "Przebieg",
        value: course,
        isLink: false,
      },
      {
        title: "Rodzaj paliwa",
        value: fuel_type,
        isLink: true,
      },
      {
        title: "Skrzynia biegów",
        value: transmission,
        isLink: true,
      },
      {
        title: "Typ nadwozia",
        value: car_type,
        isLink: true,
      },
      {
        title: "Liczba drzwi",
        value: doors_num,
        isLink: false,
      },
      {
        title: "Liczba miejsc",
        value: sits_num,
        isLink: false,
      },
      {
        title: "Kolor",
        value: color,
        isLink: true,
      },
      {
        title: "Zarejestrowany w Polsce",
        value: is_registered_in_poland,
        isLink: true,
      },
      {
        title: "Bezwypadkowy",
        value: absence_of_accidents,
        isLink: true,
      },
      {
        title: "Stan",
        value: condition,
        isLink: true,
      },
    ]

    setFormData(payload)
    setIsModalOpen(false)
  }
  
  return (
    <form
      className="relative transform rounded-lg bg-white text-left shadow-xl transition-all flex flex-col gap-3 p-4 max-h-[500px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="font-bold">Введите значения характеристик</h3>
      <div className="flex flex-col gap-2 overflow-scroll">
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Тип продавца</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("offer_from")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Показывать предложение с VIN номером</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("show_offers_with_VIN")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Бренд</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("brand")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Модель</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("model")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Поколение</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("generation")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Год производства</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("year_production")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Пробег</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("course")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Тип двигателя</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("fuel_type")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Тип трансмиссии</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("transmission")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Тип машины</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("car_type")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Количество дверей</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("doors_num")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Количество сидений</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("sits_num")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Цвет</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("color")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Зарегистровано в Польше</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("is_registered_in_poland")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Отстуствие ДТП</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("absence_of_accidents")} />
        </label>
        <label className="flex gap-2 items-center justify-between">
          <span className="text-sm">Общее состояние</span>
          <input className="border border-[#0071CE] rounded p-1" placeholder="" {...register("condition")} />
        </label>
      </div>

      <button type="submit" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Готово</button>
    </form>
  )

}