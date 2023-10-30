import Image from 'next/image'

import SignUpButton from './components/signupbutton'

export default function Home() {
  return (
<main className='h-[calc(100dvh)]'>
    <div className='w-full h-full absolute z-0'>
      <Image src='/ruby.avif' alt='ruby' fill className='object-cover'></Image>
    </div>

    <div className='relative flex flex-col items-center justify-center z-40 h-full space-y-16'>
      <h1 className='font-mono md:text-8xl text-5xl font-medium text-white  text-shadow '>Coming Soon</h1>
      <SignUpButton text='Sign up for updates!' ></SignUpButton>
    </div>
</main>
  )
}
