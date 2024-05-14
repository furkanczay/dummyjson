"use client"
import { Button, Card, CardBody, CardHeader, Input, Textarea, Snippet } from '@nextui-org/react';
import React, { useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCheck, FaClipboard, FaPlay } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa6';

type Props = {
  origin: string
}

const Examples = (props: Props) => {
  const [isMounted, setIsMounted] = React.useState(false);
  

  useEffect(() => {
    setIsMounted(true);
  }, [])
  if(!isMounted) return null;

  return (
    <section id='examples' className='mt-20 mb-20 md:px-12'>
      <h2 className='text-4xl font-extrabold text-gray-900 dark:text-white mb-10'>Örnekler</h2>
      <h5 className='text-xl mt-10 mb-10 font-light italic'>Tüm Ürünleri Getir</h5>
      <Snippet size='sm' className='md:max-w-2xl md:w-full scale-75 md:scale-100' tooltipProps={{content: "Kopyala"}} variant='bordered' symbol="">
        <span>{`fetch('${props.origin}/api/products')`}</span>
        <span>{`.then(res => res.json())`}</span>
        <span>{`.then(data => console.log(data))`}</span>
      </Snippet>
      <h5 className='text-xl mt-10 mb-10 font-light italic'>İstenilen Bir Ürünü Getir</h5>
      <Snippet size='sm' className='md:max-w-2xl md:w-full scale-75 md:scale-100' tooltipProps={{content: "Kopyala"}} variant='bordered' symbol="">
        <span>{`fetch('${props.origin}/api/products/{id}')`}</span>
        <span>{`.then(res => res.json())`}</span>
        <span>{`.then(data => console.log(data))`}</span>
      </Snippet>
      <p className='mt-5'><small className='text-orange-300 italic'>{"{id}"} kısmını talep ettiğiniz ürün ile değiştirin.</small></p>



    </section>
  )
}

export default Examples