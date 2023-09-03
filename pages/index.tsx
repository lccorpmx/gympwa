import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Card from '@/components/card'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stream Gym</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='text-center pt-8'>
        <h1 className='text-6xl'>StreamGym</h1>
        <p className='text-4xl'>¡Hola Arturo!</p>
        <p className='text-2xl'>Bienvenido</p>
      </div>
      <div className='grid grid-cols-2 gap-6 place-items-center pt-8 m-6'>
      <Card Icono='Apple'/>
      <Card Icono='Dumbbell'/>
      <Card Icono='Pill'/>
      <Card Icono='CalendarClock'/>
      </div>
    </>
  )
}
