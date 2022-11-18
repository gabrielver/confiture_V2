import React from 'react'

 type Props = {openVerger: any}

 function VergerModal({openVerger}: Props) {

    return (
            <div className="bg-modal">
            <div className="modal-content">
            <div className="close z-50" onClick={() => openVerger(false)}>X</div>
            <img className='flex scale-75 absolute top-[0%] mix-blend-multiply' src="/_verger.png" alt="pot"  />
              <h4 className='max-w-[90%] m-auto text-center'>Nos confitures Aux fruits du Verger</h4>
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

export default VergerModal