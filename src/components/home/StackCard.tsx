import type { Dispatch, SetStateAction } from 'react'
import type { TechItem } from '../../types/technologies'

interface ITechnologyCard {
  addStack: TechItem[]
  setAddStack: Dispatch<SetStateAction<TechItem[]>>
}

const StackCard = ({ addStack, setAddStack }: ITechnologyCard) => {
  console.log(addStack)
  return (
    <div className='p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
      Stack Card
    </div>
  )
}

export default StackCard
