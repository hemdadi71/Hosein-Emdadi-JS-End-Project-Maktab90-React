import El from '@/Library'
const Container = () => {
  return El({
    element: 'main',
    className: 'relative flex-1 w-[48rem]',
    child: [
      El({
        element: 'input',
        type: 'text',
        id: 'floating_outlined',
        className:
          'block px-3 pb-2.5 pt-3 w-75 text-md text-gray-900 bg-transparent rounded-md border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-violet-800 peer',
        placeholder: ' ',
        name: 'TaskName',
      }),
      El({
        element: 'label',
        restAttrs: { for: 'floating_outlined' },
        className:
          'absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-3 peer-focus:text-violet-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1',
        child: 'Task Name',
      }),
    ],
  })
}

export default Container
