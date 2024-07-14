import React from 'react'
import Link from 'next/link'
import { FaClipboard, FaGithub, FaHandPointer, FaRoute } from 'react-icons/fa'
import { ThemeSwitcher } from '../ThemeSwitcher'
import LanguageSwitcher from '../LanguageSwitcher'
import Feedback from '../Feedback'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className="hidden md:block sticky top-0 left-0 z-40 w-full h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="overflow-y-auto py-5 px-3 h-full bg-gray-100 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <ul className="space-y-2">
          <li>
            <Link href="#starter" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaClipboard />
              <span className="ml-3">Başlangıç</span>
            </Link>
          </li>
          <li>
            <Link href="#routes" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaRoute />
              <span className="ml-3">Rotalar</span>
            </Link>
          </li>
          <li>
            <Link href="#examples" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaHandPointer />
              <span className="ml-3">Örnekler</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <Link target='_blank' href="https://github.com/furkanczay/dummyjson" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <FaGithub />
              <span className="ml-3">Github (Kaynak Kodlar)</span>
            </Link>
          </li>
          <li>
            <Feedback />
          </li>
        </ul>
      </div>
      <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
        <LanguageSwitcher />
        <ThemeSwitcher />
        
        
      </div>
    </aside>
  )
}

export default Sidebar