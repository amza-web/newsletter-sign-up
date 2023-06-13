import React from 'react'
import img3 from '@/app/icon-success.svg'
import Image from 'next/image'

const Success = ({email}) => {
  return (
    <div className='font-roboto font-medium text-lg lg:flex lg:place-content-center lg:place-items-center lg:min-h-screen'>
        <div className='p-10 md:p-16 lg:bg-white lg:rounded-3xl lg:flex lg:p-0'>
            <div className='lg:flex lg:justify-center lg:items-center lg:p-16'>
            <div className='flex flex-col gap-6 lg-mx'>
                <Image className='pb-4' src={img3} alt='checkmark'/>
                <h1 className='text-4xl md:text-5xl font-bold lg:text-6xl'>Thanks for subscribing!</h1>
                <p className=''>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                <input className='inp font-medium' type='submit' value='Dismiss Message'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Success