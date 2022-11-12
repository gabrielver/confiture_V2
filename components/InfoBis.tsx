import Image from 'next/image'
import React from 'react'

type Props = {}

function InfoBis({}: Props) {
  return (
    <div id='infobis' className='relative z-10 flex items-center justify-center min-h-screen  bg-green-500 bg-opacity-25'>
      <div className="text_info">
        <h1>La passion des confitures...</h1>
        <h2>Deux années ont été nécessaires pour élaborer les recettes, maîtriser l’alchimie de la cuisson des différents fruits et implanter leur laboratoire fabrication à Puteaux.
        </h2>
        <h3>
        Passionnés de cuisine et de bons produits, Pascal et Delphine vous proposent de merveilleuses confitures gourmandes élaborées avec passion.
        </h3>
        <h4>C'est le souvenir de confitures consommées à la campagne chez ses grands parents, le goût des bonnes choses et l'influence de ses amis qui ont poussé Pascal dans cette aventure.</h4>
      </div>
      <Image className='fraise' src="/fraise.png" width={100} height={100} alt='fraise' />
      <Image className='slice' src="/slice.png" width={100} height={100} alt='slice' />
    </div>
  )
}

export default InfoBis