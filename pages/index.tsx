import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

import Base from '../components/Base'
import Base2 from '../components/Base2'
import Products from '../components/Products'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div className='min-h-screen' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* base */}
      {/* <Base /> */}
      <Base2 />
      {/* products */}
      <Products/>
      {/* contact*/}
      <Contact/>
      {/* footer */}


    </div>
  )
}
