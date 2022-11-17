import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//const ScrollTrigger = dynamic(import("gsap/ScrollTrigger") as any, {ssr: false});
gsap.registerPlugin(ScrollTrigger)

type Props = {}

function InfoBis({}: Props) {
  if (typeof window !== "undefined") {
    const tlH = gsap.timeline({
      scrollTrigger: {
        trigger: "#infobis",
        // markers: { startColor: "blue", endColor: "blue" },
        scrub: true,
        start: "-40%",
        end: "40%",
      },
    });
    
    tlH.fromTo(
      ".highlight",
      { color: "rgba(255,255,255, 0.4" },
      { color: "rgba(255,255,255, 1.5", stagger: 1 }
    );
    
    const tlHRemove = gsap.timeline({
      scrollTrigger: {
        trigger: "#infobis",
        // markers: { startColor: "pink", endColor: "pink" },
        scrub: true,
        start: "-20%",
        end: "60%",
      },
    });
    
    tlHRemove.to(".highlight", { color: "rgba(255,255,255, 0.4", stagger: 1 });


  }
  return (
    <div id='infobis' className='relative z-10 flex items-center justify-center min-h-screen  bg-green-500 bg-opacity-25'>
      <div className="text_info">
        <h1 className='highlight'>La passion des confitures...</h1>
        <h2 className='highlight'>Deux années ont été nécessaires pour élaborer les recettes, maîtriser l’alchimie de la cuisson des différents fruits et implanter leur laboratoire fabrication à Puteaux.
        </h2>
        <h3 className='highlight'>
        Passionnés de cuisine et de bons produits, Pascal et Delphine vous proposent de merveilleuses confitures gourmandes élaborées avec passion.
        </h3>
        <h4 className='highlight'>C'est le souvenir des confitures consommées à la campagne chez ses grands parents, le goût des bonnes choses et l'influence de ses amis qui ont poussé Pascal dans cette aventure.</h4>
      </div>
      <img className='fraise' src="/fraise.png"  alt='fraise' />
      <img className='slice' src="/slice.png"  alt='slice' />
    </div>
  )
}

export default InfoBis