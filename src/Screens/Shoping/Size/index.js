import El from '@/Library'
import { size } from 'lodash'
import { handleActiveSize } from '../Function'

export const Size = size => {
  const sizeBox = document.getElementById('sizeBox')
  size.map(item => {
    const SizeItem = El({
      element: 'div',
      onclick: handleActiveSize,
      className:
        'w-[10px] h-[10px] rounded-full border-2 border-black  p-4 flex items-center justify-center text-[16px] transition-all ease-in-out duration-500 font-bold',
      child: `${item}`,
    })
    sizeBox.append(SizeItem)
  })
}
