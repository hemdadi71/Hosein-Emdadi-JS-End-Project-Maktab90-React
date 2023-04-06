import El from '@/Library'
import { handleBack, handleSubmitForm, handleValidation } from './Function'

export const Login = () => {
  return El({
    element: 'div',
    className: 'w-full h-full bg-white text-white text-3xl',
    child: [
      El({
        element: 'div',
        className: '',
        child: [
          El({
            element: 'img',
            onclick: handleBack,
            className: 'py-[21px] pl-[32px]',
            src: '../../../src/Assets/img/Vector.png',
          }),
          El({
            element: 'div',
            className: 'flex items-center justify-center mt-[75px]',
            child: [
              El({
                element: 'img',
                className: '',
                src: '../../../src/Assets/img/Vector 2.png',
              }),
            ],
          }),
          El({
            element: 'p',
            className:
              'text-[#152536] text-[32px] font-semibold text-center mt-[118px]',
            child: 'Login to Your Account',
          }),
          El({
            element: 'form',
            id: 'form',
            onsubmit: handleSubmitForm,
            className: 'flex flex-col items-center gap-5 mt-[48px]',
            child: [
              El({
                element: 'div',
                id: 'emailBox',
                className: 'relative flex flex-col justify-center',
                child: [
                  El({
                    element: 'input',
                    type: 'text',
                    name: 'email',
                    onkeyup: handleValidation,
                    className:
                      'w-[380px] bg-[#FAFAFA] text-black rounded-md py-[2px] placeholder-[#6C757D] text-[14px] outline-none focus:border-[2px] focus:border-black pl-9',
                    placeholder: 'Email',
                  }),
                  El({
                    element: 'img',
                    className: 'absolute left-4 top-4',
                    src: '../../../src/Assets/img/Vector-3.png',
                  }),
                ],
              }),
              El({
                element: 'div',
                id: 'passwordBox',
                className: 'relative flex flex-col justify-center',
                child: [
                  El({
                    element: 'input',
                    type: 'password',
                    onkeyup: handleValidation,
                    name: 'password',
                    className:
                      'w-[380px] text-black bg-[#FAFAFA] rounded-md py-[2px] placeholder-[#6C757D] text-[14px] outline-none focus:border-[2px] focus:border-black pl-9',
                    placeholder: 'Password',
                  }),
                  El({
                    element: 'img',
                    className: 'absolute left-4 top-3',
                    src: '../../../src/Assets/img/Vector-4.png',
                  }),
                  El({
                    element: 'img',
                    className: 'absolute right-4 top-3',
                    src: '../../../src/Assets/img/input-suffix.png',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'mt-[40px]',
                child: [
                  El({
                    element: 'label',
                    className: 'container',
                    child: [
                      El({
                        element: 'input',
                        type: 'checkbox',
                        id: 'checkbox',
                      }),
                      El({
                        element: 'span',
                        className: 'checkmark',
                      }),
                    ],
                  }),
                  El({
                    element: 'p',
                    className: 'text-[#212529] text-[16px]',
                    child: 'Remember me',
                  }),
                ],
              }),
              El({
                element: 'div',
                id: 'notExist',
              }),
              El({
                element: 'input',
                type: 'submit',
                className:
                  'w-[380px] bg-[#212529] text-[14px] py-[6px] mt-[160px] rounded-full',
                value: 'Sing In',
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
