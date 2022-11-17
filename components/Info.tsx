import Image from 'next/image'
import React from 'react'

type Props = {}

function Info({}: Props) {
  return (
    <div id='info' className='relative z-10 flex items-center justify-center min-h-screen  bg-blue-500 bg-opacity-25 '>
      <div className='text'>
        <div className="left">
        <h2 >Des ingrédients de qualités:</h2>
        <h3>Du sucre de canne blond biologique,
            Des fruits sélectionnés avec soin (biologique),
             Des épices bio aussi...
        </h3>
        </div>
        <div className="right"><h4>Toutes nos confitures sont cuites 
dans des bassines de cuivre traditionnelles et fabriqué à Puteaux,
en Ile de France</h4></div>
      </div>
      <img className='agrum' src="/agrum.png"  alt='agrum' />
      <img className='orange' src="/orange.png"  alt='orange' />
    </div>
  )
}

export default Info