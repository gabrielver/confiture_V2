import React from 'react'

 type Props = {openMeli: any}

 function MeliModal({openMeli}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
            <div className="close z-50" onClick={() => openMeli(false)}>X</div>
            <img className='flex scale-75 absolute top-[0%] mix-blend-multiply' src="/_meli_melo.png" alt="pot"  />
              <h4>Nos confitures Meli-Melo</h4>
              <p>Confiture de Fraise</p>
              <p>Confiture de Cerise</p>
              <p>Confiture de Framboise</p>
              <p>Confiture de Cassis</p>
              <p>Confiture de Mirtylle</p>
              <p>Confiture de Groseille</p>
             
              
            </div>
           </div>
           
    )
}

export default MeliModal