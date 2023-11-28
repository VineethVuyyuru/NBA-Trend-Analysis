/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../src/logo_image.png'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className='h-15 w-10'
                    src={logo} alt='iamge'
                  />
                 
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/"
                    className="border-transparent text-gray-900 hover:border-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans no-underline hover:text-base"
                  >
                    Home
                  </a>
                  <a
                    href="/query1"
                    className="border-transparent  text-gray-500 hover:border-indigo-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans no-underline hover:text-base"
                  >
                    Query1
                  </a>
                  <a
                    href="/query2"
                    className="border-transparent text-gray-500 hover:border-indigo-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans no-underline hover:text-base"
                  >
                    Query2
                  </a>
                  <a
                    href="/query3"
                    className="border-transparent text-gray-500 hover:border-indigo-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans no-underline hover:text-base"
                  >
                    Query3
                  </a>
                  <a
                    href="/query4"
                    className="border-transparent text-gray-500 hover:border-indigo-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans no-underline hover:text-base"
                  >
                    Query4
                  </a>
                  <a
                    href="/query5"
                    className="border-transparent text-gray-500 hover:border-indigo-600 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-sans no-underline hover:text-base"
                  >
                    Query5
                  </a>
                </div>
              </div>
              
              
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}
