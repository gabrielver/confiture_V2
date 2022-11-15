import React from 'react'

type Props = {}

function Contact({}: Props) {
  return (
    <div id='contact' className='relative flex flex-col items-center min-h-screen bg-[#F2EBD6]'>
        <div className='contact_title'>
          <h1>Points de Ventes</h1>
          <h2>Retrouvez tous nos produits chez nos partenaires distributeurs</h2>
        </div>
        <div className='banderole'>
          <div className="banderole_inside">
            leBonMarche-Biocop-Naturalia-LaGrandeEpicer
          </div>
        </div>
        <div className='contact_list'>
            <div className="template ">
              <div className="address">
              <h3>le bon marché</h3>
              <h4>Paris 75009</h4>
              <h5>9 rue ds martyrs</h5>
              </div>
              <a href="" className="tel">01 71 73 43 77</a>
              <div className="hour">
                  <span>lundi au vendredi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>samedi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>dimanche</span>
                  <p>11h-14h & 15h-19h30</p>
              </div>
              <a href="">site web</a>
            </div>
            <div className="template ">
              <div className="address">
              <h3>le bon marché</h3>
              <h4>Paris 75009</h4>
              <h5>9 rue ds martyrs</h5>
              </div>
              <a href="" className="tel">01 71 73 43 77</a>
              <div className="hour">
                  <span>lundi au vendredi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>samedi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>dimanche</span>
                  <p>11h-14h & 15h-19h30</p>
              </div>
              <a href="">site web</a>
            </div>
            
        </div>
        <div className='contact_list'>
        <div className="template ">
              <div className="address">
              <h3>le bon marché</h3>
              <h4>Paris 75009</h4>
              <h5>9 rue ds martyrs</h5>
              </div>
              <a href="" className="tel">01 71 73 43 77</a>
              <div className="hour">
                  <span>lundi au vendredi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>samedi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>dimanche</span>
                  <p>11h-14h & 15h-19h30</p>
              </div>
              <a href="">site web</a>
            </div>
            <div className="template ">
              <div className="address">
              <h3>le bon marché</h3>
              <h4>Paris 75009</h4>
              <h5>9 rue ds martyrs</h5>
              </div>
              <a href="" className="tel">01 71 73 43 77</a>
              <div className="hour">
                  <span>lundi au vendredi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>samedi</span>
                  <p>11h-14h & 15h-19h30</p>
                  <span>dimanche</span>
                  <p>11h-14h & 15h-19h30</p>
              </div>
              <a href="">site web</a>
            </div>
            
        </div>
        <button className='more'>voir plus</button>
        <div className="info_sup">
          <p>Pour tout renseignements ou pour devenir l'un de nos point de vente, vous pouvez nous contacter a l'adresse suivante :</p>
          <a href="">info@lesconfituredepascal.fr</a>
        </div>
    </div>
  )
}

export default Contact