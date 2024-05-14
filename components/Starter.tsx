"use client"
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button, Card, CardBody } from '@nextui-org/react'
import Announcements from './Announcements'
import toast from 'react-hot-toast'

type Props = {
  feedbackSuccess?: string
}

const Starter = (props: Props) => {
  if(props.feedbackSuccess) {
    if(props.feedbackSuccess === 'success') {
      toast.success('Geri bildiriminiz başarıyla gönderildi.')
    } else {
      toast.error('Geri bildiriminiz gönderilirken bir hata oluştu.')
    }
  }
  return (
    <section id='starter' className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-full text-center lg:py-16 lg:px-12">
          <Announcements />
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">Dummy JSON | Furkan Özay tarafından geliştirildi.</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">Bu site frontend developerların fetch alıştırmaları yapması için geliştirilmiştir.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Button as={Link} href="#routes" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Rotalar
                  <FaArrowRight className="ml-2" />
              </Button>
              <Button as={Link} href="#examples" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Örnekler
                  <FaArrowRight className="ml-2" />
              </Button>  
          </div>
          <Card className='max-w-xs mx-auto bg-orange-700/30'>
            <CardBody>
                <p className='text-center'>Beta v1.0.0</p>
            </CardBody>
          </Card>
      </div>
  </section>
  )
}

export default Starter