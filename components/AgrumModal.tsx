import React from 'react'

 type Props = {openAgrum: any}

 function AgrumModal({openAgrum}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
            <div className="close z-50" onClick={() => openAgrum(false)}>X</div>
            <img className='flex scale-75 absolute top-[0%] mix-blend-multiply' src="/_agrumes.png" alt="pot"  />
              <h4>Nos confitures Aux Agrumes</h4>
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

export default AgrumModal