import Image from 'next/image'
import img1 from "@/app/img1.svg"
import img2 from "@/app/img-mob.svg"
import Form from '@/components/Form'



export default function Home() {
  return (
    <main className='font-roboto font-medium text-lg lg:flex lg:gap-8 lg:place-content-center lg:place-items-center lg:min-h-screen'>
      <picture className='block md:overflow-hidden md:max-h-96 md:rounded-b-3xl lg:hidden'>
        <Image className='w-full ' src={img2} alt='Mobile img'/>

      </picture>
      <div className='px-6 py-10 md:px-12 md:py-16 lg:bg-white lg:rounded-3xl lg:flex lg:p-6 lg:pl-0'>
        <div className='lg:flex lg:justify-center lg:items-center lg:px-16'>
          <div className='flex flex-col gap-4 lg-mx'>
            <h1 className='text-4xl md:text-5xl font-bold lg:text-6xl'>Stay Updated!</h1>
            <p className=''>Join 60,000+ product managers recieving monthly updates on:</p>
            <ul className='list'>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more</li>
            </ul>
            <Form />
          </div>
        </div>
        <Image className='hidden lg:block' src={img1} alt='newsletter'/>
      </div>
    </main>
  )
}
