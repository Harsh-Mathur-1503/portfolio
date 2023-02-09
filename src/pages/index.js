import NavBar from '@/components/NavBar';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
      </div>
    </>
  )
}
