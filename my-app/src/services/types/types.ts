export type CharacteristicsType = {
  title: string
  value: string
  isLink: boolean
}

export type Inputs = {
  offer_from: string,
  show_offers_with_VIN: string,
  brand: string,
  model: string,
  generation: string,
  year_production: string,
  course: string,
  fuel_type: string,
  transmission: string,
  car_type: string,
  doors_num: string,
  sits_num: string,
  color: string,
  is_registered_in_poland: string,
  absence_of_accidents: string,
  condition: string,
  displacement: string,
  price: string,
  installment_plan_price: string,
  date: string,
  time: string,
  id: string,
  vin: string,
}

export type DefaultDataType = {
  brand: string,
  model: string,
  year_production: string,
  course: string,
  displacement: string,
  fuel_type: string,
  price: string,
  installment_plan_price: string,
  date: string,
  time: string,
  id: string,
  vin: string,
  characteristics: CharacteristicsType[]
}