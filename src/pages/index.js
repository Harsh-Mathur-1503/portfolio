import NavBar from '@/components/NavBar';
import Main from '@/components/Main';
import Head from 'next/head';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar />
        <Main />
        <About />
        <Skills />
        <Work />
    </>
  )
}
