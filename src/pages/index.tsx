import Head from 'next/head'
import { HomePage } from '@/views/homepage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js starter</title>
      </Head>

      <HomePage />
    </>
  )
}
