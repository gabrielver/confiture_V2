import Image from 'next/image'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    <div id='hero' className='relative  flex-col items-center justify-center min-h-screen overflow-hidden bg-[#F2EBD6]'>
      <h1 className=' font-bold pt-10 pl-5' >Les Confitures de Pascal</h1>
      <div className='banner ml-4 w-3/4 flex-col justify-around items-center bg-yellow-400 p-5 mt-10'>
       <div className='banner_text flex  justify-center items-center'>
       <div className="line h-56 w-8 bg-white mr-4">
        </div>
        <p className=' text-white  '>Des confitures artisanales gourmandes BIO confectionnées avec passion comme les réalisaient nos grands mères.</p>
       </div>
        <div className="img_fruit pt-20 pl-10">
          <Image src="/Group_fruit.png" width={100} height={100} alt={'dessin de fruit'}/>
        </div>
      </div>
      <Image className='arrow' src="/arrow.png" width={100} height={100} alt='arrow' />
      <Image className='circle' src="/Ellipse.png" width={100} height={100} alt='circle' />
    </div>
  )
}

export default Hero