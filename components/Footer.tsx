import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <Card>
        <CardBody>
          <p className='text-center dark:text-white'>© {year} Furkan Özay. All rights reserved.</p>
        </CardBody>
      </Card>
    </footer>
  )
}

export default Footer