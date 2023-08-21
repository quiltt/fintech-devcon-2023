import FintechDevCon from '@/images/fintech-devcon.png'

import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center">
      <figure className="h-auto w-full max-w-lg p-4">
        <Image src={FintechDevCon} alt="Fintech DevCon" />
      </figure>
    </section>
  )
}
