import { CharacteristicsType } from "@/services/types/types"
import { CustomForm } from "../Form"

type ModalProps = {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  setFormData: (formData: CharacteristicsType[]) => void
  setImagesData: any
}

export const Modal = ({isModalOpen, setIsModalOpen, setFormData, setImagesData}: ModalProps) => {
  return (
    <div className={`relative z-10 text-black ${!isModalOpen && 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
        <div className="flex items-end justify-center p-4 text-center">
          <CustomForm 
            setFormData={setFormData} 
            setIsModalOpen={setIsModalOpen}
            setImagesData={setImagesData}
          />
        </div>
      </div>
    </div>
  )
}
