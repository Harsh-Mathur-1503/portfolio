import NavBar from '@/components/NavBar';
import Main from '@/components/Main';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar />
        <Main />
    </>
  )
}
