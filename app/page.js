import Image from 'next/image'
import img1 from "@/app/img1.svg"



export default function Home() {
  return (
    <main className=' min-h-screen flex place-content-center place-items-center font-roboto'>
      <div className='bg-white rounded-3xl flex p-6 pl-16'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col gap-5 h-full justify-center'>
            <h1 className='text-5xl font-bold'>Stay Updated!</h1>
            <p>Join 60,000+ product managers recieving monthly updates on:</p>
            <ul>
              <li className='pl-12'>Product discovery and building what matters</li>
              <li className='pl-12'>Measuring to ensure updates are a success</li>
              <li className='pl-12'>And Much more</li>
            </ul>
            <form>
              <div>
                <label htmlFor='email'>Email address</label>
                <input type='email' id='email' />

              </div>
              <input type='submit' value='Subscribe to monthly newsletter' />
            </form>
          </div>
        </div>
        <Image src={img1} alt='newsletter'/>
      </div>
    </main>
  )
}
