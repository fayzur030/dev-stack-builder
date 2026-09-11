import type { Dispatch, SetStateAction } from 'react'
import type { TechItem } from '../../types/technologies'
import { RxCross2 } from 'react-icons/rx'
import { toast } from 'react-toastify'

interface ITechnologyCard {
  addStack: TechItem[]
  setAddStack: Dispatch<SetStateAction<TechItem[]>>
}

const StackCard = ({ addStack, setAddStack }: ITechnologyCard) => {
  const handelSingleRemoveStack = (id: string) => {
    const findStackName = addStack.find((stack) => stack.name)
    const removeSingleStack = addStack.filter((stack) => stack.id !== id)
    setAddStack(removeSingleStack)
    toast.info(`${findStackName?.name} deleted successfully`, {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }
  const deleteAllStack = () => {
    setAddStack([])
    toast.info(`Delete All Stack successfully`, {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }
  return (
    <div className='p-4 md:p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white sticky top-22'>
      {/* Header */}
      <div className='border-b border-gray-100 pb-4'>
        <h1 className='text-base text-[#0F172A] font-semibold'>Stack Card</h1>

        <p className='text-[12px] text-[#94A3B8] mt-1'>
          {addStack.length} Technology Selected
        </p>
      </div>

      {/* Stack Items */}
      <div className='mt-4 space-y-3'>
        {addStack.map((stack) => (
          <div
            key={stack.id}
            className='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200'
          >
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center'>
                <img
                  src={stack.icon}
                  alt={stack.name}
                  className='w-7 h-7 object-contain'
                />
              </div>

              <div>
                <h2 className='text-sm font-semibold text-[#0F172A]'>
                  {stack.name}
                </h2>

                <p className='text-[11px] text-[#94A3B8] mt-0.5'>
                  {stack.category}
                </p>
              </div>
            </div>

            {/* Remove Icon */}
            <button
              type='button'
              className='w-7 h-7 flex items-center justify-center rounded-md text-[#94A3B8] hover:text-red-500 hover:bg-red-50 transition-all duration-200 cursor-pointer'
              onClick={() => handelSingleRemoveStack(stack.id)}
            >
              <RxCross2 size={17} />
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-end'>
        <button
          className='text-[#D82C20] font-semibold px-6 w-full py-2 text-sm rounded-lg border border-[#D82C20] cursor-pointer hover:bg-red-50 transition-all  duration-300'
          onClick={() => deleteAllStack()}
        >
          Remove All
        </button>
      </div>
    </div>
  )
}

export default StackCard
