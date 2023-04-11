import El from '@/Library'
import { handleAddCheckmark } from '../Function'

export const Color = color => {
  const colorBox = document.getElementById('colorBox')
  color.map(item => {
    const ColorItem = El({
      element: 'div',
      onclick: handleAddCheckmark,
      className: `w-[10px] h-[10px] rounded-full p-4 flex items-center justify-center text-[16px] transition-all ease-in-out duration-500 ${item}`,
      child: [
        El({
          element: 'i',
          className:
            'bi bi-check-lg text-xl text-transparent transition-all ease-in-out duration-300',
        }),
      ],
    })
    colorBox.append(ColorItem)
  })
}
