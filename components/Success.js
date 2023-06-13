import React from 'react'
import img3 from '@/app/icon-success.svg'
import Image from 'next/image'

const Success = ({email, setFinish, setEmail}) => {
  function handler(e){
    setEmail("")
    setFinish(false);
  }
  return (
    <div className='font-roboto font-medium text-lg flex place-content-center place-items-center min-h-screen'>
        <div className='p-10 md:p-16 lg:bg-white lg:rounded-3xl lg:flex lg:p-0'>
            <div className='lg:flex lg:justify-center lg:items-center lg:p-16'>
            <div className='flex flex-col gap-16 lg:gap-6 lg-mx'>
                <div className='flex flex-col gap-6'>
                  <Image className='pb-4' src={img3} alt='checkmark'/>
                  <h1 className='text-4xl md:text-5xl font-bold lg:text-6xl'>Thanks for subscribing!</h1>
                  <p className=''>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <input className='inp font-medium' type='submit' value='Dismiss Message' onClick={handler}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Success