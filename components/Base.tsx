import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Hero from '../components/Hero'
import Info from './Info'
import InfoBis from './InfoBis'
import { useAnimationFrame } from "framer-motion"
import { useScroll } from "framer-motion"

type Props = {}

function Base({}: Props) {

const { scrollY } = useScroll()

useEffect(() => {
  return scrollY.onChange((latest) => {
    console.log("Page scroll: ", latest)
  })
}, [])
  
return (
    <div className='min-h-screen'>
      {/* <video className='product__video' loop autoPlay >
        <source src="/test.mkv" />
      </video> */}
  
    <img  id='hero-lightpass' src="/test img_img/00000.png" alt="" />

      {/*hero */}
      <Hero />
      {/* info */}
      <Info/>
      {/* infobis */}
      <InfoBis/>
    </div>
  )
}

export default Base