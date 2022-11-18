import Image from 'next/image'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    <div id='hero' className='relative flex flex-col items-start justify-center min-h-screen overflow-hidden bg-[#F2EBD6]'>
      <h1 className=' font-bold pl-5' >Les Confitures de Pascal</h1>
      <div className='banner w-3/4 ml-4 flex-col justify-around items-center bg-yellow-400 p-5 mt-10'>
       <div className='banner_text flex  justify-center items-center'>
       <div className="line h-56 w-8 bg-white mr-4">
        </div>
        <p className=' text-white  '>Des confitures artisanales gourmandes BIO confectionnées avec passion comme les réalisaient nos grands mères.</p>
       </div>
        <div className="img_fruit pt-20 pl-10">
          <img src="/Group_fruit.png" width={100} height={100} alt={'dessin de fruit'}/>
        </div>
      </div>
      <img className='arrow' src="/arrow.png" width={100} height={100} alt='arrow' />
      <img className='circle' src="/Ellipse.png" width={100} height={100} alt='circle' />
      <img className='melo' src="/_meli_melo.png" alt="" />
    </div>
  )
}

export default Hero