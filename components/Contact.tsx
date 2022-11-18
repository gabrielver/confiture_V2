import React from 'react'
import ContactList from './ContactList'

type Props = {}

function Contact({}: Props) {
  return (
    <div id='contact' className='relative flex flex-col items-center justify-center min-h-screen bg-[#F2EBD6]'>
        <div className='contact_title'>
          <h1>Points de Ventes</h1>
          <h2>Retrouvez tous nos produits chez nos partenaires distributeurs</h2>
        </div>
        <div className='banderole'>
          <img src="/banner logo.png" alt="banner logo" />
          <img src="/banner logo.png" alt="banner logo" />
          <img src="/banner logo.png" alt="banner logo" />
        
          {/* <div className="banderole_inside">
            leBonMarche-Biocop-Naturalia-LaGrandeEpicer
          </div> */}
        </div>
       <ContactList />
        <button className='more'><img src="/ArrowStraight.png" alt="" /></button>
        <div className="info_sup">
          <p>Pour tout renseignements ou pour devenir l'un de nos partenaires distributeurs, vous pouvez nous contacter a l'adresse suivante :</p>
          <a href="">info@lesconfituredepascal.fr</a>
        </div>
    </div>
  )
}

export default Contact