
import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
export default function Home() {
  return (
    <MainLayout>
      <h1 className='title'>
        Ir al about <Link href={'/about'}>about</Link>
      </h1>
    </MainLayout>
  )
}
