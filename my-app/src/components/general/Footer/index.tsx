"use client"

import EnvelopeIcon from "@/components/icons/EnvelopeIcon"
import PhoneIcon from "@/components/icons/PhoneIcon"

type FooterProps = {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void;
}

export const Footer = ({isModalOpen, setIsModalOpen}: FooterProps) => {
  return (
    <>
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
            className="flex gap-2.5 py-4 px-6 w-full items-center justify-center bg-[#0071CE] text-white rounded-[4px] h-12 tracking-[0.7px] leading-4 font-medium"
            onClick={() => setIsModalOpen(!isModalOpen)}
            >
            <EnvelopeIcon />
            <span>Napisz</span>
          </button>
        </div>
      </footer>
    </>
  )
}
